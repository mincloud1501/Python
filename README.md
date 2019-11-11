# The Python Study Project
[![Gitter chat](https://img.shields.io/badge/Chat-Gitter-ff69b4.svg?label=Chat&logo=gitter&style=flat-square)](https://gitter.im/Python_Project/community)&nbsp;
![](https://img.shields.io/github/repo-size/mincloud1501/Python.svg?label=Repo%20size&style=flat-square)&nbsp;

### All Codes implemented in Python (with Jupyter Notebook)

These implementations are for learning purposes. They may be less efficient than the implementations in the Python standard library.
Use Jupyter Notebook & PyCharm Community Edition.

#### ■ Python Data Analytic Library

- [![Sources](https://img.shields.io/badge/출처-NumPy-yellow)](https://numpy.org) : 벡터 및 행렬 계산에 편의를 제공하는 라이브러리로 pandas,matplotlib의 기본 base library
- [![Sources](https://img.shields.io/badge/출처-pandas-yellow)](https://pandas.pydata.org/) : 고유하게 정의된 자료 구조를 활용해서 빅데이터 분석 가능
- [![Sources](https://img.shields.io/badge/출처-matplotlib-yellow)](http://matplotlib.org) : numpy와 pasndas를 통해 얻은 데이터 분석결과를 시각화 해주는 라이브러리
- [![Sources](https://img.shields.io/badge/출처-seaborn-yellow)](https://seaborn.pydata.org/index.html) : matplotlib을 기반으로 하는 Python데이터 시각화 라이브러리로 매력적이고 정보를 제공하는 통계 그래픽을 그리기 위한 높은 수준의 인터페이스를 제공

## Time Series Analytics with Pandas (On Windows)

### ■ Prerequisites for running with `Anaconda3` install

- `python` version 3
- `pandas` version or later
- `numpy` version 1.15.4 or later
- `matplotlib` version 3.0.2 or later
- `seaborn` version 0.9.0 or later
- `pandas` version 0.23.4 or later
- `scikit-learn` 0.20.2 or later
- `jupyter` version 1.0.0 or later
- `statsmodels` version 0.9.0 or later

- `konlpy` version 0.5.1 or later
- `JPype1` version 0.7.0 or later
- `pytagcloud` version 0.3.5 or later
- `simplejson` version 3.16.0 or later

```
conda create --name mincloud python=3
conda install pandas jupyter seaborn scikit-learn statsmodels
conda info --envs
```
```js
Collecting package metadata: done
Solving environment: done

## Package Plan ##

  environment location: C:\Users\mincloud\Anaconda3

  added / updated specs:
    - jupyter
    - pandas
    - scikit-learn
    - seaborn
    - statsmodels

The following packages will be downloaded:

    		package            |   		build
    ---------------------------|--------------------------------
    ca-certificates-2018.03.07 |                0         155 KB
    certifi-2018.4.16          |           py36_0         143 KB
    conda-4.6.14               |           py36_0         2.1 MB
    openssl-1.0.2o             |       h8ea7d77_0         5.4 MB
    ------------------------------------------------------------
                                           Total:         7.8 MB

The following packages will be SUPERSEDED by a higher-priority channel:

  ca-certificates                                anaconda --> pkgs/main
  certifi                                        anaconda --> pkgs/main
  conda                                          anaconda --> pkgs/main
  openssl                                        anaconda --> pkgs/main
```

### ■ Setup & Run

```
> git clone https://github.com/mincloud1501/Python.git
```
- Install the environment for this hands-on by running:
```
> cd Python/
> conda activate mincloud
> python -m ipykernel install --name mincloud --user
> jupyter notebook --port=8888
```

## USEFUL SHORTCUTS (Jupyter Notebook)
```js
run_and_pass = 'Shift + Enter'
run_and_add_cell = 'Alt + Enter'
run_and_stay = 'Ctrl + Enter'

recommendations = 'Tab'
docstrings = 'Shift + Tab'

add_hashtag = 'Ctrl + /'
add_cell = 'b'
delete_cell = 'dd'
```

### ■ Prerequisites for collecting `Facebook` data [![Sources](https://img.shields.io/badge/참고-Facebook-yellow)](https://developers.facebook.com/docs/graph-api)

- 페이스북 (http://www.facebook.com) 가입
- 페이스북 개발자 페이지(http://developer.facebook.com) 계정 생성
- Facebook API 사용등록 및 신규 app 생성
- 대시보드에서 `App ID`와 `Secret Code` 확인

### ■ Prerequisites for collecting `Naver` data [![Sources](https://img.shields.io/badge/참고-Naver-yellow)](https://developers.naver.com/docs/search/news/)

- 네이버 개발자 페이지(https://developers.naver.com) 에서 오픈API 이용 신청에서 검색 API 추가
- 웹 서비스 URL (http://localhost) 등록
- `Client ID`와 `Client Secret` 확인

### ■ `D3.js` Reference for Data Visualizations

- [![Sources](https://img.shields.io/badge/참고-d3js-yellow)](https://d3js.org/)
- [![Sources](https://img.shields.io/badge/참고-Mike_Bostock’s_Blocks-yellow)](https://bl.ocks.org/mbostock)
- [![Sources](https://img.shields.io/badge/참고-Mike_Bostock-yellow)](https://bost.ocks.org/mike/)

## Category

See the [Category](DIRECTORY.md).