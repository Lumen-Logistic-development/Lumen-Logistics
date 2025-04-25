use soroban_sdk::{Env, String, Vec, vec};
use crate::types::ProductionStep;

// Storage keys
const STEP_PREFIX: &str = "STEP_";
const PRODUCT_STEPS_PREFIX: &str = "PROD_STEPS_";
const ALL_STEPS_KEY: &str = "ALL_STEPS";

// Save a production step
pub fn save_production_step(env: &Env, step: &ProductionStep) {
    let step_id = &step.step_id;
    let product_id = &step.product_id;
    
    // Save the step
    let key = storage_key(env, STEP_PREFIX, step_id);
    env.storage().persistent().set(&key, step);
    
    // Update steps by product
    update_product_steps(env, product_id, step_id);
    
    // Update list of all steps
    update_all_steps(env, step_id);
}

// Get a production step by ID
pub fn get_production_step(env: &Env, step_id: &String) -> Option<ProductionStep> {
    let key = storage_key(env, STEP_PREFIX, step_id);
    env.storage().persistent().get(&key)
}

// Get all step IDs
pub fn get_all_step_ids(env: &Env) -> Vec<String> {
    let key = String::from_str(env, ALL_STEPS_KEY);
    env.storage().persistent().get(&key).unwrap_or_else(|| vec![env])
}

// Get steps for a specific product
pub fn get_steps_for_product(env: &Env, product_id: &String) -> Vec<String> {
    let key = storage_key(env, PRODUCT_STEPS_PREFIX, product_id);
    env.storage().persistent().get(&key).unwrap_or_else(|| vec![env])
}

// Helper to update the list of all steps
fn update_all_steps(env: &Env, step_id: &String) {
    let mut all_steps = get_all_step_ids(env);
    
    // Check if the step is already in the list
    for id in all_steps.iter() {
        if &id == step_id {
            return; // Already exists, do nothing
        }
    }
    
    // If it doesn't exist, add it
    all_steps.push_back(step_id.clone());
    let key = String::from_str(env, ALL_STEPS_KEY);
    env.storage().persistent().set(&key, &all_steps);
}

// Helper to update the steps of a product
fn update_product_steps(env: &Env, product_id: &String, step_id: &String) {
    let key = storage_key(env, PRODUCT_STEPS_PREFIX, product_id);
    let mut steps = env.storage().persistent().get::<_, Vec<String>>(&key)
        .unwrap_or_else(|| vec![env]);
    
    // Check if the step is already associated with this product
    for id in steps.iter() {
        if &id == step_id {
            return; // Already exists, do nothing
        }
    }
    
    // If it doesn't exist, add it
    steps.push_back(step_id.clone());
    env.storage().persistent().set(&key, &steps);
}

// Helper to build storage keys
fn storage_key(env: &Env, prefix: &str, id: &String) -> String {
    // Convert to a standard Rust string
    let id_str = id.to_string();
    
    // Build the prefix + id
    let key_str = format!("{}{}", prefix, id_str);
    
    // Convert to Soroban String
    String::from_str(env, &key_str)
} 