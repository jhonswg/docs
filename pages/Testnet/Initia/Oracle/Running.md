## Running Oracle

### Create systemd services
```yaml
sudo tee /etc/systemd/system/slinky.service > /dev/null <<EOF
[Unit]
Description=Initia Slinky Oracle
After=network-online.target

[Service]
User=$USER
ExecStart=$(which slinky) --oracle-config-path $HOME/slinky/config/core/oracle.json --market-map-endpoint 0.0.0.0:19090
Restart=on-failure
RestartSec=30
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

### Enable and start systemd services
```yaml
sudo systemctl daemon-reload
sudo systemctl enable slinky.service
sudo systemctl start slinky.service
```

### Validating Prices
```yaml
make run-oracle-client
```

### Enable Oracle Vote Extension
In order to utilize the Slinky oracle data in the Initia node, the Oracle setting should be enabled in the config/app.toml file
```yaml
###############################################################################
###                                  Oracle                                 ###
###############################################################################
[oracle]
# Enabled indicates whether the oracle is enabled.
enabled = "true"

# Oracle Address is the URL of the out of process oracle sidecar. This is used to
# connect to the oracle sidecar when the application boots up. Note that the address
# can be modified at any point, but will only take effect after the application is
# restarted. This can be the address of an oracle container running on the same
# machine or a remote machine.
oracle_address = "127.0.0.1:8080"

# Client Timeout is the time that the client is willing to wait for responses from 
# the oracle before timing out.
client_timeout = "500ms"

# MetricsEnabled determines whether oracle metrics are enabled. Specifically
# this enables instrumentation of the oracle client and the interaction between
# the oracle and the app.
metrics_enabled = "false"
```

### Check the systemd logs
```yaml
journalctl -fu slinky --no-hostname
```

### Successfull Log examples:
```yaml
Jun 03 04:31:09 slinky[85255]: {"level":"info","ts":"2024-06-03T04:31:09.310+0200","caller":"oracle/oracle.go:163","msg":"oracle updated prices","pid":85255,"process":"oracle","last_sync":"2024-06-03T02:31:09.310Z","num_prices":65}
Jun 03 04:31:09 slinky[85255]: {"level":"info","ts":"2024-06-03T04:31:09.561+0200","caller":"oracle/oracle.go:163","msg":"oracle updated prices","pid":85255,"process":"oracle","last_sync":"2024-06-03T02:31:09.561Z","num_prices":65}
Jun 03 04:31:09 slinky[85255]: {"level":"info","ts":"2024-06-03T04:31:09.809+0200","caller":"oracle/oracle.go:163","msg":"oracle updated prices","pid":85255,"process":"oracle","last_sync":"2024-06-03T02:31:09.809Z","num_prices":65}
Jun 03 04:31:10 slinky[85255]: {"level":"info","ts":"2024-06-03T04:31:10.060+0200","caller":"oracle/oracle.go:163","msg":"oracle updated prices","pid":85255,"process":"oracle","last_sync":"2024-06-03T02:31:10.060Z","num_prices":65}
Jun 03 04:31:10 slinky[85255]: {"level":"info","ts":"2024-06-03T04:31:10.310+0200","caller":"oracle/oracle.go:163","msg":"oracle updated prices","pid":85255,"process":"oracle","last_sync":"2024-06-03T02:31:10.310Z","num_prices":65}
Jun 03 04:31:10 slinky[85255]: {"level":"info","ts":"2024-06-03T04:31:10.560+0200","caller":"oracle/oracle.go:163","msg":"oracle updated prices","pid":85255,"process":"oracle","last_sync":"2024-06-03T02:31:10.560Z","num_prices":65}
Jun 03 04:31:10 slinky[85255]: {"level":"info","ts":"2024-06-03T04:31:10.562+0200","caller":"marketmap/fetcher.go:116","msg":"successfully fetched market map data from module; checking if market map has changed","pid":85255,"process":"provider_orchestrator"}
```