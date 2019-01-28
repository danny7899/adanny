#!/bin/bash

if ! command -V add-apt-repository >/dev/null 2>&1; then
    sudo apt-get install -y -q  software-properties-common ca-certificates apt-transport-https
fi

if ! command -V java >/dev/null 2>&1; then
    sudo apt-get install -y -q openjdk-8-jdk
fi

if [ ! -f /etc/apt/sources.list.d/bazel.list ]; then
    echo "deb [arch=amd64] http://storage.googleapis.com/bazel-apt stable jdk1.8" | sudo tee /etc/apt/sources.list.d/bazel.list
    curl https://bazel.build/bazel-release.pub.gpg | sudo apt-key add -
fi

sudo apt-get update -y -q
sudo apt-get install -y -q bazel
