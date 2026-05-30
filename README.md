# Web3 接单样品站

这是一个面向 Web3 兼职投递的静态样品项目。它展示了一个 NFT Mint 客户演示台，并配套合约样例、项目分析文档和投递话术。

## 适合投递的任务

- Web3 中文内容、教程、项目分析
- Discord / Telegram 社区运营
- 钱包连接页面和简单 dApp 前端
- NFT mint 页面和测试网原型
- AI 辅助 Web3 产品 Demo

## 文件结构

- `index.html`：可直接打开的演示页面
- `styles.css`：响应式界面样式
- `app.js`：演示钱包、mint 状态和投递话术生成
- `assets/credential-nft.png`：NFT 凭证视觉资产
- `contracts/ProofCredential.sol`：ERC-721 合约样例
- `docs/PRD.md`：产品需求文档
- `docs/requirements-architecture.md`：需求架构文档
- `docs/project-analysis.md`：项目分析样例
- `docs/outreach-template.md`：兼职投递话术模板

## 如何使用

直接在浏览器打开 `index.html`。

这个版本是静态演示，适合先拿去投递兼职、展示交付能力。后续可以升级为真实链上版本：使用 `wagmi` / `viem` 连接钱包，用 Foundry 部署 `contracts/ProofCredential.sol` 到测试网。

## 交付定位

我可以用 AI 辅助加速 Web3 交付，但会自己负责需求拆解、本地运行、测试检查、文档整理和交付质量。
