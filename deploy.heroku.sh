#! /bin/bash
docker login -u username -p password
yarn build:server
heroku container:push web
heroku container:release web