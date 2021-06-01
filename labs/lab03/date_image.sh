#!/bin/sh
# program which dates all images given as arguments

for pic in "$@"
do

    # get the date as last modified from ls
    date=`ls -l "$pic" | cut -d ' ' -f6-8`

    # the image now has the date written on it
    convert -gravity south -pointsize 36 -draw "text 0,10 '$date'" $pic $pic

done
