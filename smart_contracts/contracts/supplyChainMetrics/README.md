# Supply Chain Metrics Smart Contract

This README documents the deployment of the Supply Chain Metrics smart contract to the Stellar testnet.

## Contract Overview

The Supply Chain Metrics contract is a Soroban smart contract built on the Stellar blockchain that tracks and manages supply chain metrics.

## Contract Functionality Breakdown

### Core Purpose
This smart contract serves as a decentralized system for tracking and managing key supply chain performance metrics. It provides transparency, immutability, and security for critical supply chain data.

### Key Metrics Tracked
The contract tracks four essential supply chain metrics:

1. **Total Inventory Value (TIV)**
   - Represents the total monetary value of inventory in the supply chain
   - Stored as an integer value
   - Updated by authorized administrators

2. **Production Efficiency (PE)**
   - Measures manufacturing or production efficiency
   - Stored as a percentage multiplied by 100 for precision (0-10000 representing 0-100%)
   - Includes validation to ensure values stay within acceptable range

3. **On-Time Delivery Rate (OTD)**
   - Tracks the percentage of deliveries made on schedule
   - Stored as a percentage multiplied by 100 for precision (0-10000 representing 0-100%)
   - Includes validation to ensure values stay within acceptable range

4. **Blockchain Transactions Count (BT)**
   - Counts the number of blockchain transactions related to the supply chain
   - Auto-increments with each relevant transaction
   - Provides a measure of blockchain activity

### Access Control
- **Admin-Only Functions**: All update functions are restricted to the admin account
- **Admin Verification**: Uses the `require_admin` helper function to verify caller identity
- **Initialization Protection**: Prevents re-initialization of the contract

### Data Management
- **Storage**: All metrics are stored in the contract's instance storage
- **Retrieval**: Provides functions to retrieve individual metrics or all metrics at once
- **Data Structure**: Returns metrics in a Map data structure for easy consumption

### Public Functions

1. **initialize(env, admin)**
   - Sets up the contract with default values
   - Designates an admin address with special privileges
   - Can only be called once

2. **update_inventory_value(env, caller, value)**
   - Updates the total inventory value
   - Restricted to admin access

3. **update_production_efficiency(env, caller, efficiency)**
   - Updates the production efficiency percentage
   - Validates input range (0-10000)
   - Restricted to admin access

4. **update_on_time_delivery(env, caller, rate)**
   - Updates the on-time delivery rate
   - Validates input range (0-10000)
   - Restricted to admin access

5. **increment_transactions(env, caller)**
   - Increments the blockchain transactions counter
   - Restricted to admin access

6. **get_all_metrics(env)**
   - Returns all metrics in a single Map
   - Publicly accessible

7. **get_metric(env, metric_key)**
   - Returns a specific metric by key
   - Publicly accessible

## Deployment Process

### Prerequisites

- Soroban CLI installed
- Rust and Cargo installed
- WebAssembly target added: `rustup target add wasm32-unknown-unknown`

### Steps Completed

1. **Account Setup**
   - Created a Stellar account with public key: `GDO3HFGX445QI4JNXJ3SWQD4XUHP364Z3RMF62LLRSIFKYIVSILLBKYJ`
   - Added the account to Soroban CLI using the alias "Lynn"
   - Funded the account on the Stellar testnet

2. **Contract Preparation**
   - Updated the `uuid` dependency in `Cargo.toml` to include the `js` feature for WebAssembly compatibility:
     ```toml
     uuid = { version = "1.3", features = ["v4", "serde", "js"] }
     ```
   - Built the contract for WebAssembly:
     ```
     cargo build --target wasm32-unknown-unknown --release
     ```

3. **Contract Deployment**
   - Deployed the contract to the Stellar testnet:
     ```
     soroban contract deploy --wasm target/wasm32-unknown-unknown/release/supplyChainMetrics.wasm --source Lynn --network testnet
     ```
   - Contract ID: `CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY`

