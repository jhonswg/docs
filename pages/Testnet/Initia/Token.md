## Token

### Withdraw all validator
```yaml
initiad tx distribution withdraw-all-rewards --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Withdraw reward and commision
```yaml
initiad tx distribution withdraw-rewards $(initiad keys show wallet --bech val -a) --commission --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Delegate token to your validator
```yaml
initiad tx mstaking delegate $(initiad keys show wallet --bech val -a) 1000000uinit --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Delegate token to other validator, change <to-valoper-address> 
```yaml
initiad tx mstaking delegate <to-valoper-address> 1000000uinit --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Redelegate to other validator
```yaml
initiad tx mstaking redelegate $(initiad keys show wallet --bech val -a) <to-valoper-address> 1000000uinit --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Unbond token from your own validator
```yaml
initiad tx mstaking unbond $(initiad keys show wallet --bech val -a) 1000000uinit --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Send token to wallet
```yaml
initiad tx bank send wallet <to-wallet-address> 1000000uinit --from wallet --chain-id $CHAIN
```