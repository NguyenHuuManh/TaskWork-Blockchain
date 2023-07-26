"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkConnector = void 0;
const web3_1 = require("web3");
class networkConnector {
    constructor(provider) {
        this.network = new web3_1.Web3(provider);
    }
}
exports.networkConnector = networkConnector;
//# sourceMappingURL=networkConnector.js.map