## Install dependencies 
```yaml
sudo apt update && sudo apt upgrade -y && sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential bsdmainutils git make ncdu gcc git jq chrony liblz4-tool -y
```
## Install go
```yaml
ver="1.21.7"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm "go$ver.linux-amd64.tar.gz"
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> ~/.bash_profile
source ~/.bash_profile
go version
```

## Install binary
```yaml
cd $HOME
git clone https://github.com/warden-protocol/wardenprotocol.git
cd wardenprotocol
git checkout v0.3.0
make install
```

## Initialize Node

Please change MONIKER To your own Moniker.
```yaml
wardend init Moniker --chain-id buenavista-1
```

* Configure Seeds and Peers
```yaml
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.00uward\"/;" ~/.warden/config/app.toml
peers="3ac30a74ec46e7a4984f0d52e850099720b05bda@95.217.161.226:26656,bda08962882048fea4331fcf96ad02789671700e@65.21.202.124:35656.ea8e0c3a936a9c5ea9b9dbbfb5542514d8ead33f@95.179.166.220:18656,ddb4d92ab6eba8363bab2f3a0d7fa7a970ae437f@sentry-1.buenavista.wardenprotocol.org:26656,c717995fd56dcf0056ed835e489788af4ffd8fe8@sentry-2.buenavista.wardenprotocol.org:26656,e1c61de5d437f35a715ac94b88ec62c482edc166@sentry-3.buenavista.wardenprotocol.org:26656,a63e119b629fa8d6e4be1c48e507bca6f1a05832@65.108.237.188:51656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.warden/config/config.toml
seeds=""
sed -i.bak -e "s/^seeds =.*/seeds = \"$seeds\"/" $HOME/.warden/config/config.toml
sed -i -e "s|^minimum-gas-prices *=.*|minimum-gas-prices = \"0.005uward\"|" $HOME/.warden/config/app.toml
```
* config pruning
```yaml
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="10"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.warden/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.warden/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.warden/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.warden/config/app.toml
```

## create service file and start node
```yaml
sudo tee /etc/systemd/system/wardend.service > /dev/null <<EOF
[Unit]
Description=wardend
After=network-online.target

[Service]
User=$USER
ExecStart=$(which wardend) start
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

## Enable Service and Start Node
```yaml
sudo systemctl daemon-reload
sudo systemctl enable wardend
sudo systemctl restart wardend
sudo journalctl -u wardend -f -o cat
```