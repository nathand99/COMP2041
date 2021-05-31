#!/usr/bin/perl -w

$file = $ARGV[0] or die "Provide 1 file\n";

open $in, '<', $file or die "Open failed on $file\n";

$i = 0;
while (1) {
    # . concats strings
    $new = '.' . $file . '.' . $i;
    # increment $i until a file doesnt exist with that name
    if (not -e $new) {
        last;
    }
    $i++;
}

open $out, '>>', $new or die "Open failed on $new\n";

# read in lines from in and append them to out
while ($line = <$in>) {
    print $out "$line";
}
close $in;
close $out;

print "Backup of '$file' saved as '$new'\n";
