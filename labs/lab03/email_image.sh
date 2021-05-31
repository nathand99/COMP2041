#!/bin/sh

# for each picture given as a command line argument, open it
# when each picture has been closed, ask for an email and a message and email the picture

for pic in "$@"
do
    display "$pic"
done

for pic in "$@"
do
    echo -n "Address to e-mail this image to? "
    read email
    echo -n "Message to accompany image? "
    read msg
    echo "$pic sent to $email"
    mutt -s "$msg" -e 'set copy=no' -a "$pic" -- "$email" 
done
