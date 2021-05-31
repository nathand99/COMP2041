#!/bin/sh

files=find "$@" -type f

while read -r line;
do
    title=`echo "$line" | cut -f1 -d '-' | sed "s/^[ ]*//"`
    id3 -t "$title" "$line" >dev/null
    
    artist=`echo "$line" | awk -F ' -' '{print $3} '| sed "s/^[ ]*//"`
    id3 -a "$artist" "$line" >dev/null
    
    track=`echo "$line" | cut -f3 -d '/' | cut -f1 -d ' '`
    id3 -T "$track" "$line" >dev/null
    
    album=`echo "$line" | cut -f2 -f '/'`
    id3 -A "$album" "$line" >dev/null
    
    year=`echo "$album" | cut -f2 -d ',' | sed "s/^[ ]*//"`
    id3 -y "$year" "$line" >dev/null
    
done <<< "$files"

