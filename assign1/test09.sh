#!/bin/dash

#!/bin/dash

# test legit-rm

# create repo
legit-init

# create some files
touch a b c

# add the files
legit-add a b c

# remove a and b from index
legit-rm --cached a b

# remove c from directory and index
legit-rm c

# create some more files
touch d e f

# add and commit the files
legit-add d e f
legit-commit -m "def"

# change the files in directory
seq 1 3 > d
seq 1 3 > e
seq 1 3 > f

#remove them by force from index
legit-rm --cached --force d e f
