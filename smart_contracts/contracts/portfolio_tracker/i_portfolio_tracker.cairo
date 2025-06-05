%lang starknet

@contract_interface
def IPortfolioTracker:
    func update_portfolio(user: felt, asset: felt, amount: felt) -> ()
    func batch_update_portfolio(users: felt*, assets: felt*, amounts: felt*, n: felt) -> ()
    func get_portfolio(user: felt, asset: felt) -> (amount: felt)
    func get_user_assets(user: felt) -> (assets: felt*)
end 