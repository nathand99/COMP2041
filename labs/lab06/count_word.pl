#!/usr/bin/perl -w

$word = $ARGV[0];
$count = 0;
while ($line = <STDIN>) {
    chomp($line);
    $line = lc $line;
    next if ($line eq "");
    @array = split /[^a-zA-Z]+/, $line;
    $i = 0;
    while ($i < scalar @array) {
        if ($array[$i] eq $word) {
            $count++;
        }
        $i++;
    }
}

print "$word occurred $count times\n";
    
