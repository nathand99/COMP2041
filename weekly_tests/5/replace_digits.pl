#!/usr/bin/perl -w

$file = $ARGV[0];
$tmp = "tmp.txt";

open $in, '<', $file or die "Error in opening file";
open $temp, '>', $tmp or die "Error in opening file";

while (my $line = <$in>) {
    $line =~ s/[0-9]/#/g;
    print $temp "$line";
}

close $in;
close $temp;

open $tempin, '<', $tmp or die "Error in opening file";
open $out, '>', $file or die "Error in opening file";

while (my $line = <$tempin>) {
    print $out "$line";
}

#unlink ($tmp);
close $tempin;
close $out;
