#!/bin/sh

for file in *.htm
do
    newname="$file"l
    if -e "$newname" &>/dev/null
    then
        echo "$newname" exists
        exit 1
    fi
    mv "$file" "$newname"
done
