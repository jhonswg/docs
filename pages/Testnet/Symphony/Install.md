# Symphony Instalation 

### Install prequirement
```yaml
sudo apt update && sudo apt upgrade -y
sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential bsdmainutils git make ncdu gcc git jq chrony liblz4-tool -y
```

### Binary
```yaml
cd $HOME
git clone https://github.com/Orchestra-Labs/symphony
cd symphony
git checkout v0.3.0
make install
```
### Config Node

* Init
```yaml
symphonyd init $MONIKER --chain-id symphony-testnet-3
symphonyd config chain-id symphony-testnet-3
symphonyd config keyring-backend test
```
* Custom Port (Optional)
PORT=21
```yaml
symphonyd config node tcp://localhost:${PORT}657
```
```yaml
sed -i -e "s%^proxy_app = \"tcp://127.0.0.1:26658\"%proxy_app = \"tcp://127.0.0.1:${PORT}658\"%; s%^laddr = \"tcp://127.0.0.1:26657\"%laddr = \"tcp://127.0.0.1:${PORT}657\"%; s%^pprof_laddr = \"localhost:6060\"%pprof_laddr = \"localhost:${PORT}060\"%; s%^laddr = \"tcp://0.0.0.0:26656\"%laddr = \"tcp://0.0.0.0:${PORT}656\"%; s%^prometheus_listen_addr = \":26660\"%prometheus_listen_addr = \":${PORT}660\"%" $HOME/.symphonyd/config/config.toml
sed -i -e "s%^address = \"tcp://localhost:1317\"%address = \"tcp://localhost:${PORT}317\"%; s%^address = \":8080\"%address = \":${PORT}080\"%; s%^address = \"localhost:9090\"%address = \"localhost:${PORT}090\"%; s%^address = \"localhost:9091\"%address = \"localhost:${PORT}091\"%; s%^address = \"0.0.0.0:8545\"%address = \"0.0.0.0:${PORT}545\"%; s%^ws-address = \"0.0.0.0:8546\"%ws-address = \"0.0.0.0:${PORT}546\"%" $HOME/.symphonyd/config/app.toml
```
* Genesis
```yaml
wget -O $HOME/.symphonyd/config/genesis.json https://raw.githubusercontent.com/Orchestra-Labs/symphony/main/networks/symphony-testnet-3/genesis.json
```
* Addrbook
```yaml
wget -O $HOME/.symphonyd/config/addrbook.json https://raw.githubusercontent.com/vinjan23/Testnet.Guide/main/Symphony/addrbook.json
```
* Peer & Gas
```yaml
seeds="10838131d11f546751178df1e1045597aad6366d@34.41.169.77:26656"
sed -i.bak -e "s/^seeds =.*/seeds = \"$seeds\"/" $HOME/.symphonyd/config/config.toml
peers="eea2dc7e9abfd18787d4cc2c728689ad658cd3a2@34.66.161.223:26656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.symphonyd/config/config.toml
```
```yaml
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0note\"/" $HOME/.symphonyd/config/app.toml
```
* Prunning
```yaml
sed -i \
-e 's|^pruning *=.*|pruning = "custom"|' \
-e 's|^pruning-keep-recent *=.*|pruning-keep-recent = "100"|' \
-e 's|^pruning-keep-every *=.*|pruning-keep-every = ""|' \
-e 's|^pruning-interval *=.*|pruning-interval = "10"|' \
$HOME/.symphonyd/config/app.toml
```
* Indexer Off
```yaml
sed -i 's|^indexer *=.*|indexer = "null"|' $HOME/.symphonyd/config/config.toml
```
* Service
```yaml
sudo tee /etc/systemd/system/symphonyd.service > /dev/null <<EOF
[Unit]
Description=symphony
After=network-online.target

[Service]
User=$USER
ExecStart=$(which symphonyd) start
Restart=always
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

### Start Node
```yaml
sudo systemctl daemon-reload
sudo systemctl enable symphonyd
sudo systemctl restart symphonyd
sudo journalctl -u symphonyd -f -o cat
```

### Delete Node
```yaml
sudo systemctl stop symphonyd
sudo systemctl disable symphonyd
sudo rm /etc/systemd/system/symphonyd.service
sudo systemctl daemon-reload
rm -f $(which symphonyd)
rm -rf .symphonyd
rm -rf symphony
```

