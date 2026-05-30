const connectButton = document.querySelector("#connectButton");
const mintButton = document.querySelector("#mintButton");
const walletAddress = document.querySelector("#walletAddress");
const networkStatus = document.querySelector("#networkStatus");
const mintedCount = document.querySelector("#mintedCount");
const txHash = document.querySelector("#txHash");
const pitchForm = document.querySelector("#pitchForm");
const nameInput = document.querySelector("#nameInput");
const linkInput = document.querySelector("#linkInput");
const roleInput = document.querySelector("#roleInput");
const pitchOutput = document.querySelector("#pitchOutput");

let connected = false;
let minted = false;

function randomHex(length) {
  const chars = "0123456789abcdef";
  let value = "";
  for (let index = 0; index < length; index += 1) {
    value += chars[Math.floor(Math.random() * chars.length)];
  }
  return value;
}

function shorten(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

connectButton.addEventListener("click", () => {
  connected = true;
  const address = `0x${randomHex(40)}`;

  walletAddress.textContent = shorten(address);
  networkStatus.textContent = "已连接";
  networkStatus.classList.add("is-live");
  connectButton.querySelector("span").textContent = "更换演示钱包";
  mintButton.disabled = false;
  txHash.textContent = "钱包已连接，等待 mint";
});

mintButton.addEventListener("click", () => {
  if (!connected || minted) return;

  minted = true;
  const nextCount = Number.parseInt(mintedCount.textContent, 10) + 1;
  mintedCount.textContent = String(nextCount);
  txHash.textContent = `0x${randomHex(64)}`;
  mintButton.disabled = true;
  mintButton.querySelector("span").textContent = "已 Mint";
});

pitchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim() || "你的名字";
  const link = linkInput.value.trim() || "https://your-demo-link.example";
  const role = roleInput.value;

  pitchOutput.value = `Hi，我是 ${name}。我正在接 Web3 兼职，方向是 ${role}。\n\n我做了一个 Web3 样品站，里面包含 NFT Mint 页面、合约样例、PRD、架构文档和投递材料：${link}\n\n我会使用 AI 辅助提升交付效率，但会自己负责需求拆解、本地运行、检查、文档整理和最终交付。可以先从一个小任务开始，例如中文教程、项目分析、钱包连接页面、NFT mint demo 或社区内容整理。`;
});
