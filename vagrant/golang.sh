#!/bin/bash

if [ ! -d /usr/local/go ]; then
	sudo curl -O -s -S https://dl.google.com/go/go1.11.5.linux-amd64.tar.gz
	sudo tar -C /usr/local -xzf go1.11.5.linux-amd64.tar.gz
	sudo rm go1.11.5.linux-amd64.tar.gz
	echo "export GOPATH=$GOPATH" >> "$VHOME/.profile"
	echo "export PATH=\$PATH:\$GOPATH/bin:/usr/local/go/bin" >> "$VHOME/.profile"
fi
