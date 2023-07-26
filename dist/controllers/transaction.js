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
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = void 0;
class transaction {
    constructor(params) {
        // Tạo giao dịch
        this.excute = () => __awaiter(this, void 0, void 0, function* () {
            try {
                // Lấy thông tin nonce của ví nguồn (cần để xác thực giao dịch)
                const nonce = yield this.network.eth.getTransactionCount(this.sourceAddress);
                console.log(this.amountToSend, "this.amountToSend =====");
                const currentGasPrice = yield this.network.eth.getGasPrice();
                // Tạo object giao dịch
                const txObject = {
                    from: this.sourceAddress,
                    nonce: this.network.utils.toHex(nonce),
                    to: this.destinationAddress,
                    value: this.amountToSend,
                    gasLimit: this.network.utils.toHex(21000),
                    gasPrice: currentGasPrice,
                };
                // Ký giao dịch với private key của ví nguồn
                const signedTx = yield this.network.eth.accounts.signTransaction(txObject, this.sourcePrivateKey);
                // Gửi giao dịch đi
                const receipt = yield this.network.eth.sendSignedTransaction(signedTx.rawTransaction);
                console.log("Giao dịch đã được tạo:", receipt);
            }
            catch (error) {
                console.error("Có lỗi xảy ra:", error);
            }
        });
        const { amountToSend, destinationAddress, network, sourceAddress, sourcePrivateKey, } = params;
        this.sourceAddress = sourceAddress;
        this.sourcePrivateKey = sourcePrivateKey;
        this.destinationAddress = destinationAddress;
        this.amountToSend = network.utils.toWei('0.1', "ether");
        this.network = network;
    }
}
exports.transaction = transaction;
//# sourceMappingURL=transaction.js.map