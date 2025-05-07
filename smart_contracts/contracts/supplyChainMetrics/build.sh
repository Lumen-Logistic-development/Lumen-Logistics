#!/bin/bash
set -e  # Exit on error

echo "Building SupplyChainMetrics..."

# Get the directory of the script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo
echo "=== Building the project ==="
cargo build

echo
echo "=== Build completed successfully! ==="
echo
echo "To run tests, use:"
echo "cargo test"
echo
echo "To run ignored tests, use:"
echo "cargo test -- --ignored"
echo
echo "To run a specific test, use:"
echo "cargo test test_name"