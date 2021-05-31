#!/bin/sh

echo -n "Small files: "
for file in *
do    
    i=`wc -l "$file" | cut -d ' ' -f1`
    if test $i -lt 10
    then
        echo -n "$file "
    fi
done
echo

echo -n "Medium-sized files: "
for file in *
do    
    i=`wc -l "$file" | cut -d ' ' -f1`
    if test $i -lt 100 && test $i -ge 10
    then
        echo -n "$file "
    fi
done
echo 

echo -n "Large files: "
for file in *
do    
    i=`wc -l "$file" | cut -d ' ' -f1`
    if test $i -ge 100
    then
        echo -n "$file "
    fi
done
echo 
