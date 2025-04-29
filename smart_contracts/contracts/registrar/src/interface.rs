use soroban_sdk::{Address, Env, String, Vec};

use crate::types::{Error, MaterialRecord};

// Define the contract interface (standard Rust trait)
pub trait RegistrarTrait {
    // Initializes the contract with an admin address. Panics if already initialized.
    fn initialize(env: Env, admin: Address);

    // Adds a new raw material record. Only callable by the admin.
    // Returns the ID of the newly created record.
    fn add_material(
        env: Env,
        name: String,
        supplier: Address,
        batch: String,
        quantity: u128,
        certification: String,
    ) -> Result<u64, Error>;

    // Updates an existing raw material record. Only callable by the admin.
    // Fields are optional; only provided fields will be updated.
    fn update_material(
        env: Env,
        id: u64,
        name: Option<String>,
        supplier: Option<Address>,
        batch: Option<String>,
        quantity: Option<u128>,
        certification: Option<String>,
    ) -> Result<MaterialRecord, Error>;

    // Retrieves a raw material record by its ID.
    fn get_material(env: Env, id: u64) -> Result<MaterialRecord, Error>;

    // Retrieves the admin address.
    fn get_admin(env: Env) -> Result<Address, Error>;

    // NEW: Retrieves the total count of registered material records.
    fn get_material_count(env: Env) -> u64;

    // NEW: Retrieves a paginated list of material records.
    fn list_materials(env: Env, skip: u32, take: u32) -> Result<Vec<MaterialRecord>, Error>;
}
