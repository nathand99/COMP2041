#!/bin/sh

dir1="$1"
dir2="$2"

for file in "$dir1"/*
do
    #echo $file
    base=`echo "$file" | cut -d '/' -f2`
    #echo $base
    if test -e "$dir2"/"$base"
    then
        if diff "$file" "$dir2"/"$base" >/dev/null
        then
            echo "$base"
        fi
    fi
done

