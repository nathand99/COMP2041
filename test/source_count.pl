#!/usr/bin/perl -w

foreach $file(glob('*.c')) {
    open $F, '<', $file or die "error";
    $count = 0;
    while (<$F>) {
        $count++;
    }
    print "$file: $count\n";
}
