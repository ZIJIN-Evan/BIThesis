# 第二节 LaTeX的下载和安装

* 官方的安装指南\- [Installing TeX Live over the Internet](https://www.tug.org/texlive/acquire-netinstall.html)。
* 我校镜像网站 [/CTAN/systems/texlive/Images](https://mirrors.bit.edu.cn/CTAN/systems/texlive/Images/)，
* 以 Ubuntu 为例子，安装 TeX Live 发行版。

```
sudo apt install texlive
```

* macOS 系统下载使用 [MacTeX 发行版](https://www.tug.org/mactex/)
*  [MaxTeX 的下载页面](https://www.tug.org/mactex/mactex-download.html)

* 使用 Homebrew 包管理的同学，通过 Homebrew Cask 直接安装 MacTeX：

```
# 加载 Homebrew Cask
brew tap caskroom/cask

# 利用 Cask 安装 MacTeX
brew cask install mactex
```

* 验证 `xelatex` LaTeX 编译器的安装情况：

```powershell
xelatex --version
```

* 验证 `biber` 参考文献编译器的安装情况：

```powershell
biber --version
```

* VS Code 编辑器：[Visual Studio Code - Code editing. Redefined.](https://code.visualstudio.com/)