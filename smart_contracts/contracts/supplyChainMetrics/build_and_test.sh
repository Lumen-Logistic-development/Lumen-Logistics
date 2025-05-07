#!/bin/bash
set -e  # Exit on error

echo "Building and testing SupplyChainMetrics..."

echo
echo "=== Building the project ==="
cargo build

echo
echo "=== Running standard tests ==="
cargo test

echo
echo "=== Build and test completed successfully! ==="
echo
echo "To run ignored tests, use:"
echo "cargo test -- --ignored"
echo
echo "To run a specific test, use:"
echo "cargo test test_name"
echo
echo "To run with output, use:"
echo "cargo test -- --nocapture"