@echo off
echo Building SupplyChainMetrics...

cd %~dp0

echo.
echo === Building the project ===
cargo build
if %ERRORLEVEL% NEQ 0 (
    echo Failed to build the project
    exit /b %ERRORLEVEL%
)

echo.
echo === Build completed successfully! ===
echo.
echo To run tests, use:
echo cargo test
echo.
echo To run ignored tests, use:
echo cargo test -- --ignored
echo.
echo To run a specific test, use:
echo cargo test test_name