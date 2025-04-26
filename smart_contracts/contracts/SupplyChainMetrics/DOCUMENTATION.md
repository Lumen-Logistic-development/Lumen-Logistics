# SupplyChainMetrics Smart Contract Documentation

## Overview



**Contract Address:** 0x0bAc8cBC267bA21175e3aD8ADe84d4BDD9b293D7

**verification link**:
 https://etherscan.io/address/0x0bAc8cBC267bA21175e3aD8ADe84d4BDD9b293D7#code

 
The SupplyChainMetrics smart contract is a blockchain-based solution designed to track and store key performance indicators (KPIs) for supply chain operations. It provides a transparent and immutable record of critical metrics that can be used to evaluate supply chain performance, efficiency, and reliability.

## Contract Features

- **Secure Metric Storage**: Stores critical supply chain KPIs on the blockchain
- **Historical Data Tracking**: Maintains historical records of metrics (up to 30 data points per metric)
- **Access Control**: Only the contract owner can update metrics
- **Event Logging**: Emits events for all metric updates for off-chain tracking
- **Ownership Transfer**: Allows transfer of contract ownership

## Key Metrics Tracked

The contract tracks four primary supply chain metrics:

1. **Total Inventory Value**: The current monetary value of inventory in the supply chain
2. **Production Efficiency**: A measure of production efficiency (stored as a value between 0-1000, representing 0-100.0%)
3. **On-Time Delivery Rate**: The percentage of deliveries made on time (stored as a value between 0-1000, representing 0-100.0%)
4. **Blockchain Transactions**: A counter for blockchain-based supply chain transactions

## Technical Implementation

### Data Structures

- **MetricDataPoint**: A struct that stores a timestamp and value for each metric data point
- **Circular Buffers**: Each metric maintains a circular buffer of 30 historical data points

### Functions

#### Metric Update Functions

| Function | Description | Parameters | Access |
|----------|-------------|------------|--------|
| `updateInventoryValue` | Updates the total inventory value | `newValue`: The new inventory value | Owner only |
| `updateProductionEfficiency` | Updates the production efficiency percentage | `newValue`: The new efficiency value (0-1000) | Owner only |
| `updateOnTimeDelivery` | Updates the on-time delivery percentage | `newValue`: The new delivery rate (0-1000) | Owner only |
| `incrementTransactionCount` | Increments the blockchain transaction counter by 1 | None | Owner only |
| `addMultipleTransactions` | Adds multiple transactions to the counter | `count`: Number of transactions to add | Owner only |

#### Data Retrieval Functions

| Function | Description | Parameters | Returns |
|----------|-------------|------------|---------|
| `getAllMetrics` | Gets all current metric values | None | Returns all four metrics as a tuple |
| `getInventoryValueHistory` | Gets historical inventory values | `count`: Number of data points to retrieve (max 30) | Returns arrays of timestamps and values |
| `getProductionEfficiencyHistory` | Gets historical efficiency values | `count`: Number of data points to retrieve (max 30) | Returns arrays of timestamps and values |
| `getOnTimeDeliveryHistory` | Gets historical delivery rate values | `count`: Number of data points to retrieve (max 30) | Returns arrays of timestamps and values |
| `getBlockchainTransactionsHistory` | Gets historical transaction counts | `count`: Number of data points to retrieve (max 30) | Returns arrays of timestamps and values |

#### Administrative Functions

| Function | Description | Parameters | Access |
|----------|-------------|------------|--------|
| `transferOwnership` | Transfers contract ownership | `newOwner`: Address of the new owner | Owner only |

### Events

The contract emits the following events:

| Event | Description | Parameters |
|-------|-------------|------------|
| `InventoryValueUpdated` | Emitted when inventory value is updated | `oldValue`, `newValue`, `timestamp` |
| `ProductionEfficiencyUpdated` | Emitted when production efficiency is updated | `oldValue`, `newValue`, `timestamp` |
| `OnTimeDeliveryUpdated` | Emitted when on-time delivery rate is updated | `oldValue`, `newValue`, `timestamp` |
| `BlockchainTransactionsIncremented` | Emitted when transaction count is updated | `oldValue`, `newValue`, `timestamp` |

## Deployment

The contract can be deployed to any EVM-compatible blockchain network using the provided deployment script. The deployment process includes:

1. Contract deployment
2. Saving deployment information to a local file
3. Automatic contract verification on Etherscan (for public networks)

### Deployment Command

```bash
npx hardhat run scripts/deploy.ts --network <network-name>
```

Where `<network-name>` is the name of the network to deploy to (e.g., `sepolia`, `mainnet`).

