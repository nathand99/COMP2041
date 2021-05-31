#!/usr/bin/perl -w

$file = $ARGV[0];

open $F, '<', $file or die "Error";
$total = 0.00;
while ($line = <$F>) {
    if ($line =~ /\$([0-9]+\.[0-9][0-9])/) {
        #print "$1\n";
        $total = $total + $1;
    }
}
printf "\$%.2f\n", $total;
    
