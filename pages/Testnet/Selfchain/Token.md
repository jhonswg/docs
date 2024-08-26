### Token management

* withdraw rewards
```yaml
selfchaind tx distribution withdraw-all-rewards --from wallet --chain-id self-1  --gas-adjustment 1.2 --gas-prices 0.05uself --gas auto -y
```
* withdraw rewards with comission
```yaml
selfchaind tx distribution withdraw-rewards $(selfchaind keys show wallet --bech val -a) --commission --from wallet --chain-id self-1  --gas-adjustment 1.2 --gas-prices 0.05uself --gas auto -y
```
* delegate token to your own validator
```yaml
selfchaind tx staking delegate $(selfchaind keys show wallet --bech val -a) 1000000uself --from wallet --chain-id self-1  --gas-adjustment 1.2 --gas-prices 0.05uself --gas auto -y
```
### Node Info
* node id
```yaml
selfchaind status 2>&1 | jq .NodeInfo
```
* validator info
```yaml
selfchaind status 2>&1 | jq .ValidatorInfo
```
