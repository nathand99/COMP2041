#!/usr/bin/perl -w

# array of files given in argv
@files = ();

# array of lines read
@array = ();

# number of lines to be printed. Default 10
$n = 10;  

# if there are command line arguments
if (scalar @ARGV > 0) {    
# if first argument is -n, then set n to that and delete -n from @ARGV
    if ($ARGV[0] =~ /^\-([0-9]+)$/) {
        $n = $ARGV[0];
        $n =~ s/-//g;
        shift @ARGV;
    }
    # put all command line arguments which are files into @files
    foreach $arg (@ARGV) {
        push @files, $arg;
    }
}

# if there are no files given
if (scalar @files == 0) {
    while ($lines = <STDIN>) {
        push @array, $lines; 
    }
    $q = $#array + 1 - $n;
    if ($q < 0) {
        $q = 0;
    }
    while ($q <= $#array) {
        print $array[$q];
        $q++;
    }
    
    
# if there are files given
} else {
    foreach $file (@files) {
        open F, '<', $file or die "$0: Can't open $file\n";

        @array = <F>;
        if (scalar @files > 1) {
            print "==> $file <==\n";
        }
        $q = $#array + 1 - $n;
        if ($q < 0) {
            $q = 0;
        }
        while ($q <= $#array) {
            print $array[$q];
            $q++;
        }
        close F;
    }   
}

