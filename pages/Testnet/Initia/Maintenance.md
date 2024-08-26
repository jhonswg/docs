## Maintenance

### Get Validator information
```yaml
initiad status 2>&1 | jq .validator_info
```

### Get Sync information
```yaml
initiad status 2>&1 | jq .sync_info
```

### Get node peer
```yaml
echo $(initiad tendermint show-node-id)'@'$(curl -s ifconfig.me)':'$(cat $HOME/.initia/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

### Check validator keys
```yaml
[[ $(initiad q mstaking validator $(initiad keys show wallet --bech val -a) -oj | jq -r .consensus_pubkey.key) = $(initiad status | jq -r .validator_info.PubKey.value) ]] && echo -e "\n\e[1m\e[32mTrue\e[0m\n" || echo -e "\n\e[1m\e[31mFalse\e[0m\n"
```

### Get live peers
```yaml
curl -sS http://localhost:26657/net_info | jq -r '.result.peers[] | "\(.node_info.id)@\(.remote_ip):\(.node_info.listen_addr)"' | awk -F ':' '{print $1":"$(NF)}'
```

### Enable prometheus
```yaml
sed -i -e "s/prometheus = false/prometheus = true/" $HOME/.initia/config/config.toml
```

### Reset chain data
```yaml
initiad tendermint unsafe-reset-all --keep-addr-book --home $HOME/.initia --keep-addr-book
```

### Remove Node
```yaml
cd $HOME
sudo systemctl stop initiad
sudo systemctl disable initiad
sudo rm /etc/systemd/system/initiad.service
sudo systemctl daemon-reload
sudo rm -f $(which initiad)
sudo rm -rf $HOME/.initia
sudo rm -rf $HOME/initia
sudo rm -rf $HOME/go
```