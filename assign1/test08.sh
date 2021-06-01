#!/bin/dash

# test commit with -a option

# create repo
legit-init

# create files
seq 1 3 > a
seq 10 12 > b

# add and commit them
legit-add a b
legit-commit -m "com1"

# change the files
seq 11 13 > a
seq 5 12 > b

# commit them with -a and they should be updated
legit-commit -a -m "com2"
