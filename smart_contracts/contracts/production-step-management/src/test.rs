#![cfg(test)]

use crate::{
    ProductionStepContract, 
    ProductionStepContractClient,
    types::StepStatus
};
use soroban_sdk::{Env, String};

#[test]
fn test_create_and_get_step() {
    // Set up the environment
    let env = Env::default();
    let contract_id = env.register(ProductionStepContract, ());
    let client = ProductionStepContractClient::new(&env, &contract_id);
    
    // Create test data
    let step_id = String::from_str(&env, "STEP001");
    let product_id = String::from_str(&env, "PROD001");
    let start_time = 1000u64;
    let responsible = String::from_str(&env, "responsible_account");
    
    // Create the step
    let step = client.create_step(&step_id, &product_id, &start_time, &responsible);
    
    // Verify that the step was created correctly
    assert_eq!(step.step_id, step_id);
    assert_eq!(step.product_id, product_id);
    assert_eq!(step.start_time, start_time);
    assert_eq!(step.responsible, responsible);
    assert_eq!(step.status, StepStatus::InProgress);
    assert_eq!(step.resources_used.len(), 0);
    
    // Get the step
    let retrieved_step = client.get_step(&step_id);
    assert_eq!(retrieved_step, step);
}

#[test]
fn test_add_resource() {
    // Set up the environment
    let env = Env::default();
    let contract_id = env.register(ProductionStepContract, ());
    let client = ProductionStepContractClient::new(&env, &contract_id);
    
    // Create test data
    let step_id = String::from_str(&env, "STEP002");
    let product_id = String::from_str(&env, "PROD002");
    let start_time = 2000u64;
    let responsible = String::from_str(&env, "responsible_account");
    
    // Create the step
    client.create_step(&step_id, &product_id, &start_time, &responsible);
    
    // Add a resource
    let resource_id = String::from_str(&env, "RESOURCE001");
    let quantity = 10u32;
    let step_with_resource = client.add_resource(&step_id, &resource_id, &quantity);
    
    // Verify that the resource was added correctly
    assert_eq!(step_with_resource.resources_used.len(), 1);
    let resource = step_with_resource.resources_used.get(0).unwrap();
    assert_eq!(resource.resource_id, resource_id);
    assert_eq!(resource.quantity_used, quantity);
    
    // Add another resource
    let resource_id2 = String::from_str(&env, "RESOURCE002");
    let quantity2 = 5u32;
    let step_with_resources = client.add_resource(&step_id, &resource_id2, &quantity2);
    
    // Verify that both resources are present
    assert_eq!(step_with_resources.resources_used.len(), 2);
    
    // Verify resource using the map
    let resources_map = client.get_step_resources(&step_id);
    assert_eq!(resources_map.get(resource_id).unwrap(), quantity);
    assert_eq!(resources_map.get(resource_id2).unwrap(), quantity2);
}

#[test]
fn test_complete_step() {
    // Set up the environment
    let env = Env::default();
    let contract_id = env.register(ProductionStepContract, ());
    let client = ProductionStepContractClient::new(&env, &contract_id);
    
    // Create test data
    let step_id = String::from_str(&env, "STEP003");
    let product_id = String::from_str(&env, "PROD003");
    let start_time = 3000u64;
    let end_time = 4000u64;
    let responsible = String::from_str(&env, "responsible_account");
    
    // Create the step
    client.create_step(&step_id, &product_id, &start_time, &responsible);
    
    // Complete the step
    let quality_results = String::from_str(&env, "Passed QA testing");
    let observations = String::from_str(&env, "Completed according to specifications");
    let completed_step = client.complete_step(
        &step_id, 
        &end_time, 
        &quality_results, 
        &observations
    );
    
    // Verify that the step was completed correctly
    assert_eq!(completed_step.end_time, end_time);
    assert_eq!(completed_step.quality_results, quality_results);
    assert_eq!(completed_step.observations, observations);
    assert_eq!(completed_step.status, StepStatus::Completed);
    
    // Get the step
    let retrieved_step = client.get_step(&step_id);
    assert_eq!(retrieved_step, completed_step);
}

