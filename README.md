# Web3 接单样品站

这是一个面向 Web3 兼职投递的个人作品项目。它用一个 NFT Mint 客户演示台展示基础 Web3 交付能力，并配套合约样例、产品文档、项目分析和投递话术。

> 当前版本是静态演示 MVP，不连接真实钱包、不发起真实链上交易、不处理用户资产。它适合用于作品集展示、客户沟通和后续测试网版本改造。

## 在线信息

- 在线 Demo：待部署后替换为你的链接
- GitHub 仓库：待上传后替换为你的链接
- 联系方式：`your-email@example.com` / `https://t.me/yourhandle`

## 适合投递的任务

- Web3 中文内容、教程、项目分析
- Discord / Telegram 社区运营支持
- 钱包连接页面和简单 dApp 前端 Demo
- NFT Mint 页面和测试网原型
- 测试网交互教程、FAQ、公告整理
- AI 辅助 Web3 产品 Demo

## 项目亮点

- 可直接打开的响应式作品页面
- 模拟钱包连接、Mint 状态、交易哈希和 Supply 更新
- ERC-721 合约样例，展示基础合约沟通能力
- PRD、架构文档、项目分析和中英文投递模板
- 清晰说明 AI 辅助边界：本人负责需求拆解、运行检查、文档和最终交付

## 文件结构

```text
web3-freelance-main/
  index.html
  styles.css
  app.js
  README.md
  assets/
    credential-nft.png
  contracts/
    ProofCredential.sol
  docs/
    PRD.md
    requirements-architecture.md
    project-analysis.md
    outreach-template.md
    launch-checklist.md
  screenshots/
    demo-hero.png
    demo-fullpage.png
```

## 如何使用

直接在浏览器打开 `index.html`。

如果要拿去投递兼职，建议先完成：

1. 替换页面和 README 里的联系方式。
2. 上传到 GitHub。
3. 部署到 GitHub Pages、Vercel、Netlify 或 Cloudflare Pages。
4. 更新 README 中的在线 Demo 和 GitHub 仓库链接。
5. 重新截图并替换 `screenshots/` 下的图片。

## 后续升级路线

- V1.1：接入真实钱包连接，使用 `wagmi` / `viem` 读取地址和网络。
- V1.2：使用 Foundry 或 Hardhat 部署 `contracts/ProofCredential.sol` 到 Base Sepolia。
- V1.3：增加合约测试、部署脚本、交易 pending/success/failed 状态。
- V1.4：增加中英文切换、服务报价、案例列表和需求收集表单。

## 交付定位

我可以用 AI 辅助加速 Web3 交付，但会自己负责需求拆解、本地运行、测试检查、文档整理和交付质量。
