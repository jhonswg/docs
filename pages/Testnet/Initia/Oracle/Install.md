## Initia Oracle

### Clone Repository
```yaml
cd $HOME
rm -rf slinky
git clone https://github.com/skip-mev/slinky.git
cd slinky
git checkout v0.4.3#
```

### Build binaries
```yaml
make install
```

### Move binary to local bin
```yaml
mv build/slinky /usr/local/bin/
rm -rf build
```
