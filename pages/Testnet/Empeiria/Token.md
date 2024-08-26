## Token management

### withdraw rewards
```yaml
emped tx distribution withdraw-all-rewards --from wallet --chain-id empe-testnet-2  --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y
```
### withdraw rewards with comission
```yaml
emped tx distribution withdraw-rewards $(emped keys show wallet --bech val -a) --commission --from wallet --chain-id empe-testnet-2  --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y
```
### delegate token to your own validator
```yaml
emped tx staking delegate $(emped keys show wallet --bech val -a) 1000000uempe --from wallet --chain-id empe-testnet-2  --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y
```