%lang starknet

from starkware.starknet.testing.contract import Starknet
from contracts.portfolio_tracker.portfolio_tracker import IPortfolioTracker

@external
def benchmark_single_update():
    let user = 1
    let asset = 100
    let amount = 500
    let start_gas = get_gas_left()
    IPortfolioTracker.update_portfolio(user, asset, amount)
    let end_gas = get_gas_left()
    let used_gas = start_gas - end_gas
    return (used_gas,)
end

@external
def benchmark_batch_update():
    let users = alloc()
    let assets = alloc()
    let amounts = alloc()
    users[0] = 1
    assets[0] = 100
    amounts[0] = 500
    users[1] = 2
    assets[1] = 200
    amounts[1] = 1000
    let start_gas = get_gas_left()
    IPortfolioTracker.batch_update_portfolio(users, assets, amounts, 2)
    let end_gas = get_gas_left()
    let used_gas = start_gas - end_gas
    return (used_gas,)
end 