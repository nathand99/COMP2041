#!/bin/sh

egrep '^COMP[29]041' $1 | cut -d '|' -f3 | uniq | cut -d ' ' -f2 | sort | uniq -c | sort -r | head -1 | sed s/[^a-zA-Z]//g

