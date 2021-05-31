#!/usr/bin/perl -w

$start = $ARGV[0];
$file = $ARGV[1];

open $F, '<', $file or die "Error in opeing file";
@lines = ();
while ($line = <$F>) {
    push @lines, $line;
}

print "$lines[$start - 1]" if ($start <= scalar @lines);
    
