#!/bin/sh
# program that prints all small, medium, large files in current directory
# test -f "$file" tests that file is a regular file (and not a directory)

# small files have less than 10 lines
echo -n "Small files: "
for file in *
do    
    if test -f "$file" 
    then
        i=`wc -l "$file" | cut -d ' ' -f1`
        if test $i -lt 10
        then
            echo -n "$file "
        fi
    fi
done
echo

# medium files have between 10 and 99 lines
echo -n "Medium-sized files: "
for file in *
do  
    if test -f "$file" 
    then
        i=`wc -l "$file" | cut -d ' ' -f1`
        if test $i -lt 100 && test $i -ge 10
        then
            echo -n "$file "
        fi
    fi
done
echo 

# large files have 100 lines or greater
echo -n "Large files: "
for file in *
do    
    if test -f "$file" 
    then
        i=`wc -l "$file" | cut -d ' ' -f1`
        if test $i -ge 100
        then
            echo -n "$file "
        fi
    fi
done
echo 
