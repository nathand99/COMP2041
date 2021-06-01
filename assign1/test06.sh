#!/bin/dash#!/bin/dash

# test legit-show (errors)

# create repo
legit-init

# show commit that doesnt exist with file that doesnt exist - error
legit-show 1:a #unknown commit

# create, add, commit file
touch a
legit-add a
legit-commit -m "a"

# show commit that doesnt exist with file that does exist - error
legit-show 1:a

# show commit that does exist with file that doesnt exist - error
legit-show 0:b

#invalid argument - error (invalid object)
legit-show @@

#invalid filename - error (invalid filename)
legit-show :a@