## Usage Guide

### Prerequisites

- An Ethereum wallet with ETH for gas fees
- The contract address after deployment
- Owner access to the contract (for update functions)

### Interacting with the Contract

#### For Contract Owners

1. **Update Inventory Value**:
   ```solidity
   // Example: Update inventory value to 1,000,000
   await supplyChainMetrics.updateInventoryValue(1000000);
   ```

2. **Update Production Efficiency**:
   ```solidity
   // Example: Update production efficiency to 85.5%
   await supplyChainMetrics.updateProductionEfficiency(855);
   ```

3. **Update On-Time Delivery Rate**:
   ```solidity
   // Example: Update on-time delivery rate to 92.3%
   await supplyChainMetrics.updateOnTimeDelivery(923);
   ```

4. **Record Blockchain Transactions**:
   ```solidity
   // Increment transaction count by 1
   await supplyChainMetrics.incrementTransactionCount();
   
   // Add multiple transactions (e.g., 5)
   await supplyChainMetrics.addMultipleTransactions(5);
   ```

5. **Transfer Ownership**:
   ```solidity
   // Transfer ownership to a new address
   await supplyChainMetrics.transferOwnership("0xNewOwnerAddress");
   ```

#### For Data Consumers

1. **Get All Current Metrics**:
   ```solidity
   const [inventoryValue, efficiency, deliveryRate, transactions] = await supplyChainMetrics.getAllMetrics();
   ```

2. **Get Historical Data**:
   ```solidity
   // Get the last 10 inventory value data points
   const [timestamps, values] = await supplyChainMetrics.getInventoryValueHistory(10);
   
   // Process and display the data
   for (let i = 0; i < timestamps.length; i++) {
     console.log(`Time: ${new Date(timestamps[i] * 1000)}, Value: ${values[i]}`);
   }
   ```

## Important Notes

1. **Percentage Values**: Production efficiency and on-time delivery are stored as integers between 0-1000, representing 0-100.0% with one decimal place precision. For example, 876 represents 87.6%.

2. **Historical Data**: The contract stores only the last 30 data points for each metric in a circular buffer. When retrieving historical data, the most recent data points are returned first.

3. **Access Control**: Only the contract owner can update metrics. Attempting to update metrics from a non-owner account will result in a transaction revert.

4. **Gas Considerations**: Updating metrics consumes gas. Consider the gas costs when designing update frequency.

## Security Considerations

1. **Owner Privileges**: The contract owner has full control over all metrics. Ensure the owner address is secure.

2. **No Data Validation**: The contract does not validate the correctness of input data beyond basic range checks. It's the responsibility of the owner to provide accurate data.

3. **Ownership Transfer**: Be extremely careful when transferring ownership. If ownership is transferred to an invalid address, the contract metrics can no longer be updated.

## Testing

The SupplyChainMetrics contract includes a comprehensive test suite to ensure all functionality works as expected. The tests are written using the Hardhat testing framework with Chai assertions.

### Test Structure

The test suite is organized into several categories:

1. **Initial State Tests**: Verify that the contract initializes with the correct default values
2. **Metric Update Tests**: Test the functionality of each metric update function
3. **Data Retrieval Tests**: Ensure historical data is stored and retrieved correctly
4. **Edge Case Tests**: Validate behavior with boundary values (0, maximum values)
5. **Error Handling Tests**: Confirm that invalid inputs are properly rejected
6. **Integration Tests**: Test complete supply chain cycles with multiple operations

### Test Files

- **SupplyChainMetricsHardhat.test.js**: Main test file using Hardhat's testing framework

### Running Tests

To run the test suite:

```bash
# Run all tests
npx hardhat test

# Run a specific test file
npx hardhat test test/SupplyChainMetricsHardhat.test.js
```

### Test Coverage

The tests cover:

- **Inventory Value Management**: Updates, validation, and history tracking
- **Production Efficiency**: Updates within valid range (0-1000), validation, and history
- **On-Time Delivery**: Updates within valid range (0-1000), validation, and history
- **Transaction Counting**: Single and batch increments, validation, and history
- **Access Control**: Owner-only function restrictions
- **History Tracking**: Proper storage and retrieval of historical data points
- **Error Handling**: Appropriate error messages for invalid operations

### Mock Testing

The test suite uses mock implementations to simulate the contract's behavior, allowing for thorough testing without deploying to a blockchain. This approach enables:

- Fast test execution
- Testing of edge cases
- Validation of business logic
- Verification of data structures

## License

This contract is licensed under the MIT License.