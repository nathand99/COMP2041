#!/usr/bin/perl -w

@array = ();

while ($line = <STDIN>) {
    chomp($line);
    push(@array, $line);
}

$i = 0;
while ($i < scalar @array) {
    my @sort = split / /, $array[$i];
    @sort = sort @sort;
    print "@sort\n";
    $i++;
}
