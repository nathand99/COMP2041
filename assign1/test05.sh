#!/bin/dash

# test legit-show (working properly)

# create repo
legit-init

# create some files
seq 1 3 > a
seq 1 3 > b
seq 4 7 > c

# add and commit them
legit-add a b c
legit-commit -m "abc1"

# change some files
seq 10 12 > a
seq 20 22 > b

# add and commit them
legit-add a b c
legit-commit -m "abc2"

legit-show 0:a #should display 1-3
legit-show 0:b #should display 1-3
legit-show 0:c #should display 4-7

legit-show 1:a #should display 10-12
legit-show 1:b #should display 20-22
legit-show 1:c #should display 4-7

# change but dont commit
seq 5 8 > a
seq 9 10 > b
seq 3 6 > c

legit-add a b c

legit-show :a #should display 5-8
legit-show :b #should display 9-10
legit-show :c #should display 3-6

