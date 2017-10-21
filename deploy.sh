#!/bin/bash

echo 'Starting deploy';

echo 'Cleaning deploy directory'
rm -r dist/

echo 'Building packages'
npm run build;

echo 'Removing old version from server'

echo 'Copying files to server'
scp -i ~/.ssh/griffin-puma-worker -rp dist/. puma-worker@server.griffinmahoney.com:/var/www/cesiteservices.com;

echo 'Cleaning deploy files'
rm -r dist/;

echo 'Restarting web server'
echo 'sudo service nginx restart' | ssh server.griffinmahoney.com

echo 'Finished'
