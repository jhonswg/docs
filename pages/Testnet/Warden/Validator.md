## Wallet Management

* Add Wallet Specify the value $Wallet with your own wallet name
```yaml
wardend keys add wallet
```

* Recover Wallet
```yaml
wardend keys add wallet --recover
```

* List Wallet
```yaml
wardend keys list
```

* Delete Wallet
```yaml
wardend keys delete wallet
```

*Check Wallet Balance
```yaml
wardend q bank balances $(wardend keys show wallet -a)
```
## Validator Management

* Create Validator
```yaml
wardend tx staking create-validator \
--amount 1000000uward \
--pubkey $(wardend tendermint show-validator) \
--moniker "your-moniker-name" \
--identity "your-keybase-id" \
--details "your-details" \
--website "your-website" \
--security-contact "your-email" \
--chain-id buenavista-1 \
--commission-rate 0.05 \
--commission-max-rate 0.20 \
--commission-max-change-rate 0.01 \
--min-self-delegation 1 \
--from wallet \
--gas-adjustment 1.4 \
--gas auto \
--gas-prices 0.025uward \
-y
```
* Edit Validator
```yaml
wardend tx staking edit-validator \
--new-moniker "your-moniker-name" \
--identity "your-keybase-id" \
--details "your-details" \
--website "your-website" \
--security-contact "your-email" \
--chain-id buenavista-1 \
--commission-rate 0.05 \
--from wallet \
--gas-adjustment 1.4 \
--gas auto \
--gas-prices 0.025uward \
-y
```
* Unjail Validator
```yaml
wardend tx slashing unjail --from Wallet_name --chain-id buenavista-1 --fees 1000uward -y
```
* Check Jailed Reason
```yaml
wardend query slashing signing-info $(wardend tendermint show-validator)
```
## Token Management

*Withdraw Rewards
```yaml
wardend tx distribution withdraw-all-rewards --from Wallet_Name --chain-id buenavista-1 --fees 1000uward -y
```
* Withdraw Rewards with Comission
```yaml
wardend tx distribution withdraw-rewards $(wardend keys show wallet --bech val -a) --commission --from wallet --chain-id buenavista-1  --fees 1000uward -y
```
* Delegate Token to your own validator
```yaml
wardend tx staking delegate $(wardend keys show wallet --bech val -a) 1000000uward --from wallet --chain-id buenavista-1 --fees 1000uward -y
```
* Delegate Token to other validator
```yaml
wardend staking redelegate $(wardend keys show wallet --bech val -a) <TO_VALOPER_ADDRESS> 1000000uward --from wallet --chain-id buenavista-1 --fees 1000uward -y
```
* Unbond Token from your validator
```yaml
wardend tx staking unbond $(wardend keys show wallet --bech val -a) 1000000uward --from wallet ---chain-id buenavista-1  --fees 1000uward -y
```
* Send Token to another wallet
```yaml
wardend tx bank send wallet <TO_WALLET_ADDRESS> 1000000uward --from wallet --chain-id buenavista-1 --fees 1000uward
```

## Other
*Set Your own Custom Ports You can change value CUSTOM_PORT=20 To any other ports
```yaml
PORT=51
wardend config node tcp://localhost:${PORT}657
sed -i -e "s%^proxy_app = \"tcp://127.0.0.1:26658\"%proxy_app = \"tcp://127.0.0.1:${PORT}658\"%; s%^laddr = \"tcp://127.0.0.1:26657\"%laddr = \"tcp://127.0.0.1:${PORT}657\"%; s%^pprof_laddr = \"localhost:6060\"%pprof_laddr = \"localhost:${PORT}060\"%; s%^laddr = \"tcp://0.0.0.0:26656\"%laddr = \"tcp://0.0.0.0:${PORT}656\"%; s%^prometheus_listen_addr = \":26660\"%prometheus_listen_addr = \":${PORT}660\"%" $HOME/.selfchain/config/config.toml
sed -i -e "s%^address = \"tcp://localhost:1317\"%address = \"tcp://localhost:${PORT}317\"%; s%^address = \":8080\"%address = \":${PORT}080\"%; s%^address = \"0.0.0.0:9090\"%address = \"0.0.0.0:${PORT}090\"%; s%^address = \"0.0.0.0:9091\"%address = \"0.0.0.0:${PORT}091\"%; s%^address = \"0.0.0.0:8545\"%address = \"0.0.0.0:${PORT}545\"%; s%^ws-address = \"0.0.0.0:8546\"%ws-address = \"0.0.0.0:${PORT}546\"%" $HOME/.selfchain/config/app.toml
```
* Enable Indexing usually enabled by default
```yaml
sed -i 's|^indexer *=.*|indexer = "kv"|' $HOME/.warden/config/config.toml
```
*Disable Indexing
```yaml
sed -i 's|^indexer *=.*|indexer = "null"|' $HOME/.warden/config/config.toml
```
*Reset Chain Data
```yaml
wardend tendermint unsafe-reset-all --home $HOME/.warden --keep-addr-book
```
## Delete Node
WARNING! Use this command wisely Backup your key first it will remove Defund from your system
```yaml
sudo systemctl stop wardend
sudo systemctl disable wardend
sudo rm /etc/systemd/system/wardend.service
sudo systemctl daemon-reload
rm -f $(which wardend)
rm -rf .warden
rm -rf wardenprotol
```