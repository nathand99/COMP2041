#!/usr/bin/perl -w

$file = $ARGV[0];
open $F, '<', $file or die "Could not open file";

@array = ();
while ($line = <$F>) {
    push @array, $line;
}

# if theres something in the array
if (@array) {
    # if odd then print index (length / 2) - 1
    if (((scalar (@array)) % 2) == 1) {
        $index = (scalar @array) / 2;
        print $array[$index];
    } else {
        $index = (scalar @array / 2) - 1;
        print $array[$index];
        print $array[$index + 1];
    }
}
