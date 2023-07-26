"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ethSepolia = void 0;
const web3_1 = __importDefault(require("web3"));
const networkURL = "https://eth-sepolia.g.alchemy.com/v2/2pYa0ABZVRxc19oiRC4B_ugmanUqXiGH";
const ethSepolia = new web3_1.default(networkURL);
exports.ethSepolia = ethSepolia;
//# sourceMappingURL=index.js.map