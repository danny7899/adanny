#!/bin/bash

if ! command -V npm >/dev/null 2>&1; then
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt-get install -y -q nodejs
    echo "export PATH=\$PATH:node_modules/.bin" >> "$VHOME/.profile"
fi