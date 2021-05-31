#!/bin/sh
touch tempfile1
if test -e tempfile1
then 
    rm  tempfile1
fi
touch tempfile1
for line in "`egrep '"name": "[A-Z].*"' $1 | cut -d '"' -f4`"
do
    #line=`cut -d '"' -f4 "$line"`
    #echo "$line"
    echo "$line" >> tempfile1
done

sort tempfile1 | uniq | cat
