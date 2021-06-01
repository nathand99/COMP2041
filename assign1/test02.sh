#!/bin/dash

# test commit

# create repo
legit-init

# create some files
touch a b c

# add a
legit-add a

# commit index (a) - commit as commit 0
legit-commit -m "a"

# commit again - nothing to commit (wont commit)
legit-commit -m "a"

# add b and c
legit-add b c

# commit index (a,b,c) - commit as commit 1
legit-commit -m "bc"

# commit again - nothing to commit (wont commit)
legit-commit -m "bc"


