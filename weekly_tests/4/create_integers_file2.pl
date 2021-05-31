#!/usr/bin/perl -w

# another way to use file*
$start = $ARGV[0];
$end = $ARGV[1];
$file = $ARGV[2];
open ($F, '>>', $file) || die "Couldn't open file file.txt, $!";
#open(F, ">>$file"); #another way - dont use $ sign with this way
$i = $start;
while ($i <= $end) {
    print $F "$i\n";   
    $i++;
}
close $F
