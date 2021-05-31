#!/bin/dash

# first call snapshot on current directory
snapshot-save.sh

n=$1
cd ".snapshot.$n/"
for file in *
do
   # echo "$file"
    cp -r "$file" .. >/dev/null
done
echo "Restoring snapshot $n"
