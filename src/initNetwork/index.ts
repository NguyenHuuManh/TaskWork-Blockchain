import Web3 from "web3";

const networkURL =
  "https://eth-sepolia.g.alchemy.com/v2/2pYa0ABZVRxc19oiRC4B_ugmanUqXiGH";

const ethSepolia = new Web3(networkURL);
export { ethSepolia ,networkURL};
