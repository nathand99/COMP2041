#!/bin/sh

file=$1

i=0
while test -e ".$file.$i"
do
    i=`expr "$i" + 1`
done

cp "$file" ".$file.$i"
echo "Backup of '"$file"' saved as '".$file.$i"'"

