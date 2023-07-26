import { Web3, Web3BaseWallet, Web3BaseWalletAccount } from "web3";

export class wallet {
 private network: Web3;
 private accounts: Web3BaseWallet<Web3BaseWalletAccount>;
  constructor(network: Web3) {
    this.network = network;
    this.accounts = network.eth.accounts.wallet.create(0);
  }

  checkAccountExits(address: string) {
    return this.accounts.findIndex((acc) => acc.address === address);
  }

  getAccountList() {
    return this.accounts;
  }

  async getBalance(address: string) {
    const balance = await this.network.eth.getBalance(address);
    return this.network.utils.fromWei(balance, "ether");
  }

  addAccount(privateKey: string) {
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
