#!/bin/sh

for directory in "$@"/
do
    `cd "$directory"`
    year=`echo $directory | cut -d '/' -f2 | cut -d ' ' -f2`
    album=`echo $directory | cut -d '/' -f2 | cut -d ',' -f1`
    
    for file in "$directory"
    do
        id3 -A "$album" "$file" 
        i=`ls "$directory"`
        j=`echo $i | cut -d ' ' -f1`
        echo "$i\n"
            title=
            artist=
            album=
            year=
            track=
    done
    `cd ..`
done
