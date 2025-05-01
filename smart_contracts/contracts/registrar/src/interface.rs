use soroban_sdk::{Address, Env, String, Vec};

use crate::types::{Error, MaterialRecord};

/// Trait defining the interface for the Registrar contract.
///
/// This trait outlines the public functions that can be called on the registrar contract,
/// covering initialization, material record management (add, update, get, list), and administrative functions.
pub trait RegistrarTrait {
    /// Initializes the contract with the specified admin address.
    ///
    /// This function should only be called once. Subsequent calls will likely panic.
    ///
    /// # Arguments
    ///
    /// * `env` - The Soroban environment.
    /// * `admin` - The address to be designated as the contract administrator.
    fn initialize(env: Env, admin: Address);

    /// Adds a new raw material record.
    ///
    /// Requires admin authorization.
    ///
    /// # Arguments
    ///
    /// * `env` - The Soroban environment.
    /// * `name` - Name of the material.
    /// * `supplier` - Supplier's address.
    /// * `batch` - Batch identifier.
    /// * `quantity` - Quantity of the material.
    /// * `certification` - Certification information.
    ///
    /// # Returns
    ///
    /// Returns `Ok(u64)` with the unique ID of the newly created record, or an `Error` variant.
    fn add_material(
        env: Env,
        name: String,
        supplier: Address,
        batch: String,
        quantity: u128,
        certification: String,
    ) -> Result<u64, Error>;

    /// Updates an existing raw material record identified by its ID.
    ///
    /// Requires admin authorization. Only provided fields (`Some(...)`) are updated.
    ///
    /// # Arguments
    ///
    /// * `env` - The Soroban environment.
    /// * `id` - The ID of the record to update.
    /// * `name` - Optional new name.
    /// * `supplier` - Optional new supplier address.
    /// * `batch` - Optional new batch identifier.
    /// * `quantity` - Optional new quantity.
    /// * `certification` - Optional new certification information.
    ///
    /// # Returns
    ///
    /// Returns `Ok(MaterialRecord)` with the updated record, or an `Error` variant.
    fn update_material(
        env: Env,
        id: u64,
        name: Option<String>,
        supplier: Option<Address>,
        batch: Option<String>,
        quantity: Option<u128>,
        certification: Option<String>,
    ) -> Result<MaterialRecord, Error>;

    /// Retrieves a raw material record by its unique ID.
    ///
    /// # Arguments
    ///
    /// * `env` - The Soroban environment.
    /// * `id` - The ID of the record to retrieve.
    ///
    /// # Returns
    ///
    /// Returns `Ok(MaterialRecord)` with the found record, or `Err(Error::NotFound)`.
    fn get_material(env: Env, id: u64) -> Result<MaterialRecord, Error>;

    /// Retrieves the address of the contract administrator.
    ///
    /// # Arguments
    ///
    /// * `env` - The Soroban environment.
    ///
    /// # Returns
    ///
    /// Returns `Ok(Address)` with the admin address, or `Err(Error::NotFound)` if not initialized.
    fn get_admin(env: Env) -> Result<Address, Error>;

    /// Retrieves the total count of registered material records.
    ///
    /// # Arguments
    ///
    /// * `env` - The Soroban environment.
    ///
    /// # Returns
    ///
    /// Returns the total number of records (`u64`).
    fn get_material_count(env: Env) -> u64;

    /// Retrieves a paginated list of material records.
    ///
    /// Records are fetched based on their sequential IDs.
    ///
    /// # Arguments
    ///
    /// * `env` - The Soroban environment.
    /// * `skip` - The number of initial records to skip.
    /// * `take` - The maximum number of records to return.
    ///
    /// # Returns
    ///
    /// Returns `Ok(Vec<MaterialRecord>)` containing the list of records, or an `Error` variant.
    fn list_materials(env: Env, skip: u32, take: u32) -> Result<Vec<MaterialRecord>, Error>;
}
