#!/usr/bin/perl -w

%hash = ();

foreach $arg(@ARGV) {
    if (!defined $hash{$arg}) {
        $hash{$arg} = 1;
        print "$arg ";
    }
}
print "\n";
