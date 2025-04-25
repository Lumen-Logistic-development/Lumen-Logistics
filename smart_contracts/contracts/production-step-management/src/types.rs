use soroban_sdk::{contracttype, String, Vec};

#[derive(Clone, Debug, Eq, PartialEq)]
#[contracttype]
pub enum StepStatus {
    InProgress,
    Completed,
    Cancelled,
}

#[derive(Clone, Debug, Eq, PartialEq)]
#[contracttype]
pub struct Resource {
    pub resource_id: String,      // Resource ID
    pub quantity_used: u32,       // Quantity used
}

#[derive(Clone, Debug, Eq, PartialEq)]
#[contracttype]
pub struct ProductionStep {
    pub step_id: String,          // Unique step ID
    pub product_id: String,       // Associated product ID
    pub start_time: u64,          // Step start (timestamp)
    pub end_time: u64,            // Step end (timestamp)
    pub resources_used: Vec<Resource>, // Resources used
    pub responsible: String,      // Responsible Stellar account
    pub quality_results: String,  // Quality results
    pub observations: String,     // Additional observations
    pub status: StepStatus,       // Current status
} 