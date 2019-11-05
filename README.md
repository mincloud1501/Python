# The Python Study Project
[![Gitter chat](https://img.shields.io/badge/Chat-Gitter-ff69b4.svg?label=Chat&logo=gitter&style=flat-square)](https://gitter.im/Python_Project/community)&nbsp;
![](https://img.shields.io/github/repo-size/mincloud1501/Python.svg?label=Repo%20size&style=flat-square)&nbsp;

### All Codes implemented in Python (with Jupyter Notebook)

These implementations are for learning purposes. They may be less efficient than the implementations in the Python standard library.
Use Jupyter Notebook & PyCharm Community Edition.

#### ■ Python Data Analytic Library

- [![Sources](https://img.shields.io/badge/출처-NumPy-yellow)](http://matplotlib.org) : 벡터 및 행렬 계산에 편의를 제공하는 라이브러리로 pandas,matplotlib의 기본 base library
- `pandas` : 고유하게 정의된 자료 구조를 활용해서 빅데이터를 분석 가능, 기존 Excel로 가능했던 모든 분석을 scale과 속도 개선
- [![Sources](https://img.shields.io/badge/출처-matplotlib-yellow)](http://matplotlib.org) : numpy와 pasndas를 통해 얻은 데이터 분석결과를 시각화 해주는 라이브러리

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

## Category

See the [Category](DIRECTORY.md).