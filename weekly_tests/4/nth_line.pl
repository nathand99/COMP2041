#!/usr/bin/perl -w

$n = $ARGV[0];
$file = $ARGV[1];

open (F, '<', $file) || die "Couldn't open file file.txt, $!";

@array = <F>;

if (scalar @array < $n) {
    exit 1;
} else {
    print $array[$n - 1];
}
