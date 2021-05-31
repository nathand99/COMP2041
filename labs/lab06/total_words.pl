#!/usr/bin/perl -w

$count = 0;
while ($line = <STDIN>) {
    chomp($line);
    next if ($line eq "");
    @array = split /[^a-zA-Z]+/, $line;
    $i = 0;
    while ($i < scalar @array) {
        if ($array[$i] eq "") {
            splice @array, $i, 1;
        }
        $i++;
    }
    #print @array;
    $count = $count + scalar @array;
}

print "$count words\n";
    
