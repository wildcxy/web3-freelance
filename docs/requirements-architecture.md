# Web3 接单样品站需求架构文档

## 1. 系统定位

本项目是一个静态 Web3 作品集产品，用于展示 NFT Mint demo、兼职接单能力和 Web3 文档交付能力。当前版本不连接真实链，不处理用户资产，不保存用户数据。

## 2. 目录结构

```text
web3-freelance-demo/
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
  screenshots/
    demo-hero.png
    demo-fullpage.png
```

## 3. 功能模块

### 3.1 页面展示模块

负责展示项目定位、NFT 视觉资产、Web3 能力标签、交付能力说明和投递区域。

相关文件：

- `index.html`
- `styles.css`
- `assets/credential-nft.png`

### 3.2 Mint 演示模块

负责模拟 Web3 用户流程：

1. 未连接钱包
2. 连接演示钱包
3. 生成模拟钱包地址
4. 启用 Mint 按钮
5. 生成模拟交易哈希
6. 更新 Supply 和状态

相关文件：

- `app.js`
- `index.html`

### 3.3 投递话术生成模块

根据用户输入生成兼职投递私信，用于联系项目方、社区负责人或 bounty 发布者。

输入：

- 称呼
- 作品链接
- 目标任务类型

输出：

- 一段可复制的中文投递话术

相关文件：

- `app.js`
- `docs/outreach-template.md`

### 3.4 合约样例模块

提供 ERC-721 合约样例，展示基础合约理解能力。

合约能力：

- ERC-721 NFT
- 每个地址最多 mint 1 个
- 最大供应量 100
- owner 可更新 base URI

相关文件：

- `contracts/ProofCredential.sol`

### 3.5 文档交付模块

用于证明用户不仅能做页面，还能提供 Web3 项目分析、产品需求和客户沟通材料。

相关文件：

- `README.md`
- `docs/PRD.md`
- `docs/requirements-architecture.md`
- `docs/project-analysis.md`
- `docs/outreach-template.md`

## 4. 数据流

```text
用户点击连接钱包
  -> app.js 生成模拟地址
  -> 更新钱包地址、网络状态、Mint 按钮

用户点击 Mint NFT
  -> app.js 检查是否已连接
  -> 生成模拟交易哈希
  -> 更新 Supply、交易状态、按钮状态

用户填写投递信息
  -> app.js 读取表单字段
  -> 生成投递话术
  -> 输出到页面
```

## 5. 当前技术架构

```text
Browser
  -> index.html
  -> styles.css
  -> app.js
  -> local image asset
  -> static docs
```

特点：

- 无后端
- 无数据库
- 无真实钱包依赖
- 无构建步骤
- 可直接部署到静态托管平台

## 6. 真实链上版本架构

后续如果升级为真实 dApp，建议架构如下：

```text
Next.js Frontend
  -> wagmi / viem
  -> MetaMask / WalletConnect
  -> Base Sepolia RPC
  -> ProofCredential ERC-721 Contract
  -> IPFS / Arweave Metadata
```

### 6.1 前端升级

- 使用 Next.js 或 Vite。
- 使用 wagmi 管理钱包连接。
- 使用 viem 读取合约和发送交易。
- 增加真实网络切换提示。
- 增加交易 pending、success、failed 状态。

### 6.2 合约升级

- 使用 Foundry 管理合约、测试和部署。
- 增加单元测试。
- 增加部署脚本。
- 可选增加白名单签名 mint。
- 可选增加 paid mint 和提现逻辑，但需要额外安全检查。

### 6.3 Metadata 升级

- 使用 IPFS 或 Arweave 存储 NFT metadata。
- 图片资源固定到去中心化存储。
- 前端展示 token URI 和 metadata 状态。

## 7. 安全边界

当前静态版本不涉及真实资金风险。

真实链上版本需要重点检查：

- 是否限制重复 mint
- 是否限制最大供应量
- owner 权限是否过大
- paid mint 是否存在提现风险
- 是否存在重入风险
- metadata 是否可以被恶意修改
- 前端是否提示用户真实交易风险

## 8. 部署方案

### 8.1 静态版本

可部署到：

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

### 8.2 真实链上版本

推荐部署：

- 前端：Vercel
- 合约：Base Sepolia
- 合约验证：Basescan
- Metadata：IPFS / Pinata / Web3.Storage

## 9. 兼职投递使用方式

1. 将项目上传到 GitHub。
2. 部署静态页面。
3. README 中写明“AI 辅助开发，但本人负责验收与交付质量”。
4. 投递 Web3 内容、社区、前端 demo、NFT mint 页面等任务。
5. 根据客户需求，把静态演示升级为真实测试网版本。
