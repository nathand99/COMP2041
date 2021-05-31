#!/usr/bin/perl -w

$largest = 0;

while ($line = <STDIN>) {
    @nums = $line =~ /(\d\.?\d*)/g;
    foreach $number(@nums) {
        $largest = $number if (($number <=> $largest) == 1);
    }
}
print "$largest\n";

