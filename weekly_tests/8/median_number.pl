#!/usr/bin/perl -w

@array = sort {$a <=> $b} @ARGV;

$index = (scalar @array) / 2;
print "$array[$index]\n";

