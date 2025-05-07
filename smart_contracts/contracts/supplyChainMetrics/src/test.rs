#![cfg(test)]

use super::*;
use soroban_sdk::{testutils::Address as _, Env, Address};

#[test]
fn test_initialize_contract() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Verify initial metrics are set to zero
    let metrics = client.get_all_metrics();
    assert_eq!(metrics.get(TOTAL_INVENTORY_VALUE).unwrap(), 0);
    assert_eq!(metrics.get(PRODUCTION_EFFICIENCY).unwrap(), 0);
    assert_eq!(metrics.get(ON_TIME_DELIVERY).unwrap(), 0);
    assert_eq!(metrics.get(BLOCKCHAIN_TRANSACTIONS).unwrap(), 0);
}

#[test]
#[should_panic(expected = "Contract already initialized")]
fn test_double_initialization() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    let admin2 = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Try to initialize again (should fail)
    client.initialize(&admin2);
}

#[test]
fn test_update_inventory_value() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Update inventory value
    let new_value = 50000_i128;
    client.update_inventory_value(&admin, &new_value);
    
    // Verify the value was updated
    let updated_value = client.get_metric(&TOTAL_INVENTORY_VALUE);
    assert_eq!(updated_value, new_value);
}

#[test]
fn test_update_inventory_value_negative() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Update inventory value with a negative number (allowed for inventory)
    let new_value = -5000_i128;
    client.update_inventory_value(&admin, &new_value);
    
    // Verify the value was updated
    let updated_value = client.get_metric(&TOTAL_INVENTORY_VALUE);
    assert_eq!(updated_value, new_value);
}

#[test]
fn test_update_production_efficiency() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Update production efficiency (85.5%)
    let efficiency = 8550_i128;
    client.update_production_efficiency(&admin, &efficiency);
    
    // Verify the value was updated
    let updated_efficiency = client.get_metric(&PRODUCTION_EFFICIENCY);
    assert_eq!(updated_efficiency, efficiency);
}

#[test]
fn test_update_production_efficiency_boundary_values() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Test minimum value (0%)
    client.update_production_efficiency(&admin, &0_i128);
    assert_eq!(client.get_metric(&PRODUCTION_EFFICIENCY), 0);
    
    // Test maximum value (100%)
    client.update_production_efficiency(&admin, &10000_i128);
    assert_eq!(client.get_metric(&PRODUCTION_EFFICIENCY), 10000);
}

#[test]
#[should_panic(expected = "Efficiency must be between 0 and 10000 (0-100%)")]
fn test_production_efficiency_negative_value() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Try to set a negative efficiency value (should fail)
    client.update_production_efficiency(&admin, &-1_i128);
}

#[test]
fn test_update_on_time_delivery() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Update on-time delivery rate (92.3%)
    let rate = 9230_i128;
    client.update_on_time_delivery(&admin, &rate);
    
    // Verify the value was updated
    let updated_rate = client.get_metric(&ON_TIME_DELIVERY);
    assert_eq!(updated_rate, rate);
}

#[test]
fn test_update_on_time_delivery_boundary_values() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Test minimum value (0%)
    client.update_on_time_delivery(&admin, &0_i128);
    assert_eq!(client.get_metric(&ON_TIME_DELIVERY), 0);
    
    // Test maximum value (100%)
    client.update_on_time_delivery(&admin, &10000_i128);
    assert_eq!(client.get_metric(&ON_TIME_DELIVERY), 10000);
}

#[test]
#[should_panic(expected = "Rate must be between 0 and 10000 (0-100%)")]
fn test_on_time_delivery_out_of_range() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Try to set an out-of-range delivery rate (should fail)
    client.update_on_time_delivery(&admin, &10001_i128);
}

#[test]
fn test_increment_transactions() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Increment transactions multiple times
    client.increment_transactions(&admin);
    client.increment_transactions(&admin);
    client.increment_transactions(&admin);
    
    // Verify the count was incremented correctly
    let transaction_count = client.get_metric(&BLOCKCHAIN_TRANSACTIONS);
    assert_eq!(transaction_count, 3);
}

#[test]
fn test_large_number_of_transactions() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Increment transactions a large number of times
    for _ in 0..100 {
        client.increment_transactions(&admin);
    }
    
    // Verify the count was incremented correctly
    let transaction_count = client.get_metric(&BLOCKCHAIN_TRANSACTIONS);
    assert_eq!(transaction_count, 100);
}

