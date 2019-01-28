#!/bin/bash

apt-get -y --force-yes install nginx

service nginx restart
