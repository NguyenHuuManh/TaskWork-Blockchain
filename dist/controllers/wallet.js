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
exports.wallet = void 0;
class wallet {
    constructor(network) {
        this.network = network;
        this.accounts = network.eth.accounts.wallet.create(0);
    }
    checkAccountExits(address) {
        return this.accounts.findIndex((acc) => acc.address === address);
    }
    getAccountList() {
        return this.accounts;
    }
    getBalance(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const balance = yield this.network.eth.getBalance(address);
            return this.network.utils.fromWei(balance, "ether");
        });
    }
    addAccount(privateKey) {
        const account = this.network.eth.accounts.privateKeyToAccount(privateKey);
        if (account) {
            this.accounts.add(account);
        }
    }
    createAccount() {
        const res = this.network.eth.accounts.create();
        this.addAccount(res.privateKey);
    }
}
exports.wallet = wallet;
//# sourceMappingURL=wallet.js.map