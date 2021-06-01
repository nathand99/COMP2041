#!/bin/dash

# test legit-add

# create repo
legit-init

# create some files
touch a b c a:a:a a:a

# add a
legit-add a

# add b and c
legit-add b c

# add a again - no error
legit-add a

# add invalid filename - error (invalid filename)
legit-add a:a
legit-add a%
legit-add aa@
legit-add @@

# add file that doesnt exist - error (cannot open)
legit-add d

# add file thats invalid and doesnt exist - error (invalid filename)
legit-add a:
