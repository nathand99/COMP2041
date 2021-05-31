#!/usr/bin/perl -w

if ($#ARGV != 1) {
    die "Usage: ./echon.pl <number of lines> <string>\n";
} elsif ($ARGV[0] =~ /^[^0-9]+/) {
    die "./echon.pl: argument 1 must be a non-negative integer\n";
}

$n = $ARGV[0];
$string = $ARGV[1];

$i = 0;
while ($i < $n) {
    print "$string\n";
    $i++;
}
