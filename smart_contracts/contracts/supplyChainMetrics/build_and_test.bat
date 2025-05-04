@echo off
echo Building and testing SupplyChainMetrics...

echo.
echo === Building the project ===
cargo build
if %ERRORLEVEL% NEQ 0 (
    echo Failed to build the project
    exit /b %ERRORLEVEL%
)

echo.
echo === Running standard tests ===
cargo test
if %ERRORLEVEL% NEQ 0 (
    echo Some tests failed
    exit /b %ERRORLEVEL%
)

echo.
echo === Build and test completed successfully! ===
echo.
echo To run ignored tests, use:
echo cargo test -- --ignored
echo.
echo To run a specific test, use:
echo cargo test test_name
echo.
echo To run with output, use:
echo cargo test -- --nocapture