#메탈킹덤 내부링크 연동을 통한 이미지 다운로드

from urllib.request import urlopen
from bs4 import BeautifulSoup
import urllib.request

mainURL="https://www.metalkingdom.net"
URL="https://www.metalkingdom.net/top-albums/?start=1"

### 크롤링 금지 페이지 처리 ########################################################################
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0'}
req = urllib.request.Request(url=URL, headers=headers)
####################################################################################################

count = 0

html = urlopen(req)
bs = BeautifulSoup(html, "html.parser")

def imgDownload(img_url, img_num):
    imgName = img_url.split('/')[-1]
    imgName = imgName[imgName.find(imgName.split('-')[1]):]
    imageReq = urllib.request.Request(url=img_url, headers=headers)
    imageRes = urllib.request.urlopen(imageReq) # store the response

    newimgName = "".join(c for c in imgName if c not in ':[]%?')
    #print(newimgName)

    with open('images/'+order[img_num]+'_'+newimgName, 'wb') as fd:
        fd.write(imageRes.read())

def innerLinkConnection(new_url):
    innerReq = urllib.request.Request(url=new_url, headers=headers)
    bs2 = BeautifulSoup(urlopen(innerReq), "html.parser")

    global count

    #print(newURL)
    for td2 in bs2.findAll('div', {'id': 'album-info-left-1'}):
        try:
            imgURL = mainURL + td2.find('a').attrs['href']
            imgDownload(imgURL, count)
            count = count + 1
        except:
            imgURL = mainURL + td2.find('img').attrs['src']
            imgDownload(imgURL, count)
            count = count + 1

order = []

for td in bs.findAll('td',{'class':'c1'}):
    order.append(td.get_text().zfill(3))

for td in bs.findAll('td',{'class':'c2'}):
    #print(td.find('a').attrs['href'])
    newURL = mainURL + td.find('a').attrs['href']
    innerLinkConnection(newURL)
    #print(newURL)
    #imgDownload(newURL)