#[test]
fn test_get_all_metrics() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Update various metrics
    client.update_inventory_value(&admin, &75000_i128);
    client.update_production_efficiency(&admin, &9000_i128);
    client.update_on_time_delivery(&admin, &9500_i128);
    client.increment_transactions(&admin);
    client.increment_transactions(&admin);
    
    // Get all metrics at once
    let metrics = client.get_all_metrics();
    
    // Verify all metrics are correct
    assert_eq!(metrics.get(TOTAL_INVENTORY_VALUE).unwrap(), 75000);
    assert_eq!(metrics.get(PRODUCTION_EFFICIENCY).unwrap(), 9000);
    assert_eq!(metrics.get(ON_TIME_DELIVERY).unwrap(), 9500);
    assert_eq!(metrics.get(BLOCKCHAIN_TRANSACTIONS).unwrap(), 2);
}

#[test]
fn test_multiple_metric_updates() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Update inventory value multiple times
    client.update_inventory_value(&admin, &10000_i128);
    client.update_inventory_value(&admin, &20000_i128);
    client.update_inventory_value(&admin, &15000_i128);
    
    // Update efficiency multiple times
    client.update_production_efficiency(&admin, &8000_i128);
    client.update_production_efficiency(&admin, &8500_i128);
    
    // Update delivery rate multiple times
    client.update_on_time_delivery(&admin, &9000_i128);
    client.update_on_time_delivery(&admin, &9200_i128);
    
    // Increment transactions
    client.increment_transactions(&admin);
    
    // Verify final values
    let metrics = client.get_all_metrics();
    assert_eq!(metrics.get(TOTAL_INVENTORY_VALUE).unwrap(), 15000);
    assert_eq!(metrics.get(PRODUCTION_EFFICIENCY).unwrap(), 8500);
    assert_eq!(metrics.get(ON_TIME_DELIVERY).unwrap(), 9200);
    assert_eq!(metrics.get(BLOCKCHAIN_TRANSACTIONS).unwrap(), 1);
}

#[test]
fn test_get_specific_metric() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create a test admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Update various metrics
    client.update_inventory_value(&admin, &75000_i128);
    client.update_production_efficiency(&admin, &9000_i128);
    client.update_on_time_delivery(&admin, &9500_i128);
    client.increment_transactions(&admin);
    
    // Get specific metrics
    assert_eq!(client.get_metric(&TOTAL_INVENTORY_VALUE), 75000);
    assert_eq!(client.get_metric(&PRODUCTION_EFFICIENCY), 9000);
    assert_eq!(client.get_metric(&ON_TIME_DELIVERY), 9500);
    assert_eq!(client.get_metric(&BLOCKCHAIN_TRANSACTIONS), 1);
    
    // Get a non-existent metric (should return 0)
    assert_eq!(client.get_metric(&symbol_short!("NONEXIST")), 0);
}

#[test]
#[should_panic(expected = "Caller is not the admin")]
fn test_unauthorized_update() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create admin and unauthorized user addresses
    let admin = Address::generate(&env);
    let unauthorized_user = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Try to update a metric with an unauthorized user (should fail)
    client.update_inventory_value(&unauthorized_user, &10000_i128);
}

#[test]
#[should_panic(expected = "Caller is not the admin")]
fn test_unauthorized_increment_transactions() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create admin and unauthorized user addresses
    let admin = Address::generate(&env);
    let unauthorized_user = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Try to increment transactions with an unauthorized user (should fail)
    client.increment_transactions(&unauthorized_user);
}

#[test]
#[should_panic(expected = "Efficiency must be between 0 and 10000 (0-100%)")]
fn test_invalid_efficiency_value() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create admin address
    let admin = Address::generate(&env);
    
    // Initialize the contract
    client.initialize(&admin);
    
    // Try to set an invalid efficiency value (over 100%)
    client.update_production_efficiency(&admin, &12000_i128);
}

#[test]
#[should_panic(expected = "Contract not initialized")]
fn test_update_before_initialization() {
    let env = Env::default();
    let contract_id = env.register(SupplyChainMetrics, ());
    let client = SupplyChainMetricsClient::new(&env, &contract_id);
    
    // Create admin address
    let admin = Address::generate(&env);
    
    // Try to update a metric before initialization (should fail)
    client.update_inventory_value(&admin, &10000_i128);
}
