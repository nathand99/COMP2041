## FILTERS 
A filter is a program that transforms a data stream. 
- cat file.c - reads source of file.c and writes to command line
- cat <file.c - same as above
if no file specificed, read from stdin. filename "-" is stdin
- filter data1 - data2: read from data1, then stdin, then data2

Shell redirection - used to specify filter source and destination files
- cat a b c > d : means a b c used as inputs to cat, output of cat used as input to d
- ./prog < enrolments : means run the program ./prog, open the enrolments file and replace the stdin of prog with a stream coming enrolments. 
- Pipes: filter1 | filter2 | filter3 ... output of filter1 used as input for filter 2 etc

Filters have helpful options. Use man FILTER to see. Eg for cat:
- -n    number output lines (starting from 1)
- -A    display non-printing characters - handy for debugging
- -s    squeeze consecutive blank lines into single blank line

More filters (use man to find useful options):
- tac: cat but reverses the order of lines
- rev: reverses the order of characters in lines
- wc: prints the number of lines, words, characters in its input
- head: print first 10 lines of input. head -n 30: prints first 30 lines
- tail: print last 10 lines of input
- cmp: compare 2 files to see if they are the same
- diff: shows difference between 2 files
- cut: vertical slice. eg cut -d'|' -f1-3 data - prints first 3 columns of | separated data
- sort: by default, sorting is based on the first characters in the line. Lots of options
- uniq: uniq remove all but one copy of adjacent identical lines. -c number of repetitions
- tr: transliterate characters. Each char in source mapped to coresponding char in dest. eg map all upper case to lower: tr 'A-Z' 'a-z' < text
- sed: stream editor - very powerful. s/RegExp/Replace/g. substitute all occurrences of string matching RegExp by Replace string. Can do much more
- tee: send copy of pipeline to file. eg echo Hello Andrew | tee copy.txt. Sends "Hello Andrew" to file copy.txt
- find: search for files based on specified properties. find directories tests actions. eg find all your files/dirs changed in the last 2 days: find ~ -mtime -2 -print
- join: join merges two files using the values in a field in each file as a common key
- paste: displays several text files "in parallel" on output. Used to rebuild a file broken up by cut.
cut -f1 data > data1
cut -f2 data > data2
cut -f3 data > data3
paste data1 data2 data3 > newdata - newdata will be the same as the original data file

normal command: cut -f1 data | sort | uniq -c

## REGEX - regular expressions
- normal characters match themselves: a matches a
- . matches a single character
- b*: zero or more repetitions of b. eg. b* matches the empty string and: b, bb, bbb, bbbb...
- b+: one or more repetitions of b
- b?: zero or one occurance of b
- b{n}: n repetitions of b. e.g z[0-9]{7} matches a UNSW zid
- b{n,m}: n to m repetitions of b
- b{n,}: n or more repetitions of b
- pat1|pat2: union of both patterns. eg perl|python|ruby matches: perl, python or ruby
- (): used for grouping: eg (d|e)*(f|g) matches: f, g, df, dg, ef, eg, ddf, deg, edf, edg...
- \: removes any special meaning of next character. eg \* matches *
- [characters]: matches any single character from characters eg [aeiouAEIOU] matches any vowel. Shortcuts available: [first − last] [a-e] [a-z] [0-9] [a-zA-Z] [A-Za-z] [a-zA-Z0-9]
- [^]: inverts contents of square brackets. [^a-e] matches any single character except a-e
- ^: start of the string. eg ^hello matches a string starting with hello
- $: end of the string

grep - find strings that match REGEX. Options:
- -i ignore upper/lower-case difference in matching
- -v only display lines that do not match the pattern
- -c print a count of matching lines
- -w only match pattern if it makes a complete word
Different greps:
- fgrep or grep -F: match strings only - no REGEX
- egrep or grep -E: matches full POSIX regular expressions. USE THIS
- grep -P: POSIX regular expressions + Perl extensions
