#!/bin/dash

# test legit-log

# create repo
legit-init

# create some files
touch a b c

# run log without commits - error
legit-log

# add and commit a
legit-add a
legit-commit -m "a"

# legit-log will show: 0 a
legit-log

# add and commit b and c
legit-add b c
legit-commit -m "bc"

# legit-log will show: 
#1 bc
#0 a
legit-log