4. **Contract Initialization**
   - Initialized the contract with the admin address:
     ```
     soroban contract invoke --id CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY --source Lynn --network testnet -- initialize --admin GAQKB24CG2JZXKBZG6DIOL4HTFNBBNRPZPSZQBYNL5EBXTWS3CS7BRV4
     ```

## Contract Details

- **Contract ID**: `CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY`
- **Network**: Stellar Testnet
- **Admin Address**: `GAQKB24CG2JZXKBZG6DIOL4HTFNBBNRPZPSZQBYNL5EBXTWS3CS7BRV4`

## Interacting with the Contract

To interact with the deployed contract, use the Soroban CLI with the contract ID:

```
soroban contract invoke --id CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY --source Lynn --network testnet -- <function_name> [arguments]
```

### Example Commands for Each Function

#### Get All Metrics
```
soroban contract invoke --id CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY --source Lynn --network testnet -- get_all_metrics
```

#### Get a Specific Metric
```
soroban contract invoke --id CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY --source Lynn --network testnet -- get_metric --metric_key TIV
```

#### Update Inventory Value
```
soroban contract invoke --id CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY --source Lynn --network testnet -- update_inventory_value --caller GAQKB24CG2JZXKBZG6DIOL4HTFNBBNRPZPSZQBYNL5EBXTWS3CS7BRV4 --value 1000000
```

#### Update Production Efficiency
```
soroban contract invoke --id CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY --source Lynn --network testnet -- update_production_efficiency --caller GAQKB24CG2JZXKBZG6DIOL4HTFNBBNRPZPSZQBYNL5EBXTWS3CS7BRV4 --efficiency 8500
```
This sets the production efficiency to 85.00%

#### Update On-Time Delivery Rate
```
soroban contract invoke --id CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY --source Lynn --network testnet -- update_on_time_delivery --caller GAQKB24CG2JZXKBZG6DIOL4HTFNBBNRPZPSZQBYNL5EBXTWS3CS7BRV4 --rate 9200
```
This sets the on-time delivery rate to 92.00%

#### Increment Blockchain Transactions
```
soroban contract invoke --id CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY --source Lynn --network testnet -- increment_transactions --caller GAQKB24CG2JZXKBZG6DIOL4HTFNBBNRPZPSZQBYNL5EBXTWS3CS7BRV4
```

## Contract Explorer

You can view the contract on the Stellar Expert Explorer:
[https://stellar.expert/explorer/testnet/contract/CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY](https://stellar.expert/explorer/testnet/contract/CB4WBN5AH42LDZMPBFEC5O5FGFROVMRJXMDZKYTHGD7YLAETPXYOZIOY)

## Business Value and Use Cases

### Business Benefits

1. **Transparency and Trust**
   - Provides immutable records of supply chain metrics
   - Creates a single source of truth for all stakeholders
   - Builds trust between partners through verifiable data

2. **Real-time Visibility**
   - Enables real-time tracking of key performance indicators
   - Allows for immediate identification of issues or bottlenecks
   - Supports data-driven decision making

3. **Efficiency Improvements**
   - Tracks production efficiency to identify optimization opportunities
   - Monitors on-time delivery rates to improve logistics
   - Reduces manual record-keeping and reconciliation

4. **Compliance and Reporting**
   - Simplifies audit processes with immutable records
   - Streamlines compliance reporting
   - Provides verifiable data for regulatory requirements

### Practical Use Cases

1. **Multi-party Supply Chain Management**
   - Coordinate between manufacturers, suppliers, distributors, and retailers
   - Share critical metrics without revealing proprietary information
   - Establish accountability across the supply chain

2. **Performance-based Contracts**
   - Create smart contracts that automatically execute based on performance metrics
   - Implement incentive structures tied to on-time delivery rates
   - Automate payments based on production efficiency

3. **Supply Chain Optimization**
   - Identify inefficiencies through consistent metric tracking
   - Benchmark performance across different time periods
   - Implement and measure the impact of improvement initiatives

4. **Stakeholder Reporting**
   - Generate transparent reports for investors and partners
   - Demonstrate ESG (Environmental, Social, Governance) compliance
   - Share performance metrics with customers to build brand trust