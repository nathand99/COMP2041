#!/usr/bin/perl -w

@max = ();
while ($line = <STDIN>) {
    while ($line =~ /(\d+)/g) {
        $tmp = $1;
        $tmp =~ s/\D+//g;
        if (!defined($max) or $max < $tmp) {
            $max = $tmp;
            push @max, $1;
        }
    }
}

print @max if @max;