#[test]
fn test_cancel_step() {
    // Set up the environment
    let env = Env::default();
    let contract_id = env.register(ProductionStepContract, ());
    let client = ProductionStepContractClient::new(&env, &contract_id);
    
    // Create test data
    let step_id = String::from_str(&env, "STEP004");
    let product_id = String::from_str(&env, "PROD004");
    let start_time = 5000u64;
    let responsible = String::from_str(&env, "responsible_account");
    
    // Create the step
    client.create_step(&step_id, &product_id, &start_time, &responsible);
    
    // Cancel the step
    let reason = String::from_str(&env, "Material shortage");
    let cancelled_step = client.cancel_step(&step_id, &reason);
    
    // Verify that the step was cancelled correctly
    assert_eq!(cancelled_step.observations, reason);
    assert_eq!(cancelled_step.status, StepStatus::Cancelled);
    
    // Get the step
    let retrieved_step = client.get_step(&step_id);
    assert_eq!(retrieved_step, cancelled_step);
}

#[test]
fn test_list_steps() {
    // Set up the environment
    let env = Env::default();
    let contract_id = env.register(ProductionStepContract, ());
    let client = ProductionStepContractClient::new(&env, &contract_id);
    
    // Create test data - Product 1
    let product_id1 = String::from_str(&env, "PROD005");
    let responsible = String::from_str(&env, "responsible_account");
    
    // Create multiple steps for the same product
    let step_id1 = String::from_str(&env, "STEP005");
    let step_id2 = String::from_str(&env, "STEP006");
    
    client.create_step(&step_id1, &product_id1, &6000u64, &responsible);
    client.create_step(&step_id2, &product_id1, &7000u64, &responsible);
    
    // Create a step for another product
    let product_id2 = String::from_str(&env, "PROD006");
    let step_id3 = String::from_str(&env, "STEP007");
    client.create_step(&step_id3, &product_id2, &8000u64, &responsible);
    
    // List all steps
    let all_steps = client.list_all_steps();
    assert_eq!(all_steps.len(), 3);
    
    // List steps by product
    let prod1_steps = client.list_product_steps(&product_id1);
    assert_eq!(prod1_steps.len(), 2);
    
    let prod2_steps = client.list_product_steps(&product_id2);
    assert_eq!(prod2_steps.len(), 1);
    
    // Verify that we found the correct step
    let step = prod2_steps.get(0).unwrap();
    assert_eq!(step.step_id, step_id3);
    assert_eq!(step.product_id, product_id2);
}

#[test]
fn test_resource_operations() {
    // Setup environment
    let env = Env::default();
    let contract_id = env.register(ProductionStepContract, ());
    let client = ProductionStepContractClient::new(&env, &contract_id);
    
    // Create test data
    let step_id = String::from_str(&env, "STEP_RES");
    let product_id = String::from_str(&env, "PROD_RES");
    let start_time = 1000u64;
    let responsible = String::from_str(&env, "resource_manager");
    
    // Create the step
    client.create_step(&step_id, &product_id, &start_time, &responsible);
    
    // Add multiple resources
    let resource_ids = ["MATERIAL_A", "MATERIAL_B", "TOOL_X"];
    let quantities = [15u32, 8u32, 1u32];
    
    for i in 0..resource_ids.len() {
        let res_id = String::from_str(&env, resource_ids[i]);
        client.add_resource(&step_id, &res_id, &quantities[i]);
    }
    
    // Verify all resources were added correctly
    let step = client.get_step(&step_id);
    assert_eq!(step.resources_used.len(), resource_ids.len() as u32);
    
    // Check resources through map interface
    let resources_map = client.get_step_resources(&step_id);
    assert_eq!(resources_map.len(), resource_ids.len() as u32);
    
    for i in 0..resource_ids.len() {
        let res_id = String::from_str(&env, resource_ids[i]);
        assert_eq!(resources_map.get(res_id).unwrap(), quantities[i]);
    }
}

