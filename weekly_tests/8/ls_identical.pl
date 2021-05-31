#!/usr/bin/perl -w

$dir1 = $ARGV[0];
$dir2 = $ARGV[1];

my @files = glob($dir1.'/*');
foreach my $file (@files){
    @base = split /\//, $file;
    $name =  $base[1];
    
    open $F1, '<', $file or next;
    $path = $dir2 . '/' . $name;
    open $F2, '<', $path or next;
    
    @array1 = ();
    @array2 = ();
    while (my $line = <$F1>) {
        push @array1, $line;
    }
    while (my $line = <$F2>) {
        push @array2, $line;
    }
    
    my $i = 0;
    my $same = 1;
    while ($i < scalar @array1) {
        if ($array1[$i] ne $array2[$i]) {
            $same = 0;
        }
        $i++;
    }
    if ($same == 1 && (scalar @array2 == scalar @array1)) {
        print "$name\n";
    }
}
