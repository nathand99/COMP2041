#!/usr/bin/perl -w
%lines = ();
while ($line = <STDIN>) {
    $line =~ s/[^\w\s]//g;
    $line =~ tr [A-Z] [a-z];
    @fields = split / /, $line;
    foreach $word(@fields) {
        chomp $word;
        if (!defined $lines{$word}) {
            $lines{$word} = 1;
        } else {
            $lines{$word}++;
        }
    }
}

foreach $key(keys %lines) {
    print "$lines{$key} $key\n";
}
