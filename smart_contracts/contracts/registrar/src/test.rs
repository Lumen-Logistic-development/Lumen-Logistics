#![cfg(test)]
use super::*;
// use crate::RegistrarContractClient;
use soroban_sdk::testutils::Address as _;
use soroban_sdk::{Address, Env, String};
extern crate std;

#[cfg(test)]
mod test_setup {
    use super::*;

    pub fn setup_contract() -> (RegistrarContractClient<'static>, Address, Env) {
        let env = Env::default();
        let admin = Address::generate(&env);
        let contract_id = env.register(RegistrarContract, {});
        let client = RegistrarContractClient::new(&env, &contract_id);

        env.mock_all_auths();

        // Initialize the contract
        client.initialize(&admin);

        (client, admin, env)
    }
}

mod test_registrar {
    use super::*;

    #[test]
    #[should_panic(expected = "Error(Contract, #3)")]
    fn test_initialize() {
        let (client, admin, _env) = test_setup::setup_contract();

        // Check admin
        let admin_res = client.get_admin();
        assert_eq!(admin_res, admin.clone());

        // Check initial count
        assert_eq!(client.get_material_count(), 0);

        // Initialize
        client.initialize(&admin);
    }

    #[test]
    fn test_add_material() {
        let (client, _admin, env) = test_setup::setup_contract();

        let name = String::from_str(&env, "Steel");
        let supplier = Address::generate(&env);
        let batch = String::from_str(&env, "Batch001");
        let quantity = 1000u128;
        let certification = String::from_str(&env, "Cert123");

        let record_id = client.add_material(&name, &supplier, &batch, &quantity, &certification);

        assert_eq!(record_id, 0);

        // Check count
        assert_eq!(client.get_material_count(), 1);

        // Get the record and verify details
        let record = client.get_material(&record_id);

        assert_eq!(record.id, 0);
        assert_eq!(record.name, name);
        assert_eq!(record.supplier, supplier);
        assert_eq!(record.batch, batch);
        assert_eq!(record.quantity, quantity);
        assert_eq!(record.certification, certification);
    }

    #[test]
    fn test_update_material() {
        let (client, _admin, env) = test_setup::setup_contract();

        let name = String::from_str(&env, "Steel");
        let supplier = Address::generate(&env);
        let batch = String::from_str(&env, "Batch001");
        let quantity = 1000u128;
        let certification = String::from_str(&env, "Cert123");

        let record_id = client.add_material(&name, &supplier, &batch, &quantity, &certification);

        assert_eq!(record_id, 0);

        let new_name = Some(String::from_str(&env, "Copper Wire"));
        let new_quantity = Some(150u128);
        let new_cert = None;

        let updated_record = client.update_material(
            &record_id,
            &new_name,
            &None,
            &None,
            &new_quantity,
            &new_cert,
        );

        assert_eq!(updated_record.id, record_id);
        assert_eq!(updated_record.name, new_name.unwrap());
        assert_eq!(updated_record.quantity, new_quantity.unwrap());
        assert_eq!(updated_record.certification, certification);
    }

    #[test]
    fn test_list_materials() {
        let (client, _admin, env) = test_setup::setup_contract();

        let empty_list_res = client.list_materials(&0, &10);
        assert_eq!(empty_list_res.len(), 0);

        let n_records = 5;
        for i in 0..n_records {
            let name = String::from_str(&env, &std::format!("Material{}", i));
            let supplier = Address::generate(&env);
            let batch = String::from_str(&env, &std::format!("B{}", i));
            let quantity = 100u128 * (i as u128 + 1);
            let cert = String::from_str(&env, &std::format!("C{}", i));

            client.add_material(&name, &supplier, &batch, &quantity, &cert);
        }

        assert_eq!(client.get_material_count(), n_records as u64);

        let full_list = client.list_materials(&0, &10);
        assert_eq!(full_list.len(), n_records);

        assert_eq!(full_list.get(0).unwrap().id, 0);
    }
}
