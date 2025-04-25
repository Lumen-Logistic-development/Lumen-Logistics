#![no_std]

use soroban_sdk::{contract, contractimpl, Env, String, Map, Vec, vec, map};

mod storage;
mod types;
mod test;

use storage::{save_production_step, get_production_step, get_all_step_ids, get_steps_for_product};
use types::{ProductionStep, Resource, StepStatus};

#[contract]
pub struct ProductionStepContract;

#[contractimpl]
impl ProductionStepContract {
    // Create a new production step
    pub fn create_step(
        env: Env,
        step_id: String,
        product_id: String,
        start_time: u64,
        responsible: String
    ) -> ProductionStep {
        // Create new step with initial values
        let step = ProductionStep {
            step_id: step_id.clone(),
            product_id,
            start_time,
            end_time: 0, // Not finished
            resources_used: vec![&env],
            responsible,
            quality_results: String::from_str(&env, ""),
            observations: String::from_str(&env, ""),
            status: StepStatus::InProgress,
        };
        
        // Save to storage
        save_production_step(&env, &step);
        
        step
    }
    
    // Add a resource to a step
    pub fn add_resource(
        env: Env,
        step_id: String,
        resource_id: String,
        quantity: u32
    ) -> ProductionStep {
        // Get existing step
        let mut step = get_production_step(&env, &step_id)
            .expect("Production step not found");
        
        // Create the resource
        let resource = Resource {
            resource_id,
            quantity_used: quantity,
        };
        
        // Add directly to the step
        step.resources_used.push_back(resource);
        
        // Save changes
        save_production_step(&env, &step);
        
        step
    }
    
    // Complete a step
    pub fn complete_step(
        env: Env,
        step_id: String,
        end_time: u64,
        quality_results: String,
        observations: String
    ) -> ProductionStep {
        // Get existing step
        let mut step = get_production_step(&env, &step_id)
            .expect("Production step not found");
        
        // Update information
        step.end_time = end_time;
        step.quality_results = quality_results;
        step.observations = observations;
        step.status = StepStatus::Completed;
        
        // Save changes
        save_production_step(&env, &step);
        
        step
    }
    
    // Cancel a step
    pub fn cancel_step(
        env: Env,
        step_id: String,
        observations: String
    ) -> ProductionStep {
        // Get existing step
        let mut step = get_production_step(&env, &step_id)
            .expect("Production step not found");
        
        // Update information
        step.observations = observations;
        step.status = StepStatus::Cancelled;
        
        // Save changes
        save_production_step(&env, &step);
        
        step
    }
    
    // Get a step by ID
    pub fn get_step(env: Env, step_id: String) -> ProductionStep {
        get_production_step(&env, &step_id)
            .expect("Production step not found")
    }
    
    // Get resources of a step as a map
    pub fn get_step_resources(env: Env, step_id: String) -> Map<String, u32> {
        let step = get_production_step(&env, &step_id)
            .expect("Production step not found");
        
        let mut result_map = map![&env];
        
        for resource in step.resources_used.iter() {
            result_map.set(resource.resource_id.clone(), resource.quantity_used);
        }
        
        result_map
    }
    
    // List all steps
    pub fn list_all_steps(env: Env) -> Vec<ProductionStep> {
        let step_ids = get_all_step_ids(&env);
        let mut steps = vec![&env];
        
        for step_id in step_ids.iter() {
            if let Some(step) = get_production_step(&env, &step_id) {
                steps.push_back(step);
            }
        }
        
        steps
    }
    
    // List steps of a product
    pub fn list_product_steps(env: Env, product_id: String) -> Vec<ProductionStep> {
        let step_ids = get_steps_for_product(&env, &product_id);
        let mut steps = vec![&env];
        
        for step_id in step_ids.iter() {
            if let Some(step) = get_production_step(&env, &step_id) {
                steps.push_back(step);
            }
        }
        
        steps
    }
}