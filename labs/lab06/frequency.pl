#!/usr/bin/perl -w

%hash = ();
%count = ();
$word = $ARGV[0];

foreach $file (glob "lyrics/*.txt") {
    #$count = 0;
    open $F, '<', $file or die "dead";
    $count{$file} = 0;
    while ($line = <$F>) {        
        chomp($line);
        $line = lc $line;
        next if ($line eq "");
        @array = split /[^a-zA-Z]+/, $line;
        $i = 0;
        
        while ($i < scalar @array) {
            if ($array[$i] eq $word) {
                if (!defined $hash{$file}) {
                    $hash{$file} = 1;
                } else {
                    $hash{$file} = $hash{$file} + 1;
                }              
            }
            $i++;
            $count{$file}++;
        }       
    }
    close $F;
}

foreach $key (keys %hash) {
    @name = split /\//, $key;
    $name[1] =~ s/_/ /g;
    @name2 = split /\./, $name[1];
    printf("%4d/%6d = %.9f %s\n", $hash{$key}, $count{$key}, $hash{$key}/$count{$key}, $name2[0]);

}
    
