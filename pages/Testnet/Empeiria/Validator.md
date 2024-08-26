### Validator Management
* add wallet
```yaml
emped keys add wallet
```
* recover wallet
```yaml
emped keys add wallet --recover
```
* list wallet
```yaml
emped keys list
```
* delete wallet
```yaml
emped keys delete wallet
```
* check balances
```yaml
emped q bank balances $(emped keys show wallet -a)
```

### Create Validator
```yaml
emped tx staking create-validator \
--amount="1000000000uempe" \
--pubkey=$(emped tendermint show-validator) \
--moniker=NodeName \
--identity="" \
--website="your website" \
--details=details node validator \
--chain-id=empe-testnet-2 \
--commission-rate="0.1" \
--commission-max-rate="0.15" \
--commission-max-change-rate="0.05" \
--min-self-delegation=1000000 \
--gas-adjustment=1.2 \
--gas-prices="0.5uempe" \
--gas=auto \
--from=wallet
```
### Edit validator
```yaml
emped tx staking edit-validator \
--new-moniker="" \
--identity="" \
--chain-id=empe-testnet-2 \
--gas-adjustment=1.2 \
--gas-prices="0.5uempe" \
--gas=auto \
--from=wallet
```
* unjail validator
```yaml
emped tx slashing unjail --from wallet --chain-id empe-testnet-2 --gas-prices 0.5uempe --gas-adjustment 1.2 --gas auto
```
* check jailed reason
```yaml
emped query slashing signing-info $(emped tendermint show-validator)
```

### Node Info
* node id
```yaml
emped status 2>&1 | jq .NodeInfo
```
* validator info
```yaml
emped status 2>&1 | jq .ValidatorInfo
```