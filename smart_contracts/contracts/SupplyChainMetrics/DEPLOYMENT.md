# SupplyChainMetrics Contract Deployment Guide

This guide explains how to deploy the SupplyChainMetrics smart contract to various networks.

## Prerequisites

1. Node.js and npm installed
2. An Ethereum wallet with private key (MetaMask recommended)
3. Some test ETH on the network you're deploying to (Sepolia faucet: https://sepoliafaucet.com/)
4. Alchemy API key (sign up at https://dashboard.alchemy.com/)
5. Etherscan API key (sign up at https://etherscan.io/apis)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   - Copy the `.env.example` file to `.env`
   - Fill in your private key and API keys:
     ```
     PRIVATE_KEY=your_private_key_without_0x_prefix
     INFURA_API_KEY=your_infura_api_key
     ETHERSCAN_API_KEY=your_etherscan_api_key
     ```

## Deployment

### Local Development Network

To deploy to a local Hardhat network:

```bash
npx hardhat node
# In a separate terminal:
npx hardhat run scripts/deploy.ts --network localhost
```

### Test Networks

To deploy and verify on Sepolia test network:

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

The deployment script will:
1. Connect to the specified network
2. Deploy the SupplyChainMetrics contract
3. Save deployment information to `deployments/{network}.json`
4. Verify the contract on Etherscan
5. Print out the deployed contract's address and verification status
6. Output the transaction hash
7. If verification fails, it'll print an error message



## Interacting with the Deployed Contract

### Using Hardhat Console

```bash
npx hardhat console --network sepolia
```

Then in the console:

```javascript
// Load the deployment info
const fs = require('fs');
const deploymentInfo = JSON.parse(fs.readFileSync('./deployments/sepolia.json', 'utf8'));

// Connect to the contract
const SupplyChainMetrics = await ethers.getContractFactory("SupplyChainMetrics");
const contract = await SupplyChainMetrics.attach(deploymentInfo.contractAddress);

// Call contract functions
await contract.updateInventoryValue(1000);
const metrics = await contract.getAllMetrics();
console.log("Current metrics:", metrics);
```

### Using Etherscan

Once verified, you can interact with your contract directly on Etherscan:
1. Go to https://sepolia.etherscan.io/
2. Search for your contract address
3. Go to the "Contract" tab
4. Click on "Write Contract" to update metrics
5. Click on "Read Contract" to view metrics

## Troubleshooting

### Insufficient Funds
Make sure your wallet has enough ETH to cover the deployment gas costs.

### Failed Verification
- Ensure your Etherscan API key is correct
- Make sure the contract was compiled with the same settings as deployment
- Wait a few minutes after deployment before verifying

### Network Connection Issues
- Check your Alchemy API key
- Ensure you're connected to the internet
- Try using a different RPC provider in hardhat.config.ts