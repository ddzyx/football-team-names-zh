# `football-team-names-zh` 双生态发布操作指南

本项目同时支持 **Python (PyPI)** 和 **JavaScript (NPM)** 双平台发布，发布一次可同时激活两大技术社区的全球镜像反向链接！

---

## 渠道一：发布到 PyPI (Python)

### 1. 打包
在当前目录执行：
```bash
cd /www/git/qiuxiaozhiwp/analysis-bot-v2/open_source_matrix/football-team-names-zh

# 执行构建
python -m build
```

### 2. 上传
```bash
python -m twine upload dist/*
```
- **Username**: `__token__`
- **Password**: 粘贴你的 PyPI API Token。

发布后可在 `https://pypi.org/project/football-team-names-zh/` 查看。

---

## 渠道二：发布到 NPM 官方生态 (npmjs.com)

NPM 会将包同步至 `npmtrends.com`、`bundlephobia.com`、`skypack.dev`、`jsdelivr.com` 等十几个站点，每个站点均保留 `package.json` 中的 `homepage` 网址。

### 1. 注册与登录 NPM
1. 访问 NPM 官网：`https://www.npmjs.com/signup` 注册账号；
2. 在终端执行登录：
   ```bash
   npm login
   ```
   （按提示在浏览器或终端完成邮箱验证码确认）

### 2. 一键发布
在当前目录直接执行：
```bash
cd /www/git/qiuxiaozhiwp/analysis-bot-v2/open_source_matrix/football-team-names-zh

npm publish --access public
```

发布后可在 `https://www.npmjs.com/package/football-team-names-zh` 查看。

---

## 渠道三：发布到 GitHub 开源仓库

1. 在 GitHub 创建新仓库：
   - **Repository name**: `football-team-names-zh`
   - **Description**: `全球主流足球俱乐部与赛事中文别名与标准化匹配库 (Python & Node.js 双端支持)`
   - **Public**: 是
2. 本地推送：
   ```bash
   cd /www/git/qiuxiaozhiwp/analysis-bot-v2/open_source_matrix/football-team-names-zh
   git init
   git add .
   git commit -m "feat: initial release of football-team-names-zh v0.1.0"
   git branch -M main
   git remote add origin https://github.com/<你的GitHub用户名>/football-team-names-zh.git
   git push -u origin main
   ```
3. 在 GitHub 仓库首页右上角设置：
   - **Website**: `https://www.qiuxiaoce.com/`
   - **Topics**: `football`, `soccer`, `team-names`, `chinese-aliases`, `sports-data`, `qiuxiaoce`
