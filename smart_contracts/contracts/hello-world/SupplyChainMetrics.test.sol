// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SupplyChainMetrics.sol";

contract SupplyChainMetricsTest {
    SupplyChainMetrics private metrics;
    
    // Events for test results
    event TestPassed(string testName);
    event TestFailed(string testName, string reason);
    
    constructor() {
        // Deploy the contract to be tested
        metrics = new SupplyChainMetrics();
    }
    
    function runAllTests() public {
        testInitialValues();
        testUpdateInventoryValue();
        testUpdateProductionEfficiency();
        testUpdateOnTimeDelivery();
        testIncrementTransactionCount();
        testAddMultipleTransactions();
        testHistoryData();
    }
    
    function testInitialValues() public {
        (uint256 inv, uint256 prod, uint256 del, uint256 trans) = metrics.getAllMetrics();
        
        if (inv == 0 && prod == 0 && del == 0 && trans == 0) {
            emit TestPassed("Initial values should be zero");
        } else {
            emit TestFailed("Initial values should be zero", "One or more values were not zero");
        }
    }
    
    function testUpdateInventoryValue() public {
        uint256 newValue = 1000;
        metrics.updateInventoryValue(newValue);
        
        (uint256 inv, , , ) = metrics.getAllMetrics();
        
        if (inv == newValue) {
            emit TestPassed("Update inventory value");
        } else {
            emit TestFailed("Update inventory value", "Value was not updated correctly");
        }
    }
    
    function testUpdateProductionEfficiency() public {
        uint256 newValue = 850; // 85.0%
        metrics.updateProductionEfficiency(newValue);
        
        (, uint256 prod, , ) = metrics.getAllMetrics();
        
        if (prod == newValue) {
            emit TestPassed("Update production efficiency");
        } else {
            emit TestFailed("Update production efficiency", "Value was not updated correctly");
        }
    }
    
    function testUpdateOnTimeDelivery() public {
        uint256 newValue = 920; // 92.0%
        metrics.updateOnTimeDelivery(newValue);
        
        (, , uint256 del, ) = metrics.getAllMetrics();
        
        if (del == newValue) {
            emit TestPassed("Update on-time delivery");
        } else {
            emit TestFailed("Update on-time delivery", "Value was not updated correctly");
        }
    }
    
    function testIncrementTransactionCount() public {
        (, , , uint256 oldValue) = metrics.getAllMetrics();
        metrics.incrementTransactionCount();
        (, , , uint256 newValue) = metrics.getAllMetrics();
        
        if (newValue == oldValue + 1) {
            emit TestPassed("Increment transaction count");
        } else {
            emit TestFailed("Increment transaction count", "Value was not incremented correctly");
        }
    }
    
    function testAddMultipleTransactions() public {
        (, , , uint256 oldValue) = metrics.getAllMetrics();
        uint256 count = 5;
        metrics.addMultipleTransactions(count);
        (, , , uint256 newValue) = metrics.getAllMetrics();
        
        if (newValue == oldValue + count) {
            emit TestPassed("Add multiple transactions");
        } else {
            emit TestFailed("Add multiple transactions", "Value was not incremented correctly");
        }
    }
    
    function testHistoryData() public {
        // Update values multiple times to create history
        for (uint i = 0; i < 3; i++) {
            metrics.updateInventoryValue(2000 + i * 100);
        }
        
        // Get history (last 3 data points)
        (uint256[] memory timestamps, uint256[] memory values) = metrics.getInventoryValueHistory(3);
        
        if (values.length == 3) {
            emit TestPassed("History data length check");
        } else {
            emit TestFailed("History data length check", "Wrong number of data points returned");
        }
        
        // Note: In a real test, you would check the actual values
        // But this is simplified for demonstration purposes
    }
    
    // Test for expected failures
    function testProductionEfficiencyLimit() public {
        bool testPassed = false;
        
        try metrics.updateProductionEfficiency(1001) {
            emit TestFailed("Production efficiency limit", "Should not allow values over 1000");
        } catch {
            testPassed = true;
        }
        
        if (testPassed) {
            emit TestPassed("Production efficiency limit");
        }
    }
    
    function testOnTimeDeliveryLimit() public {
        bool testPassed = false;
        
        try metrics.updateOnTimeDelivery(1001) {
            emit TestFailed("On-time delivery limit", "Should not allow values over 1000");
        } catch {
            testPassed = true;
        }
        
        if (testPassed) {
            emit TestPassed("On-time delivery limit");
        }
    }
}