#!/bin/bash

# dependencies
sudo apt-get install -y -q apt-transport-https ca-certificates curl gnupg-agent software-properties-common

if [ ! -f /etc/apt/sources.list.d/docker.list ]; then
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update -y -q
    sudo apt-get install -y -q docker-ce
fi

sudo usermod -aG docker vagrant
