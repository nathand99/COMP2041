#!/bin/sh
# program that prints a string n number of times
# ./echon.sh <number of lines> <string>"

n=$1
string=$2
re='[^0-9]'
#check input
if test $# -ne 2
then
    echo "Usage: ./echon.sh <number of lines> <string>"
    exit 1
elif [[ $n =~ $re ]]
then
    echo "./echon.sh: argument 1 must be a non-negative integer"
    exit 1
elif test "$n" -lt 0
then
    echo "./echon.sh: argument 1 must be a non-negative integer"
    exit 1
fi

#print
i=0
while test $i -lt $n
do
    echo "$string"
    i=`expr $i + 1`
done
