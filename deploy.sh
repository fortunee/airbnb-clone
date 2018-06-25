#! /bin/bash
yarn build:server
docker build -t fortunee/abb:latest .
docker push fortunee/abb:latest
ssh root@167.99.90.97 "docker pull fortunee/abb:latest && docker tag fortunee/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"