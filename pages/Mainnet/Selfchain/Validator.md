### Wallet configuration
* add wallet
```yaml
selfchaind keys add wallet
```
* recover wallet
```yaml
selfchaind keys add wallet --recover
```
* list wallet
```yaml
selfchaind keys list
```
* delete wallet
```yaml
selfchaind keys delete wallet
```
* check balances
```yaml
selfchaind q bank balances $(selfchaind keys show wallet -a)
```
### Validator Management
* create validator
```yaml
selfchaind tx staking create-validator \
--amount="1000000000uself" \
--pubkey=$(selfchaind tendermint show-validator) \
--moniker=Your Node Name \
--identity="" \
--website="" \
--details=details node validator \
--chain-id=self-1 \
--commission-rate="0.1" \
--commission-max-rate="0.15" \
--commission-max-change-rate="0.05" \
--min-self-delegation=1000000000 \
--broadcast-mode block \
--gas-adjustment=1.2 \
--gas-prices="0.5uself" \
--gas=auto \
--from=wallet
```
* edit validator
```yaml
selfchaind tx staking edit-validator \
--new-moniker="" \
--identity="" \
--chain-id=self-1 \
--gas-adjustment=1.2 \
--gas-prices="0.5uself" \
--gas=auto \
--from=wallet
```

* unjail validator
```yaml
selfchaind tx slashing unjail --from wallet --chain-id self-1 --gas-prices 0.5uself --gas-adjustment 1.2 --gas auto
```

* check jailed reason
```yaml
selfchaind query slashing signing-info $(selfchaind tendermint show-validator)
```