# The Python Study Project
[![Gitter chat](https://img.shields.io/badge/Chat-Gitter-ff69b4.svg?label=Chat&logo=gitter&style=flat-square)](https://gitter.im/Python_Project/community)&nbsp;
![](https://img.shields.io/github/repo-size/mincloud1501/Python.svg?label=Repo%20size&style=flat-square)&nbsp;

### All Codes implemented in Python (for Study)

These implementations are for learning purposes. They may be less efficient than the implementations in the Python standard library.
Use PyCharm Community Edition.

## Time Series Analytics with Pandas (On Windows)

### Prerequisites for running with `Conda` install

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

  environment location: C:\Users\SKbroadband\Anaconda3

  added / updated specs:
    - jupyter
    - pandas
    - scikit-learn
    - seaborn
    - statsmodels

The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    ca-certificates-2018.03.07 |                0         155 KB
    certifi-2018.4.16          |           py36_0         143 KB
    conda-4.6.14               |           py36_0         2.1 MB
    openssl-1.0.2o             |       h8ea7d77_0         5.4 MB
    ------------------------------------------------------------
                                           Total:         7.8 MB

The following packages will be SUPERSEDED by a higher-priority channel:

  ca-certificates                                  anaconda --> pkgs/main
  certifi                                          anaconda --> pkgs/main
  conda                                            anaconda --> pkgs/main
  openssl                                          anaconda --> pkgs/main
```

### Setup & Run

```
git clone https://github.com/mincloud1501/Python.git
```
- After that, install the environment for this hands-on by running:
```
cd Python/
conda activate mincloud
python -m ipykernel install --name mincloud --user
jupyter notebook --port=8888
```

## Community Channel

## Category

See the [Category](DIRECTORY.md).