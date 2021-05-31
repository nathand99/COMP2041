#!/bin/sh

# for each .jpg file change it to png. If .png already exists then dont
for file in *.jpg
do
   i=`echo $file | sed 's/.jpg/.png/g'`
   if test -e "$i"
   then
       echo "$i already exists"
       exit 1
   fi   
   convert "$file" "$i"
   rm "$file"
done
