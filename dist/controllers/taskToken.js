"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = require("web3");
const taskToken_json_1 = __importDefault(require("../smartContract/taskToken.json"));
const contractInfo = {
    abi: taskToken_json_1.default,
    contractAddress: "0x3de128c039bd356371592E7Bd60793f5350Bf0A0", // Paste địa chỉ smart contract từ file JSON
};
const web3 = new web3_1.Web3("https://eth-sepolia.g.alchemy.com/v2/2pYa0ABZVRxc19oiRC4B_ugmanUqXiGH"); // Kết nối với ethereumjs-testrpc
const contract = new web3.eth.Contract(contractInfo.abi, contractInfo.contractAddress);
function addTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const task = prompt("Nhập công việc mới:");
        if (task) {
            yield contract.methods
                //@ts-ignore
                .addTask(task)
                .send({ from: web3.eth.defaultAccount });
        }
    });
}
function completeTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = yield contract.methods.getTasks().call();
        const taskIndex = prompt(
        //@ts-ignore
        `Nhập số thứ tự công việc hoàn thành (0-${tasks.length - 1}):`);
        //@ts-ignore
        if (taskIndex && taskIndex >= 0 && taskIndex < tasks.length) {
            yield contract.methods
                //@ts-ignore
                .completeTask(taskIndex)
                .send({ from: web3.eth.defaultAccount });
        }
    });
}
function getTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = yield contract.methods.getTasks().call();
        //@ts-ignore
        document.getElementById("output"
        //@ts-ignore
        ).innerText = `Danh sách công việc: ${tasks.join(", ")}`;
    });
}
//# sourceMappingURL=taskToken.js.map