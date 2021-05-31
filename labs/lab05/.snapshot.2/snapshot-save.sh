#!/bin/dash

n=0
while test -d ".snapshot.$n"
do
    n=`expr "$n" + 1`
done

mkdir .snapshot.$n

echo "Creating snapshot $n"

for file in *
do
    if ! cmp -s "$file" "snapshot-save.sh" || cmp -s "$file" "snapshot-load.sh" 
    then
        cp -r "$file" ".snapshot.$n/"
    fi
done

