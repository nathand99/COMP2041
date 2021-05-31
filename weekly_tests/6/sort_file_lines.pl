#!/usr/bin/perl -w

$file = $ARGV[0];
open $F, '<', $file or die "problems";
%hash = ();

while (my $line = <$F>) {
    if ($line eq "") {
        next;
    }
    $length = length $line;
    $hash{$line} = $length;
}

$i = 1;
while (%hash) {
    my @array = ();
    foreach my $line(keys %hash) {
        if ($hash{$line} == $i) {
            push @array, $line;
            delete $hash{$line};
        }
    }
    my @sorted = sort @array;
    print @sorted;
    $i++;
}


