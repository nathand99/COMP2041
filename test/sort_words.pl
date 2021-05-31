#!/usr/bin/perl -w

@lines = ();
while ($line = <>) {
    push @lines, $line;
}
foreach $i(@lines) {
    $new = sort $i;
    print $new;
}

