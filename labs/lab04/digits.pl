#!/usr/bin/perl -w

@lines = ();

while ($line = <STDIN>) {
    $line =~ s/[0-4]/</g;
    $line =~ s/[6-9]/>/g;
    push @lines, $line;
}
print @lines
