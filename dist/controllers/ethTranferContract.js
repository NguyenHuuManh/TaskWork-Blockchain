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
exports.ethTranferContract = void 0;
const abiEthTranfer_json_1 = __importDefault(require("../smartContract/abiEthTranfer.json"));
const ethTranferContract = (web3) => __awaiter(void 0, void 0, void 0, function* () {
    // Địa chỉ hợp đồng đã triển khai
    const contractAddress = "0xe7c46E0687C1aDe9d054ca36031A9A5066ba6805";
    // ABI của hợp đồng
    const contractABI = [...abiEthTranfer_json_1.default]; // Chèn ABI vào đây
    // Tạo một phiên bản đối tượng hợp đồng thông minh
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    // Tài khoản ví đã mở khóa để thực hiện giao dịch
    const fromAddress = "0x6178a92229167e74e55cea44e0cb2386a6dd1ab4";
    const privateKey = "0x0e9917846947fcc22399d0918fdd0703fb2932dbe0d68aa4f85143db19a08db5";
    // Gọi hàm transfer của hợp đồng thông minh
    const toAddress = "0x1C2D885aaFBA32C36Dd6610B36686c62BcC13115"; // Địa chỉ ví nhận
    const amount = web3.utils.toWei("0.01", "ether"); // Số lượng token cần gửi
    const currentGasPrice = yield web3.eth.getGasPrice();
    //@ts-ignore
    const transferToContract = contract.methods.transferToContract();
    const transferToRecipient = contract.methods.transferToRecipient(
    //@ts-ignore
    toAddress, amount);
    // Ký giao dịch
    // const transactionToSmartContract: Transaction = {
    //   from: fromAddress,
    //   to: contractAddress,
    //   value: amount,
    //   data: transferToContract.encodeABI(),
    //   gasPrice: currentGasPrice,
    //   gasLimit: web3.utils.toHex(21064),
    // };
    // web3.eth.accounts
    //   .signTransaction(transactionToSmartContract, privateKey)
    //   .then((signedTransaction) => {
    //     // Gửi giao dịch đã ký
    //     return web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
    //   })
    //   .then((receipt) => {
    //     console.log(
    //       "Giao dịch thành công tới smart contract ! Mã giao dịch:",
    //       receipt.transactionHash
    //     );
    //   })
    //   .catch((error) => {
    //     console.error("Có lỗi xảy ra khi gửi giao dịch:", error);
    //   });
    const transaction = {
        from: contractAddress,
        to: toAddress,
        value: amount,
        data: transferToRecipient.encodeABI(),
        gasPrice: currentGasPrice,
        gasLimit: web3.utils.toHex(21620),
    };
    web3.eth.accounts
        .signTransaction(transaction, privateKey)
        .then((signedTransaction) => {
        // Gửi giao dịch đã ký
        return web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
    })
        .then((receipt) => {
        console.log("Giao dịch thành công! Mã giao dịch:", receipt.transactionHash);
    })
        .catch((error) => {
        console.error("Có lỗi xảy ra khi gửi giao dịch:", error);
    });
});
exports.ethTranferContract = ethTranferContract;
//# sourceMappingURL=ethTranferContract.js.map