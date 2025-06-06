%lang starknet

@contract_interface
def IPortfolioTracker:
    func update_portfolio(user: felt, asset: felt, amount: felt) -> ()
    func batch_update_portfolio(users: felt*, assets: felt*, amounts: felt*, n: felt) -> ()
    func get_portfolio(user: felt, asset: felt) -> (amount: felt)
    func get_user_assets(user: felt) -> (assets: felt*)
end

@storage_var
def portfolio(user: felt, asset: felt) -> felt:
end

@storage_var
def user_assets(user: felt) -> (assets_len: felt, assets: felt*)
end

@external
def update_portfolio(user: felt, asset: felt, amount: felt):
    portfolio.write(user, asset, amount)
    # Add asset to user_assets if not present
    let (assets_len, assets) = user_assets.read(user)
    let mut found = 0
    let mut i = 0
    while i < assets_len:
        if assets[i] == asset:
            found = 1
        i = i + 1
    end
    if found == 0:
        let mut new_assets = alloc()
        let mut j = 0
        while j < assets_len:
            new_assets[j] = assets[j]
            j = j + 1
        end
        new_assets[assets_len] = asset
        user_assets.write(user, assets_len + 1, new_assets)
    end
    return ()
end

@external
def batch_update_portfolio(users: felt*, assets: felt*, amounts: felt*, n: felt):
    let mut i = 0
    while i < n:
        update_portfolio(users[i], assets[i], amounts[i])
        i = i + 1
    end
    return ()
end

@view
def get_portfolio(user: felt, asset: felt) -> (amount: felt):
    let amount = portfolio.read(user, asset)
    return (amount,)
end

@view
def get_user_assets(user: felt) -> (assets: felt*):
    let (assets_len, assets) = user_assets.read(user)
    return (assets,)
end 