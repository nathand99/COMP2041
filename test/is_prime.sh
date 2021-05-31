#!/bin/sh

num=$1

i=2
while test "$i" -lt "$num"
do
    new=`expr "$num" % "$i"`
    if test "$new" -eq 0
    then
        echo ""$num" is not prime"
        exit 0
    fi
    i=`expr "$i" + 1`
done

echo ""$num" is prime"

