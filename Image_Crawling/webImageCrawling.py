#프로그 앨범 커버 다운로드
from urllib.request import urlopen
from bs4 import BeautifulSoup
import urllib.request
import re
from urllib.error import HTTPError
from urllib.error import URLError

URL="http://www.progarchives.com/top-prog-albums.asp?ssubgenres=&salbumtypes=1&syears=&scountries=&sminratings=0&smaxratings=0&sminavgratings=0&smaxresults=250&x=0&y=0#list"
#URL="http://www.progarchives.com/top-prog-albums.asp?ssubgenres=&salbumtypes=1&syears=2017&scountries=&sminratings=0&smaxratings=0&sminavgratings=0&smaxresults=250&x=68&y=9#list"
#URL="http://www.progarchives.com/top-prog-albums.asp?ssubgenres=&salbumtypes=1&syears=2016&scountries=&sminratings=0&smaxratings=0&sminavgratings=0&smaxresults=250&x=61&y=9#list"

# 크롤링 금지 페이지 처리
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0'}
req = urllib.request.Request(url=URL, headers=headers)


def imgDownload(img_url, imageName, count):
    imgName = img_url.split('/')[-1]
    imageReq = urllib.request.Request(url=img_url, headers=headers)
    imageRes = urllib.request.urlopen(imageReq) # store the response
    order = str(count+1).zfill(3)
    with open('images/2017/'+order+'.'+imageName+'.jpg', 'wb') as fd:
        fd.write(imageRes.read())

html = urlopen(req)
bs = BeautifulSoup(html, "html.parser")

#########################################################
# 파일명 조합
#########################################################
artist = []
album= []

for td in bs.findAll('a'):

    if 'href' in td.attrs:
        if td.attrs['href'][:10] == 'artist.asp':
            if td.get_text()[:2] == 'VA': pass
            else:
                artist.append(td.get_text())

        if td.attrs['href'][:9] == 'album.asp':
            if td.get_text()[:4] == 'Shop': pass
            else:
                album.append(td.get_text())

#print(artist[1],'-',album[1])
#########################################################

count = 0
images = bs.findAll('img')

for image in images:
        #imgDownload(image['src'])
    if image['src'][-3:].lower() == 'jpg' and image['src'][:4].lower() == 'http':
        img_url = image['src']

        newArtistName = "".join(c for c in artist[count] if c not in ':[]%/&!?')
        newAlbumName = "".join(c for c in album[count] if c not in ':[]%/&!?')
        imageName = str(newArtistName+'-'+newAlbumName)
        #print(imageName)
        imgDownload(img_url, imageName, count)
        count = count + 1
    else: pass

'''
except HTTPError as e:
    print("The Server returned as HTTP error")
except URLError as e:
    print("Ther Server could not be found")
else: imgDownload(image['src'])
'''