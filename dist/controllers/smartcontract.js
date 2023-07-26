"use strict";
// import {Transaction, Web3} from 'web3';
// import abi from '../smartContract/abi.json'
// export const simpleTokenContract=async(web3:Web3)=>{
// // Địa chỉ hợp đồng đã triển khai
// const contractAddress = '0x9bF88fAe8CF8BaB76041c1db6467E7b37b977dD7';
// // ABI của hợp đồng
// const contractABI = [...abi]; // Chèn ABI vào đây
//     // Tạo một phiên bản đối tượng hợp đồng thông minh
// const contract = new web3.eth.Contract(contractABI, contractAddress);
// // Tài khoản ví đã mở khóa để thực hiện giao dịch
// const fromAddress = '0x6178a92229167e74e55cea44e0cb2386a6dd1ab4';
// const privateKey = '0x0e9917846947fcc22399d0918fdd0703fb2932dbe0d68aa4f85143db19a08db5';
// // Gọi hàm transfer của hợp đồng thông minh
// const toAddress = '0x1C2D885aaFBA32C36Dd6610B36686c62BcC13115'; // Địa chỉ ví nhận
// const amount = '100'; // Số lượng token cần gửi
// //@ts-ignore
// const transferMethod = contract.methods.transfer(toAddress, amount);
// // Ký giao dịch
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
// const currentGasPrice = await web3.eth.getGasPrice();
// const transaction:Transaction = {
//   from: fromAddress,
//   to: contractAddress,
//   gas: 200000,
//   data: transferMethod.encodeABI(),
//   gasPrice:currentGasPrice,
// };
// web3.eth.accounts.signTransaction(transaction, privateKey)
//   .then(signedTransaction => {
//     // Gửi giao dịch đã ký
//     return web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
//   })
//   .then(receipt => {
//     console.log('Giao dịch thành công! Mã giao dịch:', receipt.transactionHash);
//   })
//   .catch(error => {
//     console.error('Có lỗi xảy ra khi gửi giao dịch:', error);
//   });
// }
//# sourceMappingURL=smartcontract.js.map