#!/usr/bin/perl -w

%hash = ();
$n = $ARGV[0];

while ($line = <STDIN>) {
    if (!defined $hash{$line}) {
        $hash{$line} = 1;
    } else {
        $hash{$line}++;
    }   
    if ($hash{$line} == $n) {
        print "Snap: $line";
        exit 1; 
    }
}

