#!/usr/bin/perl -w

if (scalar @ARGV < 2) {
    die "Usage: ./identical_files.pl <files>\n";
}

$i = 1;
while ($i < scalar @ARGV) {
    open $F1, '<', $ARGV[$i] or die "Failed to open file\n";
    open $F2, '<', $ARGV[$i - 1] or die "Failed to open file\n";
    @array1 = ();
    @array2 = ();
    while (my $line = <$F1>) {
        push(@array1, $line);
    }
    while (my $line = <$F2>) {
        push(@array2, $line);
    }
    $j = 0;
    while ($j < scalar @array1) {
        if ($array1[$j] ne $array2[$j]) {
            print "$ARGV[$i] is not identical\n";
            exit 0;
        }
        $j++;
    }
    if ($j < scalar @array2) {
        print "$ARGV[$i] is not identical\n";
        exit 0;
    }
    close $F1;
    close $F2;
    $i++;
}
print "All files are identical\n"
    
    
    
