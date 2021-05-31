#!/usr/bin/perl -w

$start = $ARGV[0];
$end = $ARGV[1];
$file = $ARGV[2];
open (F, '>>', $file) || die "Couldn't open file file.txt, $!";
$i = $start;
while ($i <= $end) {
    print F "$i\n";   
    $i++;
}
close F
