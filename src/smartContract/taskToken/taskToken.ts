import { ethers } from "ethers";
import { ethSepolia, networkURL } from "../../initNetwork";
import abi from "./abi.json";

const contractAddress = "0x35cF8aA7ADEF8429138A05CB08B35Ea4bF751748";

const provider = new ethers.JsonRpcProvider(networkURL);

export const getTask = async (privateKey: string) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const task = await contract.getTasks();
  return task;
};

export const addTask = async (privateKey: string, taskName: string) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const response = await contract
    //@ts-ignore
    .addTask(taskName);
  return response;
};

export const airDrop = async (privateKey: string) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const response = await contract.airdrop();
  return response;
};

export const completeTask = async (privateKey: string,taskId:number) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const response = await contract.completeTask(taskId);
  return response;
};
