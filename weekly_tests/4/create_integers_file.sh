#!/bin/sh

start=$1
end=$2
file=$3
i=$start

while test $i -le $end
do
    echo $i >> "$3"
    i=`expr $i + 1`
done
