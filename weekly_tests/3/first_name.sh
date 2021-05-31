#!/bin/sh

file=$1

egrep '^COMP[29]041' $file | cut -d '|' -f3 | cut -d ' ' -f2 | sort | uniq -c | sort -r | head -1 | cut -d ' ' -f8
