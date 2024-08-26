## Manage Validator

## Create Validator

### Generate new keys
```yaml
initiad keys add wallet
```

### Recover keys
```yaml
initiad keys add wallet --recover
```

### List all key
```yaml
initiad keys list
```

### Delete key
```yaml
initiad keys delete wallet
```

### Export key
```yaml
initiad keys export wallet
```

### Import key
```yaml
initiad keys import wallet wallet.backup
```

### Query wallet balance
```yaml
initiad q bank balances $(initiad keys show wallet -a)
```

### Create Validator
```yaml
initiad tx mstaking create-validator \
  --amount=10000000uinit \  --pubkey=$(initiad tendermint show-validator) \
  --moniker=$MONIKER \
  --chain-id=$CHAIN_ID \
  --identity="keybase-id" \
  --website="website-link" \
  --details="info-detail" \
  --security-contact="email-address" \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --from=$WALLET_NAME \
  --gas=auto \
  --gas-adjustment=1.4 \
  --gas-prices 0.15uinit \
  -y
```

### Edit Validator
```yaml
initiad tx mstaking edit-validator \
--new-moniker "your-new-moniker" \--identity "keybase-id" \
--details "detailed-info" \
--website "website-link" \
--security-contact "email-address" \
--chain-id $CHAIN_ID \
--commission-rate 0.10 \
--from wallet \
--gas auto \
--gas-adjustment 1.4 \
--gas-prices 0.15uinit \
-y
```

### Unjail Validator
```yaml
initiad tx slashing unjail --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Validator jail reason
```yaml
initiad q slashing signing-info $(initiad tendermint show-validator)
```

### View Validator Details 
```yaml
initiad q mstaking validator $(initiad keys show wallet --bech val -a)
```


## Governance

### Query list proposal
```yaml
initiad query gov proposals
```
### View proposal by ID
```yaml
initiad query gov proposal 1
```

### Vote option Yes
```yaml
initiad tx gov vote 1 yes --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Vote option No
```yaml
initiad tx gov vote 1 no --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Vote option abstain
```yaml
initiad tx gov vote 1 abstain --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```

### Vote option No with Veto
```yaml
initiad tx gov vote 1 NoWithVeto --from wallet --chain-id $CHAIN_ID --gas-adjustment 1.4 --gas auto --gas-prices 0.15uinit -y
```
