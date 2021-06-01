#!/bin/sh 
# program which reads in digits from stdin and if < 5, prints "<", if > 5, prints ">"

tr '0-4' '<' | tr '6-9' '>'
