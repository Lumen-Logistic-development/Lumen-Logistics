import { ethers, run, network } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  console.log("🚀 Starting deployment of SupplyChainMetrics contract...");

  // Get the network we're deploying to
  const networkName = network.name;
  const chainId = network.config.chainId;
  console.log(`📡 Deploying to network: ${networkName} (chainId: ${chainId})`);

  // Get the deployer account
  const [deployer] = await ethers.getSigners();
  console.log(`🔑 Deploying with account: ${deployer.address}`);

  // Check deployer balance
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log(`💰 Deployer balance: ${ethers.formatEther(balance)} ETH`);

  if (balance.toString() === "0") {
    console.error("❌ Deployer has no funds. Please fund your account first.");
    process.exit(1);
  }

  // Deploy the contract
  console.log("📄 Deploying SupplyChainMetrics contract...");
  const SupplyChainMetrics = await ethers.getContractFactory("SupplyChainMetrics");
  const supplyChainMetrics = await SupplyChainMetrics.deploy();

  // Wait for deployment to complete
  await supplyChainMetrics.waitForDeployment();
  const contractAddress = await supplyChainMetrics.getAddress();

  console.log(`✅ SupplyChainMetrics deployed to: ${contractAddress}`);

  // Save deployment info to a file
  const deploymentInfo = {
    network: networkName,
    chainId: chainId,
    contractAddress: contractAddress,
    deployer: deployer.address,
    deploymentTime: new Date().toISOString(),
  };

  const deploymentsDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir);
  }

  fs.writeFileSync(
    path.join(deploymentsDir, `${networkName}.json`),
    JSON.stringify(deploymentInfo, null, 2)
  );

  console.log(`📝 Deployment info saved to deployments/${networkName}.json`);
  
  // Verify the contract if we're on a public network
  if (networkName !== "hardhat" && networkName !== "localhost") {
    console.log("\n🔍 Verifying contract on Etherscan...");
    
    // Wait for Etherscan to index the contract
    console.log("Waiting for Etherscan to index the contract (10 seconds)...");
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: [],
      });
      console.log("✅ Contract verified successfully on Etherscan!");
    } catch (error: any) {
      if (error.message.includes("Already Verified")) {
        console.log("✅ Contract already verified on Etherscan!");
      } else {
        console.error("❌ Etherscan verification failed:", error);
        console.log("\nYou can try manual verification later with:");
        console.log(`npx hardhat verify --network ${networkName} ${contractAddress}`);
      }
    }
  }
  
  console.log("\n🎉 Deployment process completed successfully!");
  console.log("\n📋 Contract Interaction Guide:");
  console.log(`- Contract Address: ${contractAddress}`);
  console.log(`- Network: ${networkName}`);
  console.log("- Functions Available:");
  console.log("  • updateInventoryValue(uint256 newValue)");
  console.log("  • updateProductionEfficiency(uint256 newValue)");
  console.log("  • updateOnTimeDelivery(uint256 newValue)");
  console.log("  • incrementTransactionCount()");
  console.log("  • addMultipleTransactions(uint256 count)");
  console.log("  • getAllMetrics()");
  console.log("  • getInventoryValueHistory(uint256 count)");
  console.log("  • getProductionEfficiencyHistory(uint256 count)");
  console.log("  • getOnTimeDeliveryHistory(uint256 count)");
  console.log("  • getBlockchainTransactionsHistory(uint256 count)");
}

// Execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });