#!/bin/bash
cd tests
unzip sample-*
rm sample-*.zip
mv sample-*/* .
rm -r sample-*
cd ..