#[test]
fn test_step_lifecycle() {
    // Setup environment
    let env = Env::default();
    let contract_id = env.register(ProductionStepContract, ());
    let client = ProductionStepContractClient::new(&env, &contract_id);
    
    // Create test data
    let step_id = String::from_str(&env, "STEP_LIFE");
    let product_id = String::from_str(&env, "PROD_LIFE");
    let start_time = 2000u64;
    let responsible = String::from_str(&env, "lifecycle_manager");
    
    // Create the step
    let step = client.create_step(&step_id, &product_id, &start_time, &responsible);
    assert_eq!(step.status, StepStatus::InProgress);
    
    // Add resources
    let material_id = String::from_str(&env, "RAW_MATERIAL");
    client.add_resource(&step_id, &material_id, &25u32);
    
    // Complete the step
    let end_time = 3500u64;
    let quality_results = String::from_str(&env, "98% pass rate");
    let observations = String::from_str(&env, "Completed with minor adjustments");
    let completed_step = client.complete_step(
        &step_id,
        &end_time,
        &quality_results,
        &observations
    );
    
    // Verify completed state
    assert_eq!(completed_step.status, StepStatus::Completed);
    assert_eq!(completed_step.end_time, end_time);
    
    // Try to modify completed step (should still work but be aware of this in production)
    let new_material = String::from_str(&env, "ADDITIONAL_MATERIAL");
    let updated_step = client.add_resource(&step_id, &new_material, &5u32);
    
    // Verify the resource was added despite completion
    assert_eq!(updated_step.resources_used.len(), 2);
    assert_eq!(updated_step.status, StepStatus::Completed);
}

#[test]
fn test_multiple_products_workflow() {
    // Setup environment
    let env = Env::default();
    let contract_id = env.register(ProductionStepContract, ());
    let client = ProductionStepContractClient::new(&env, &contract_id);
    
    // Create multiple products with multiple steps each
    let products = ["CHAIR_A", "TABLE_B", "SHELF_C"];
    let steps_per_product = 3;
    let responsible = String::from_str(&env, "workflow_manager");
    
    // Create steps for each product
    for (p_idx, product) in products.iter().enumerate() {
        let product_id = String::from_str(&env, *product);
        
        for s_idx in 0..steps_per_product {
            // Use simple naming patterns and if conditions
            let step_id;
            if *product == "CHAIR_A" && s_idx == 0 {
                step_id = String::from_str(&env, "CHAIR_A_0");
            } else if *product == "CHAIR_A" && s_idx == 1 {
                step_id = String::from_str(&env, "CHAIR_A_1");
            } else if *product == "CHAIR_A" && s_idx == 2 {
                step_id = String::from_str(&env, "CHAIR_A_2");
            } else if *product == "TABLE_B" && s_idx == 0 {
                step_id = String::from_str(&env, "TABLE_B_0");
            } else if *product == "TABLE_B" && s_idx == 1 {
                step_id = String::from_str(&env, "TABLE_B_1");
            } else if *product == "TABLE_B" && s_idx == 2 {
                step_id = String::from_str(&env, "TABLE_B_2");
            } else if *product == "SHELF_C" && s_idx == 0 {
                step_id = String::from_str(&env, "SHELF_C_0");
            } else if *product == "SHELF_C" && s_idx == 1 {
                step_id = String::from_str(&env, "SHELF_C_1");
            } else if *product == "SHELF_C" && s_idx == 2 {
                step_id = String::from_str(&env, "SHELF_C_2");
            } else {
                step_id = String::from_str(&env, "UNKNOWN");
            }
            
            let start_time = ((p_idx * steps_per_product + s_idx) as u64) * 1000 + 5000;
            
            client.create_step(&step_id, &product_id, &start_time, &responsible.clone());
            
            // Resource IDs also using if conditions
            let resource_id;
            if *product == "CHAIR_A" && s_idx == 0 {
                resource_id = String::from_str(&env, "RES_CHAIR_A_0");
            } else if *product == "CHAIR_A" && s_idx == 1 {
                resource_id = String::from_str(&env, "RES_CHAIR_A_1");
            } else if *product == "CHAIR_A" && s_idx == 2 {
                resource_id = String::from_str(&env, "RES_CHAIR_A_2");
            } else if *product == "TABLE_B" && s_idx == 0 {
                resource_id = String::from_str(&env, "RES_TABLE_B_0");
            } else if *product == "TABLE_B" && s_idx == 1 {
                resource_id = String::from_str(&env, "RES_TABLE_B_1");
            } else if *product == "TABLE_B" && s_idx == 2 {
                resource_id = String::from_str(&env, "RES_TABLE_B_2");
            } else if *product == "SHELF_C" && s_idx == 0 {
                resource_id = String::from_str(&env, "RES_SHELF_C_0");
            } else if *product == "SHELF_C" && s_idx == 1 {
                resource_id = String::from_str(&env, "RES_SHELF_C_1");
            } else if *product == "SHELF_C" && s_idx == 2 {
                resource_id = String::from_str(&env, "RES_SHELF_C_2");
            } else {
                resource_id = String::from_str(&env, "RES_UNKNOWN");
            }
            
            client.add_resource(&step_id, &resource_id, &((s_idx as u32 + 1) * 5));
            
            // Complete some steps
            if s_idx % 2 == 0 {
                let quality = String::from_str(&env, "Good quality");
                
                // Notes also with if conditions
                let notes;
                if s_idx == 0 {
                    notes = String::from_str(&env, "Step 0 completed");
                } else if s_idx == 2 {
                    notes = String::from_str(&env, "Step 2 completed");
                } else {
                    notes = String::from_str(&env, "Step completed");
                }
                
                client.complete_step(
                    &step_id,
                    &(start_time + 500),
                    &quality,
                    &notes
                );
            }
        }
    }
    
    // Test listing all steps
    let all_steps = client.list_all_steps();
    assert_eq!(all_steps.len(), products.len() as u32 * steps_per_product as u32);
    
    // Test listing by product
    for product in products.iter() {
        let product_id = String::from_str(&env, *product);
        let product_steps = client.list_product_steps(&product_id);
        assert_eq!(product_steps.len(), steps_per_product as u32);
    }
    
    // Verify completed vs in-progress counts
    let completed_count = all_steps.iter()
        .filter(|s| s.status == StepStatus::Completed)
        .count();
    let in_progress_count = all_steps.iter()
        .filter(|s| s.status == StepStatus::InProgress)
        .count();
    
    assert_eq!(completed_count, 6);
    assert_eq!(in_progress_count, products.len() * steps_per_product - completed_count);
}

