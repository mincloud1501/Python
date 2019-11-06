import json
import re

from konlpy.tag import Twitter
from collections import Counter

import matplotlib.pyplot as plt
import matplotlib
from matplotlib import font_manager, rc

import pytagcloud
import webbrowser


# wordInfo Dictionary 형식의 data를 받아 bar graph를 그리는 함수
def showGraph(wordInfo):
    font_location = "d:/tmp/malgun.ttf"
    font_name = font_manager.FontProperties(fname=font_location).get_name()
    matplotlib.rc('font', family=font_name)

    plt.xlabel('주요 단어')
    plt.ylabel('빈도수')
    plt.grid(True)

    Sorted_Dict_Values = sorted(wordInfo.values(), reverse=True)
    Sorted_Dict_Keys = sorted(wordInfo, key=wordInfo.get, reverse=True)

    plt.bar(range(len(wordInfo)), Sorted_Dict_Values, align='center')
    plt.xticks(range(len(wordInfo)), list(Sorted_Dict_Keys), rotation='70')

    plt.show()


# word cloud를 만들기 위한 pytagcloud 패키지 이용
# 사용할 font를 복사하여 ‘[파이썬이 설치된 경로]\Lib\site-packages\pytagclod\fonts’ 에 복사한 후 fonts.json 파일에 추가
def saveWordCloud(wordInfo, filename):
    taglist = pytagcloud.make_tags(dict(wordInfo).items(), maxsize=80)
    pytagcloud.create_tag_image(taglist, filename, size=(640, 480), fontname='korean', rectangular=False)
    webbrowser.open(filename)


def main():
    # 아래 파일 경로는 실제 JSON 데이터가 저장된 경로
    openFileName = 'd:/tmp/SK브로드밴드_naver_news.json'

    cloudImagePath = openFileName + '.jpg'

    rfile = open(openFileName, 'r', encoding='utf-8').read()

    jsonData = json.loads(rfile)
    message = ''

    # 정규식 처리를 한 이유는 ‘description’ 부분에 ‘\t’이나 ‘\n’등의 문자를 제거하기 위해서 문자나 숫자가 아닌 경우에는 공란(‘ ‘)으로 바꾼후 넣어 문자열을 작성
    for item in jsonData:
        if 'description' in item.keys():
            message = message + re.sub(r'[^\w]', ' ', item['description']) + ' '

    # konlpy.tag의 Twitter() 품사 클래스를 이용
    nlp = Twitter()
    nouns = nlp.nouns(message)
    count = Counter(nouns)

    # most_common(50) 함수를 이용하여 상위 50개의 리스트 획득
    # 실제 명사가 한 글자인 경우는 제외, 품사클래스에 따라 의미없는 것이 많으므로 제외
    wordInfo = dict()
    for tags, counts in count.most_common(50):
        if (len(str(tags)) > 1):
            wordInfo[tags] = counts
            print("%s : %d" % (tags, counts))

    showGraph(wordInfo)
    saveWordCloud(wordInfo, cloudImagePath)

if __name__ == "__main__":
    main()