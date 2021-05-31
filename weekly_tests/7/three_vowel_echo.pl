#!/usr/bin/perl -w

foreach $arg(@ARGV) {
    if ($arg =~ /[aeiou]{3}/i) {
        print "$arg ";
    }
}
print "\n";
