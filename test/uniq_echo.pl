#!/usr/bin/perl -w

%hash = ();

foreach $arg(@ARGV) {
    if (!defined($hash{$arg})) {
        print "$arg ";
        $hash{$arg} = 1;
    }
}
print "\n";
