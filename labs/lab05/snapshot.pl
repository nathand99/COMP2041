#!/usr/bin/perl -w

@array = glob("*");

$i = 0;
$file = ".snapshot." . $i;
while (-e $file) {
    $i++;
    $file = ".snapshot." . $i;
}
mkdir $file, 0755;
print "Creating snapshot $i\n";
foreach my $a (@array) {
    if ($a eq "snapshot.pl") {
        next;
    }
    open $in, '<', $a or die "Open failed on $a\n";
    $new = $file . "/" . $a;
    open $out, '>', $new or die "Open failed on $new\n";

    # read in lines from in and append them to out
    while ($line = <$in>) {
        print $out "$line";
    }
    close $in;
    close $out;
}

if (scalar @ARGV > 0 && $ARGV[0] eq "load") {
    $n = $ARGV[1];
    $path = ".snapshot." . $n;
    @s = glob("$path/*");
    foreach my $a (@s) {
        open $in, '<', $a or die "Open failed on $a\n";
        $a =~ s/.*\///;
        open $out, '>', $a or die "Open failed on $new\n";

        # read in lines from in and append them to out
        while ($line = <$in>) {
            print $out "$line";
        }
        close $in;
        close $out;
    }
    print "Restoring snapshot $n\n";
}
