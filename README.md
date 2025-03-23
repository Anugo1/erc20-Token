# LockIn Token - ERC-20 on Sepolia Testnet

## Overview
LockIn Token is an ERC-20 token deployed on the Sepolia testnet. This guide provides instructions on how to interact with the deployed contract.

## Contract Details
- **Contract Address:** [0x9328859A096B9cd49756C05D25705EB309d3Ca7b](https://sepolia.etherscan.io/token/0x9328859A096B9cd49756C05D25705EB309d3Ca7b)
- **Network:** Sepolia Testnet

## Prerequisites
Before interacting with the contract, ensure you have the following:
1. **Node.js** installed (recommended version: >=16.x.x).
2. **Hardhat** installed globally or within your project.
3. **MetaMask** configured for Sepolia testnet with test ETH.
4. **Ethers.js** installed to interact with the contract.

## Setup
Clone the repository and install dependencies:

```sh
# Clone the repository
$ git clone <repository-url>
$ cd <repository-folder>

# Install dependencies
$ npm install
```

## Deploying the Contract (For Reference)
The `deploy.js` script in this project was used to deploy the contract. Here’s how you can deploy it:

```sh
$ npx hardhat run scripts/deploy.js --network sepolia
```

## Interacting with the Contract
You can interact with the contract using **Hardhat console**, **Etherscan**, or **a script**.

### Using Hardhat Console
```sh
$ npx hardhat console --network sepolia
```
Then, interact with the contract:
```js
const contractAddress = "0x9328859A096B9cd49756C05D25705EB309d3Ca7b";
const Token = await ethers.getContractAt("LockIn", contractAddress);

// Check total supply
const totalSupply = await Token.totalSupply();
console.log("Total Supply:", ethers.formatEther(totalSupply));

// Check balance of an address
const balance = await Token.balanceOf("YOUR_WALLET_ADDRESS");
console.log("Balance:", ethers.formatEther(balance));

// Transfer tokens
const tx = await Token.transfer("RECIPIENT_WALLET_ADDRESS", ethers.parseEther("10"));
await tx.wait();
console.log("Transfer successful");
```

### Using Etherscan
- Visit the contract page: [Etherscan Link](https://sepolia.etherscan.io/token/0x9328859A096B9cd49756C05D25705EB309d3Ca7b)
- Use the "Write Contract" and "Read Contract" tabs to interact with it directly.

![LockIn Token](https://github.com/Anugo1/erc20-Token/blob/main/LockIn%20(LTC)%20Token%20Tracker%20_%20Etherscan%20-%20Google%20Chrome%203_23_2025%209_28_31%20PM.png)


## Testing
To run tests for the contract:
```sh
$ npx hardhat test
```
Ensure the testnet environment is configured correctly in `hardhat.config.js` before running tests.

## Faucet for Test ETH
If you need Sepolia test ETH, visit:
- [Alchemy Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)
- [Sepolia Faucet](https://sepoliafaucet.com)

## License
This project is licensed under the MIT License.


