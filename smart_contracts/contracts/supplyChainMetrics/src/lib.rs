#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Env, Symbol, Map, Address};

// Define the data structure for our supply chain metrics contract
#[contract]
pub struct SupplyChainMetrics;

// Define the keys for our metrics
const TOTAL_INVENTORY_VALUE: Symbol = symbol_short!("TIV");
const PRODUCTION_EFFICIENCY: Symbol = symbol_short!("PE");
const ON_TIME_DELIVERY: Symbol = symbol_short!("OTD");
const BLOCKCHAIN_TRANSACTIONS: Symbol = symbol_short!("BT");

#[contractimpl]
impl SupplyChainMetrics {
    // Initialize the contract with default values
    pub fn initialize(env: Env, admin: Address) {
        // Check if contract is already initialized
        if env.storage().instance().has(&TOTAL_INVENTORY_VALUE) {
            panic!("Contract already initialized");
        }

        // Store the admin address
        env.storage().instance().set(&symbol_short!("ADMIN"), &admin);

        // Initialize metrics with default values
        env.storage().instance().set(&TOTAL_INVENTORY_VALUE, &0_i128);
        env.storage().instance().set(&PRODUCTION_EFFICIENCY, &0_i128);
        env.storage().instance().set(&ON_TIME_DELIVERY, &0_i128);
        env.storage().instance().set(&BLOCKCHAIN_TRANSACTIONS, &0_i128);
    }

    // Update the Total Inventory Value
    pub fn update_inventory_value(env: Env, caller: Address, value: i128) {
        Self::require_admin(&env, &caller);
        env.storage().instance().set(&TOTAL_INVENTORY_VALUE, &value);
    }

    // Update the Production Efficiency (stored as percentage * 100 for precision)
    pub fn update_production_efficiency(env: Env, caller: Address, efficiency: i128) {
        Self::require_admin(&env, &caller);
        if efficiency < 0 || efficiency > 10000 {
            panic!("Efficiency must be between 0 and 10000 (0-100%)");
        }
        env.storage().instance().set(&PRODUCTION_EFFICIENCY, &efficiency);
    }

    // Update the On-Time Delivery rate (stored as percentage * 100 for precision)
    pub fn update_on_time_delivery(env: Env, caller: Address, rate: i128) {
        Self::require_admin(&env, &caller);
        if rate < 0 || rate > 10000 {
            panic!("Rate must be between 0 and 10000 (0-100%)");
        }
        env.storage().instance().set(&ON_TIME_DELIVERY, &rate);
    }

    // Increment the Blockchain Transactions count
    pub fn increment_transactions(env: Env, caller: Address) {
        Self::require_admin(&env, &caller);
        let current: i128 = env.storage().instance().get(&BLOCKCHAIN_TRANSACTIONS).unwrap_or(0);
        env.storage().instance().set(&BLOCKCHAIN_TRANSACTIONS, &(current + 1));
    }

    // Get all metrics at once
    pub fn get_all_metrics(env: Env) -> Map<Symbol, i128> {
        let mut metrics = Map::new(&env);
        
        metrics.set(
            TOTAL_INVENTORY_VALUE,
            env.storage().instance().get(&TOTAL_INVENTORY_VALUE).unwrap_or(0)
        );
        
        metrics.set(
            PRODUCTION_EFFICIENCY,
            env.storage().instance().get(&PRODUCTION_EFFICIENCY).unwrap_or(0)
        );
        
        metrics.set(
            ON_TIME_DELIVERY,
            env.storage().instance().get(&ON_TIME_DELIVERY).unwrap_or(0)
        );
        
        metrics.set(
            BLOCKCHAIN_TRANSACTIONS,
            env.storage().instance().get(&BLOCKCHAIN_TRANSACTIONS).unwrap_or(0)
        );
        
        metrics
    }

    // Get a specific metric
    pub fn get_metric(env: Env, metric_key: Symbol) -> i128 {
        env.storage().instance().get(&metric_key).unwrap_or(0)
    }

    // Helper function to check if caller is admin
    fn require_admin(env: &Env, caller: &Address) {
        let admin: Address = env.storage().instance().get(&symbol_short!("ADMIN"))
            .unwrap_or_else(|| panic!("Contract not initialized"));
        
        if admin != *caller {
            panic!("Caller is not the admin");
        }
    }
}

mod test;
