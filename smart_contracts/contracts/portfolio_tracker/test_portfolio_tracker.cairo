%lang starknet

from starkware.starknet.testing.contract import Starknet
from starkware.starknet.testing.objects import StarknetContract
from starkware.cairo.common.alloc import alloc
from contracts.portfolio_tracker.portfolio_tracker import IPortfolioTracker

@external
def test_update_and_get_portfolio():
    let user = 1
    let asset = 100
    let amount = 500
    IPortfolioTracker.update_portfolio(user, asset, amount)
    let (amt,) = IPortfolioTracker.get_portfolio(user, asset)
    assert amt == amount
    return ()
end

@external
def test_batch_update_and_get():
    let users = alloc()
    let assets = alloc()
    let amounts = alloc()
    users[0] = 1
    assets[0] = 100
    amounts[0] = 500
    users[1] = 2
    assets[1] = 200
    amounts[1] = 1000
    IPortfolioTracker.batch_update_portfolio(users, assets, amounts, 2)
    let (amt1,) = IPortfolioTracker.get_portfolio(1, 100)
    let (amt2,) = IPortfolioTracker.get_portfolio(2, 200)
    assert amt1 == 500
    assert amt2 == 1000
    return ()
end

@external
def test_get_user_assets():
    let user = 1
    let asset1 = 100
    let asset2 = 200
    IPortfolioTracker.update_portfolio(user, asset1, 500)
    IPortfolioTracker.update_portfolio(user, asset2, 1000)
    let (assets,) = IPortfolioTracker.get_user_assets(user)
    assert assets[0] == asset1
    assert assets[1] == asset2
    return ()
end 