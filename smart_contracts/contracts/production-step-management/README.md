# Production Step Management Smart Contract

A Soroban smart contract designed for managing production steps in manufacturing workflows. This contract enables tracking of the entire production lifecycle, from creating production steps to managing resources, and completing or canceling steps.

## Features

- **Production Step Tracking**: Create, complete, and cancel production steps for different products
- **Resource Management**: Add and track resources used in each production step
- **Workflow Management**: Track the status of steps (In Progress, Completed, Cancelled)
- **Production Insights**: List all steps or filter by product for analysis
- **Quality Control**: Record quality results and observations when completing steps

## Data Model

### Production Step
Each production step contains:
- `step_id`: Unique identifier for the step
- `product_id`: Product being manufactured
- `start_time`: Timestamp when the step was started
- `end_time`: Timestamp when the step was completed (if applicable)
- `responsible`: Account responsible for the step
- `status`: Current status (InProgress, Completed, or Cancelled)
- `resources_used`: List of resources used in the step
- `quality_results`: Quality control results (when completed)
- `observations`: Notes or observations about the step

### Resource
Each resource contains:
- `resource_id`: Unique identifier for the resource
- `quantity_used`: Amount of the resource used

## Contract Functions

### Core Functions

- **create_step**: Create a new production step for a product
  ```rust
  fn create_step(step_id: &String, product_id: &String, start_time: &u64, responsible: &String) -> Step
  ```

- **complete_step**: Mark a production step as completed
  ```rust
  fn complete_step(step_id: &String, end_time: &u64, quality_results: &String, observations: &String) -> Step
  ```

- **cancel_step**: Cancel a production step
  ```rust
  fn cancel_step(step_id: &String, reason: &String) -> Step
  ```

- **add_resource**: Add a resource to a production step
  ```rust
  fn add_resource(step_id: &String, resource_id: &String, quantity: &u32) -> Step
  ```

### Query Functions

- **get_step**: Get details of a specific step
  ```rust
  fn get_step(step_id: &String) -> Step
  ```

- **list_all_steps**: List all production steps
  ```rust
  fn list_all_steps() -> Vec<Step>
  ```

- **list_product_steps**: List all steps for a specific product
  ```rust
  fn list_product_steps(product_id: &String) -> Vec<Step>
  ```

- **get_step_resources**: Get a map of resources used in a step
  ```rust
  fn get_step_resources(step_id: &String) -> Map<String, u32>
  ```

## Usage Examples

### Creating a Production Step

```rust
// Create a new production step
let step_id = String::from_str(&env, "STEP001");
let product_id = String::from_str(&env, "CHAIR_A");
let start_time = 1000u64;
let responsible = String::from_str(&env, "production_manager");

client.create_step(&step_id, &product_id, &start_time, &responsible);
```

### Adding Resources to a Step

```rust
// Add wood material to the step
let wood_id = String::from_str(&env, "WOOD_MATERIAL");
let quantity = 5u32;
client.add_resource(&step_id, &wood_id, &quantity);

// Add another resource
let screws_id = String::from_str(&env, "SCREWS");
client.add_resource(&step_id, &screws_id, &20u32);
```

### Completing a Step

```rust
// Complete the production step
let end_time = 2500u64;
let quality = String::from_str(&env, "95% pass rate");
let notes = String::from_str(&env, "Completed with minor adjustments");

client.complete_step(&step_id, &end_time, &quality, &notes);
```

### Querying Production Data

```rust
// Get all steps for a specific product
let product_id = String::from_str(&env, "CHAIR_A");
let chair_steps = client.list_product_steps(&product_id);

// Get all resources used in a specific step
let resources = client.get_step_resources(&step_id);
```

## Development

### Prerequisites

- [Rust](https://www.rust-lang.org/tools/install)
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/setup)

### Building the Contract

```bash
cd production-step-management
cargo build --target wasm32-unknown-unknown --release
```

### Testing

Run the tests using:

```bash
cargo test
```

## Deployment

1. Build the contract:
   ```bash
   cargo build --target wasm32-unknown-unknown --release
   ```

2. Deploy using Soroban CLI:
   ```bash
   soroban contract deploy \
     --wasm target/wasm32-unknown-unknown/release/production_step_management.wasm \
     --source ADMIN_ACCOUNT \
     --network testnet
   ```

---