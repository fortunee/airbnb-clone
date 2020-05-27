#! /bin/bash
if [ -z "$SKIP_POSTINSTALL"]; then
  yarn run build:server
else
  echo "Skipping heroku postinstall"
fi
