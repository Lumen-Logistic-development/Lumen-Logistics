// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChainMetrics {
    // Contract owner
    address private owner;
    
    // Struct to store historical data points
    struct MetricDataPoint {
        uint256 timestamp;
        uint256 value;
    }
    
    // Main metrics
    uint256 public totalInventoryValue;
    uint256 public productionEfficiency;
    uint256 public onTimeDelivery;
    uint256 public blockchainTransactions; 
    
    // Historical data storage (limited to last 30 data points for each metric)
    MetricDataPoint[30] private inventoryValueHistory;
    MetricDataPoint[30] private productionEfficiencyHistory;
    MetricDataPoint[30] private onTimeDeliveryHistory;
    MetricDataPoint[30] private blockchainTransactionsHistory;
    
    // Current index for circular buffer of historical data
    uint8 private inventoryValueIndex;
    uint8 private productionEfficiencyIndex;
    uint8 private onTimeDeliveryIndex;
    uint8 private blockchainTransactionsIndex;
    
    // Events for metric updates
    event InventoryValueUpdated(uint256 oldValue, uint256 newValue, uint256 timestamp);
    event ProductionEfficiencyUpdated(uint256 oldValue, uint256 newValue, uint256 timestamp);
    event OnTimeDeliveryUpdated(uint256 oldValue, uint256 newValue, uint256 timestamp);
    event BlockchainTransactionsIncremented(uint256 oldValue, uint256 newValue, uint256 timestamp);
    
    // Access control
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }
    
    // Constructor
    constructor() {
        owner = msg.sender;
        
        // Initialize with zero values
        totalInventoryValue = 0;
        productionEfficiency = 0;
        onTimeDelivery = 0;
        blockchainTransactions = 0;
        
        // Initialize circular buffer indexes
        inventoryValueIndex = 0;
        productionEfficiencyIndex = 0;
        onTimeDeliveryIndex = 0;
        blockchainTransactionsIndex = 0;
    }

    function updateInventoryValue(uint256 newValue) external onlyOwner {
        uint256 oldValue = totalInventoryValue;
        totalInventoryValue = newValue;
        
        // Update history
        inventoryValueHistory[inventoryValueIndex] = MetricDataPoint({
            timestamp: block.timestamp,
            value: newValue
        });
        inventoryValueIndex = (inventoryValueIndex + 1) % 30;
        
        // Emit event
        emit InventoryValueUpdated(oldValue, newValue, block.timestamp);
    }

    function updateProductionEfficiency(uint256 newValue) external onlyOwner {
        require(newValue <= 1000, "Efficiency cannot exceed 100.0%");
        
        uint256 oldValue = productionEfficiency;
        productionEfficiency = newValue;
        
        // Update history
        productionEfficiencyHistory[productionEfficiencyIndex] = MetricDataPoint({
            timestamp: block.timestamp,
            value: newValue
        });
        productionEfficiencyIndex = (productionEfficiencyIndex + 1) % 30;
        
        emit ProductionEfficiencyUpdated(oldValue, newValue, block.timestamp);
    }
    
    function updateOnTimeDelivery(uint256 newValue) external onlyOwner {
        require(newValue <= 1000, "Delivery rate cannot exceed 100.0%");
        
        uint256 oldValue = onTimeDelivery;
        onTimeDelivery = newValue;
        
        // Update history
        onTimeDeliveryHistory[onTimeDeliveryIndex] = MetricDataPoint({
            timestamp: block.timestamp,
            value: newValue
        });
        onTimeDeliveryIndex = (onTimeDeliveryIndex + 1) % 30;
        
        // Emit event
        emit OnTimeDeliveryUpdated(oldValue, newValue, block.timestamp);
    }
    
    function incrementTransactionCount() external onlyOwner {
        uint256 oldValue = blockchainTransactions;
        blockchainTransactions++;
        
        // Update history
        blockchainTransactionsHistory[blockchainTransactionsIndex] = MetricDataPoint({
            timestamp: block.timestamp,
            value: blockchainTransactions
        });
        blockchainTransactionsIndex = (blockchainTransactionsIndex + 1) % 30;
        
        // Emit event
        emit BlockchainTransactionsIncremented(oldValue, blockchainTransactions, block.timestamp);
    }
    
    function addMultipleTransactions(uint256 count) external onlyOwner {
        uint256 oldValue = blockchainTransactions;
        blockchainTransactions += count;
        
        // Update history
        blockchainTransactionsHistory[blockchainTransactionsIndex] = MetricDataPoint({
            timestamp: block.timestamp,
            value: blockchainTransactions
        });
        blockchainTransactionsIndex = (blockchainTransactionsIndex + 1) % 30;
        
        // Emit event
        emit BlockchainTransactionsIncremented(oldValue, blockchainTransactions, block.timestamp);
    }
    
    function getAllMetrics() external view returns (uint256, uint256, uint256, uint256) {
        return (totalInventoryValue, productionEfficiency, onTimeDelivery, blockchainTransactions);
    }
    
    function getInventoryValueHistory(uint8 count) external view returns (uint256[] memory, uint256[] memory) {
        require(count <= 30, "Cannot request more than 30 data points");
        
        uint256[] memory timestamps = new uint256[](count);
        uint256[] memory values = new uint256[](count);
        
        for (uint8 i = 0; i < count; i++) {
            uint8 index = (30 + inventoryValueIndex - 1 - i) % 30;
            timestamps[i] = inventoryValueHistory[index].timestamp;
            values[i] = inventoryValueHistory[index].value;
        }
        
        return (timestamps, values);
    }
    
    function getProductionEfficiencyHistory(uint8 count) external view returns (uint256[] memory, uint256[] memory) {
        require(count <= 30, "Cannot request more than 30 data points");
        
        uint256[] memory timestamps = new uint256[](count);
        uint256[] memory values = new uint256[](count);
        
        for (uint8 i = 0; i < count; i++) {
            uint8 index = (30 + productionEfficiencyIndex - 1 - i) % 30;
            timestamps[i] = productionEfficiencyHistory[index].timestamp;
            values[i] = productionEfficiencyHistory[index].value;
        }
        
        return (timestamps, values);
    }
    
    function getOnTimeDeliveryHistory(uint8 count) external view returns (uint256[] memory, uint256[] memory) {
        require(count <= 30, "Cannot request more than 30 data points");
        
        uint256[] memory timestamps = new uint256[](count);
        uint256[] memory values = new uint256[](count);
        
        for (uint8 i = 0; i < count; i++) {
            uint8 index = (30 + onTimeDeliveryIndex - 1 - i) % 30;
            timestamps[i] = onTimeDeliveryHistory[index].timestamp;
            values[i] = onTimeDeliveryHistory[index].value;
        }
        
        return (timestamps, values);
    }
    
    function getBlockchainTransactionsHistory(uint8 count) external view returns (uint256[] memory, uint256[] memory) {
        require(count <= 30, "Cannot request more than 30 data points");
        
        uint256[] memory timestamps = new uint256[](count);
        uint256[] memory values = new uint256[](count);
        
        for (uint8 i = 0; i < count; i++) {
            uint8 index = (30 + blockchainTransactionsIndex - 1 - i) % 30;
            timestamps[i] = blockchainTransactionsHistory[index].timestamp;
            values[i] = blockchainTransactionsHistory[index].value;
        }
        
        return (timestamps, values);
    }
    
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner cannot be the zero address");
        owner = newOwner;
    }
}