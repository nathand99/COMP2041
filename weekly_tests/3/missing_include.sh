#!/bin/sh
for argument in "$@"
do
    for file in `egrep '#include "' "$argument" | cut -d '"' -f2`
    do
        if ! find "$file" &>/dev/null
        then
            echo "$file" included into "$argument" does not exist
        fi
    done
done
