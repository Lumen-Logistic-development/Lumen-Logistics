#![no_std]
use soroban_sdk::{contract, contractimpl, panic_with_error, vec, Address, Env, String, Vec};

// Import types and errors
mod interface;
mod types;
use crate::interface::RegistrarTrait;
use crate::types::{DataKey, Error, MaterialRecord};

// Define the contract struct
#[contract]
pub struct RegistrarContract;

// Define the contract implementation
#[contractimpl]
impl RegistrarTrait for RegistrarContract {
    // Initializes the contract, setting the admin. Can only be called once.
    fn initialize(env: Env, admin: Address) {
        if env.storage().instance().has(&DataKey::Admin) {
            panic_with_error!(&env, Error::AlreadyExists);
        }
        env.storage().instance().set(&DataKey::Admin, &admin);
        env.storage().instance().set(&DataKey::RecordCounter, &0u64);
    }

    // Retrieves the admin address.
    fn get_admin(env: Env) -> Result<Address, Error> {
        env.storage()
            .instance()
            .get(&DataKey::Admin)
            .ok_or(Error::NotFound)
    }

    // Adds a new raw material record.
    fn add_material(
        env: Env,
        name: String,
        supplier: Address,
        batch: String,
        quantity: u128,
        certification: String,
    ) -> Result<u64, Error> {
        // Authorization: Only admin can add materials
        let admin = Self::get_admin(env.clone())?;
        admin.require_auth();

        // Get the next ID
        let counter_key = DataKey::RecordCounter;
        let mut counter: u64 = env.storage().instance().get(&counter_key).unwrap_or(0); // Default to 0 if not set
        let id = counter;

        // Basic validation
        if name.len() == 0 || batch.len() == 0 || quantity == 0 {
            return Err(Error::InvalidInput);
        }

        let entry_date = env.ledger().timestamp();

        let record = MaterialRecord {
            id,
            name,
            supplier,
            batch,
            quantity,
            entry_date,
            certification,
        };

        // Store the record
        env.storage()
            .instance()
            .set(&DataKey::MaterialRecord(id), &record);

        // Increment and store the counter
        counter += 1;
        env.storage().instance().set(&counter_key, &counter);

        Ok(id)
    }

    // Updates an existing raw material record.
    fn update_material(
        env: Env,
        id: u64,
        name: Option<String>,
        supplier: Option<Address>,
        batch: Option<String>,
        quantity: Option<u128>,
        certification: Option<String>,
    ) -> Result<MaterialRecord, Error> {
        // Authorization: Only admin can update materials
        let admin = Self::get_admin(env.clone())?;
        admin.require_auth();

        // Retrieve the existing record
        let data_key = DataKey::MaterialRecord(id);
        let mut record: MaterialRecord = env
            .storage()
            .instance()
            .get(&data_key)
            .ok_or(Error::NotFound)?; // Return NotFound if record doesn't exist

        // Update fields if provided, including validation
        if let Some(n) = name {
            if n.len() == 0 {
                return Err(Error::InvalidInput);
            }
            record.name = n;
        }
        if let Some(s) = supplier {
            // Potentially add validation for the address if needed
            record.supplier = s;
        }
        if let Some(b) = batch {
            if b.len() == 0 {
                return Err(Error::InvalidInput);
            }
            record.batch = b;
        }
        if let Some(q) = quantity {
            if q == 0 {
                return Err(Error::InvalidInput);
            } // Quantity cannot be updated to zero, maybe allow deletion separately?
            record.quantity = q;
        }
        if let Some(c) = certification {
            // Potentially add validation for certification format/length
            record.certification = c;
        }

        // Store the updated record
        env.storage().instance().set(&data_key, &record);

        Ok(record)
    }

    // Retrieves a raw material record by its ID.
    fn get_material(env: Env, id: u64) -> Result<MaterialRecord, Error> {
        let data_key = DataKey::MaterialRecord(id);
        env.storage()
            .instance()
            .get(&data_key)
            .ok_or(Error::NotFound)
    }

    // NEW: Implementation for retrieving the total count.
    fn get_material_count(env: Env) -> u64 {
        env.storage()
            .instance()
            .get(&DataKey::RecordCounter)
            .unwrap_or(0)
    }

    // NEW: Implementation for retrieving a paginated list.
    fn list_materials(env: Env, skip: u32, take: u32) -> Result<Vec<MaterialRecord>, Error> {
        let count = Self::get_material_count(env.clone());
        let mut records = vec![&env];

        // Determine the range of IDs to fetch
        // Using u64 for IDs and range calculations to avoid potential overflow with u32 if count is large
        let start_id = (skip as u64).min(count);
        let end_id = (start_id + (take as u64)).min(count); // Exclusive end

        for id in start_id..end_id {
            let key = DataKey::MaterialRecord(id);
            // Attempt to get the record. If a record within the sequence is missing
            // (which shouldn't happen with the current logic but is defensive),
            // we skip it. Alternatively, could return Error::NotFound.
            if let Some(record) = env.storage().instance().get(&key) {
                records.push_back(record);
            }
        }

        Ok(records)
    }
}

mod test;
