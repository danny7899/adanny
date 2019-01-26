#!/bin/bash

set -e
set -u
set -x

export VHOME=/home/vagrant
export GOPATH=$VHOME/go
export PROJECT_ROOT=$GOPATH/src/adanny.net

sudo apt-get update -y -q
sudo apt-get install -y -q build-essential git curl ca-certificates bash-completion autoconf mysql-client

sudo mkdir -p $PROJECT_ROOT
sudo chown -R vagrant $GOPATH
sudo chgrp -R vagrant $GOPATH

source $PROJECT_ROOT/vagrant/golang.sh

sudo apt-get autoremove -y -q
