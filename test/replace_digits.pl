#!/usr/bin/perl -w

$file = $ARGV[0];

open $F, '<', $file or die "Cannot open file";

@lines = ();
while ($line = <$F>) {
    $line =~ s/[0-9]/#/g;
    push @lines, $line;
}

open $out, '>', $file or die "Cannot open file";
print $out @lines; 
