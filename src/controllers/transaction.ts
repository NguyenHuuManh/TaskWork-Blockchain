import { Transaction, Web3 } from "web3";

interface Params {
  sourceAddress: string;
  sourcePrivateKey: string;
  destinationAddress: string;
  amountToSend: string;
  network: Web3;
}

export class transaction {
  private sourceAddress: string;
  private sourcePrivateKey: string;
  private destinationAddress: string;
  private amountToSend: string;
  private network: Web3;

  constructor(params: Params) {
    const {
      amountToSend,
      destinationAddress,
      network,
      sourceAddress,
      sourcePrivateKey,
    } = params;
    this.sourceAddress = sourceAddress;
    this.sourcePrivateKey = sourcePrivateKey;
    this.destinationAddress = destinationAddress;
    this.amountToSend = network.utils.toWei('0.1', "ether");
    this.network = network;
  }
  // Tạo giao dịch
  excute = async () => {
    try {
      // Lấy thông tin nonce của ví nguồn (cần để xác thực giao dịch)
      const nonce = await this.network.eth.getTransactionCount(
        this.sourceAddress
      );

      console.log(this.amountToSend, "this.amountToSend =====");
      const currentGasPrice = await this.network.eth.getGasPrice();

      // Tạo object giao dịch
      const txObject: Transaction = {
        from: this.sourceAddress,
        nonce: this.network.utils.toHex(nonce),
        to: this.destinationAddress,
        value: this.amountToSend,
        gasLimit: this.network.utils.toHex(21000), // Số gas cho giao dịch chuyển tiền
        gasPrice: currentGasPrice,
      };

      // Ký giao dịch với private key của ví nguồn
      const signedTx = await this.network.eth.accounts.signTransaction(
        txObject,
        this.sourcePrivateKey
      );

      // Gửi giao dịch đi
      const receipt = await this.network.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );
      console.log("Giao dịch đã được tạo:", receipt);
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
    }
  };
}
