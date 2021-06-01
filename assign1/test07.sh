#!/bin/dash

#test command line argument errors for log and show

# create repo
legit-init

# show with 0 arguments - error
legit-show

# show with too many arguments - error
legit-show a a a

# show with too many arguments - error
legit-log a a a

