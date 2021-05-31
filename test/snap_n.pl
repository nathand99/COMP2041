#!/usr/bin/perl -w

$num = $ARGV[0];
%hash = ();

while ($line = <STDIN>) {
    if (!defined($hash{$line})) {
        $hash{$line} = 1;
    } else {
        $hash{$line}++;
        if ($hash{$line} == $num) {
            print "Snap: $line";
            exit 0;
        }
    }
}
