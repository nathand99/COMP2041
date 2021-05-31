#!/usr/bin/perl -w

# array of lines given to the program
@lines = ();

# read in stdin and put every line into an array index
while ($lines = <STDIN>) {
    push @lines, $lines; 
}

# while there is something in the lines array, get a random number 
# between and the last array index. Print this line and then delete it
# from the array
while (scalar @lines > 0) {
    $i = rand($#lines + 1);
    print $lines[$i];
    splice @lines, $i, 1; 
    #^take $i'th index of array and take length 1 past it 
    # (so just [$i]) and replace it with nothing (delete it)
}