#[test]
fn test_edge_cases() {
    // Setup environment
    let env = Env::default();
    let contract_id = env.register(ProductionStepContract, ());
    let client = ProductionStepContractClient::new(&env, &contract_id);
    
    // Test case: Empty product ID
    let step_id = String::from_str(&env, "EDGE_STEP1");
    let empty_product = String::from_str(&env, "");
    let start_time = 1000u64;
    let responsible = String::from_str(&env, "edge_tester");
    
    // Create step with empty product (should work)
    let step = client.create_step(&step_id, &empty_product, &start_time, &responsible);
    assert_eq!(step.product_id, empty_product);
    
    // Test case: Zero quantity resource
    let resource_id = String::from_str(&env, "ZERO_RES");
    client.add_resource(&step_id, &resource_id, &0u32);
    
    let resources = client.get_step_resources(&step_id);
    assert_eq!(resources.get(resource_id).unwrap(), 0u32);
    
    // Test case: Cancel and then try to complete
    let cancel_reason = String::from_str(&env, "Testing cancellation");
    let cancelled_step = client.cancel_step(&step_id, &cancel_reason);
    assert_eq!(cancelled_step.status, StepStatus::Cancelled);
    
    // Try to complete after cancellation (should work, but be aware of this in production)
    let quality = String::from_str(&env, "N/A");
    let obs = String::from_str(&env, "Completed after cancellation");
    let step_after_cancel = client.complete_step(
        &step_id,
        &2000u64,
        &quality,
        &obs
    );
    
    // Status should be Completed even though it was cancelled before
    assert_eq!(step_after_cancel.status, StepStatus::Completed);
    
    // Test non-existent product's steps
    let nonexistent = String::from_str(&env, "DOESNT_EXIST");
    let empty_steps = client.list_product_steps(&nonexistent);
    assert_eq!(empty_steps.len(), 0);
} 