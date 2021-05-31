#!/bin/sh

start=$1
end=$2
file=$3
if test -e "$file"
then
    rm "$file" > /dev/null
fi
i="$start"
while test $i -le "$end"
do
    echo $i >> "$file"
    i=`expr $i + 1`
done

