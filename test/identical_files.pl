#!/usr/bin/perl -w

if (scalar @ARGV == 0) {
    print "Usage: ./identical_files.pl <files>";
    exit 1;
}
$i = 1;
while ($i <= $#ARGV) {
    $first_file = $ARGV[$i];
    $second_file = $ARGV[$i - 1];
    open $F, '<', $first_file or die "Error";
    @first = ();
    while (my $line = <$F>) {
        push @first, $line;
    }    
    open $S, '<', $second_file or die "Error";
    @second = ();
    while (my $line = <$S>) {
        push @second, $line;
    }
    
    $j = 0;
    while ($j < scalar @first) {
        if ($first[$j] ne $second[$j]) {
            print "$first_file is not identical\n";
            exit 0;
        }
        $j++;
    }
    if (scalar @first != scalar @second) {
        print "$first_file is not identical\n";
        exit 0;
    }
    close $F;
    close $S;
    $i++;
}
print "All files are identical\n";
