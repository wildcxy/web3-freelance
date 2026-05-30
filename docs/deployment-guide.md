# GitHub Pages 部署说明

本项目已经包含 GitHub Actions 部署配置：`.github/workflows/pages.yml`。

## 设置步骤

1. 打开 GitHub 仓库：`https://github.com/wildcxy/web3-freelance`
2. 进入 `Settings`。
3. 进入 `Pages`。
4. 在 `Build and deployment` 中选择 `GitHub Actions`。
5. 回到 `Actions` 页面，等待 `Deploy static site to GitHub Pages` 工作流完成。
6. 部署完成后访问：`https://wildcxy.github.io/web3-freelance/`

## 更新页面

后续只要把代码推送到 `main` 分支，GitHub Actions 会自动重新部署。

## 常见问题

### 页面 404

确认 Pages 的部署方式是 `GitHub Actions`，并检查 Actions 是否成功运行。

### 图片不显示

确认 `assets/credential-nft.png` 已经提交到仓库，并且页面使用相对路径 `assets/credential-nft.png`。

### 样式不生效

确认 `styles.css` 已经提交到仓库，并且 `index.html` 中的路径是 `styles.css`。

### 在线链接还打不开

GitHub Pages 首次部署可能需要等待一小段时间。先检查 Actions 状态，再刷新页面。
