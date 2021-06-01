#!/bin/dash

# command line argument errors for init, add, commit

# legit-init with command line args - error
legit-init hello

# create repo
legit-init

# create some files
touch a b c

# add with no args - error
legit-add

# commit with no args - error
legit-commit

# commit with message - error
legit-commit -m

# commit with no -m - error
legit-commit "not -m"

# commit with no -m with -a - error
legit-commit -a

# commit with -a and -n but no message - error
legit-commit -a -m

