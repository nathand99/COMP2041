#!/usr/bin/perl -w

$species = $ARGV[0];
$file = $ARGV[1];

open $F, '<', $file or die "Cannot open file";
@array = ();
while ($line = <$F>) {
    push @array, $line;
}

$count = 0;
$i = 0;
while ($i < scalar @array) {
    if ($array[$i] =~ /$species/) {
        $array[($i - 1)] =~ /(\d+)/;
        $count = $count + $1;
    }
    

    $i++;
}
print "$count\n"