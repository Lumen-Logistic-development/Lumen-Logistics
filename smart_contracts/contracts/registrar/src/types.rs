use soroban_sdk::{contracterror, contracttype, Address, String};

// Data Structures

/// Represents a single record for a raw material batch.
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct MaterialRecord {
    /// Unique identifier for the record, assigned sequentially.
    pub id: u64,
    /// Name of the raw material.
    pub name: String,
    /// Address of the supplier.
    pub supplier: Address,
    /// Batch identifier for the material.
    pub batch: String,
    /// Quantity of the material in this batch.
    pub quantity: u128,
    /// Timestamp (Unix epoch) when the record was added.
    pub entry_date: u64,
    /// Certification details or identifier associated with the batch.
    pub certification: String,
}

/// Defines the possible errors that the registrar contract can return.
#[contracterror]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum Error {
    /// The caller is not authorized to perform the operation (e.g., not the admin).
    Unauthorized = 1,
    /// The requested resource (e.g., MaterialRecord) was not found.
    NotFound = 2,
    /// An attempt was made to create a resource that already exists (e.g., initializing the contract twice).
    AlreadyExists = 3,
    /// Input provided by the caller is invalid (e.g., empty string, zero quantity).
    InvalidInput = 4,
    /// A general failure occurred during the operation.
    OperationFailed = 5,
}

/// Defines the keys used for storing data in the contract's storage.
/// Using an enum helps prevent key collisions and improves readability.
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum DataKey {
    /// Key for storing the admin address.
    Admin,
    /// Key for storing a specific `MaterialRecord`, parameterized by its unique ID.
    MaterialRecord(u64),
    /// Key for storing the counter used to generate unique IDs for `MaterialRecord`s.
    RecordCounter,
}
