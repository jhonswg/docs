## Manage Validator

### Wallet
* Create Wallet
```yaml
symphonyd keys add wallet
```
* Cek Balances
```yaml
symphonyd q bank balances $(symphonyd keys show wallet -a)
```
### Create Validator
```yaml
symphonyd tx staking create-validator \
--amount=1000000note \
--moniker="$MONIKER" \
--identity="" \
--details="" \
--website="" \
--from $WALLET \
--commission-rate 0.05 \
--commission-max-rate 0.2 \
--commission-max-change-rate 0.05 \
--min-self-delegation 1 \
--pubkey $(symphonyd tendermint show-validator) \
--chain-id symphony-testnet-3 \
--fees=800note \
-y
```

### Edit Validator
```yaml
symphonyd tx staking edit-validator \
--new-moniker="" \
--identity="" \
--details="" \
--website="" \
--chain-id=symphony-testnet-2 \
--from=wallet \
--fees=800note \
-y
```

* Unjail Validator
```yaml
symphonyd  tx slashing unjail --from wallet --chain-id symphony-testnet-3 --fees=800note -y
```
* Delegate
```yaml
symphonyd tx staking delegate $(symphonyd keys show wallet --bech val -a) 1000000note --from wallet --chain-id symphony-testnet-3 --fees 800note -y
```
* Withdraw commision and Reward
```yaml
symphonyd tx distribution withdraw-rewards $(symphonyd keys show wallet --bech val -a) --commission --from wallet --chain-id symphony-testnet-3 --fees 800note -y
```
* Transfer
```yaml
symphonyd tx bank send wallet <TO_WALLET_ADDRESS> 1000000note --from wallet --chain-id symphony-testnet-3 --fees 800note -y
```

* Check Connected Peer
```yaml
curl -sS http://localhost:21657/net_info | jq -r '.result.peers[] | "\(.node_info.id)@\(.remote_ip):\(.node_info.listen_addr)"' | awk -F ':' '{print $1":"$(NF)}'
```
### Validator Info
```yaml
symphonyd status 2>&1 | jq .ValidatorInfo
```

### Node Info
```yaml
symphonyd status 2>&1 | jq .NodeInfo
```
### Sync Info
```yaml
symphonyd status 2>&1 | jq. SyncInfo