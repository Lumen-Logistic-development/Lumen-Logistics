use soroban_sdk::{contracterror, contracttype, Address, String};

// Data Structures

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct MaterialRecord {
    pub id: u64, // Unique identifier for the record (using a counter)
    pub name: String,
    pub supplier: Address,
    pub batch: String,
    pub quantity: u128,
    pub entry_date: u64,
    pub certification: String,
}

#[contracterror]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum Error {
    Unauthorized = 1,
    NotFound = 2,
    AlreadyExists = 3,
    InvalidInput = 4,
    OperationFailed = 5,
}

// Helper enum for storage keys
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum DataKey {
    Admin,               // Admin address
    MaterialRecord(u64), // Stores a specific material record by its ID
    RecordCounter,       // Stores the next available ID for MaterialRecord
}
