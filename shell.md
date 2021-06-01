## Shell
- $variable - Shell variables
    - untyped
    - no declared, do not need initialisation - initial value is empty string
    - name=value assigns value to variable name. No spaces around =. 
    - Access variable with $name. $name replaced with value of variable name

- $(command) OR `command` (using backticks``) - runs command and is replaced with stdout from command
- print using echo
- # comment

- single quotes '' group the characters within into a single word - a string
    - no characters interpreted specially inside single quotes
    - a single quote can not occur within single quotes
    - you can put a double quote between single-quote

- double quotes "" group the characters within into a single word
    - variables and commands are expanded inside double-quotes
    - backslash can be used to escape $ “ "" ” \
    - other characters not interpreted specially inside double quotes
    - you can put a single quote between double-quotes

- << - here documents
    - <<word called a here document
    - following lines until word specify multi-line string as command input
    - variables and commands expanded - same as double quotes
    - <<‘word’ variables and commands not expanded - same as single quotes

- arithmetic: $((expression)) OR `expr expression` 
    - result repalces the expression
    - EG: $ x=8
    -     $ answer=$((x*x - 3*x + 2))
    - increment loop counter: i=`expr $i + 1` (no $ in front of first i)
    - $i = $((i + 1)) does the same thing

- I/O Redirection
    - < infile connect stdin to the file infile
    - > outfile send stdout to the file outfile
    - >> outfile append stdout to the file outfile
    - 2> outfile send stderr to the file outfile
    - 2>> outfile append stderr to the file outfile
    - > outfile 2>&1 send stderr+stdout to outfile
    - 1>&2 send stdout to stderr (handy for error messages)

- We can execute shell commands in a file
    - put #!/bin/sh on the first line to indicate the file is a shell script
    - run: ./script
    - chmod 755 * to give permission to execute all files in directory

- Shell Built-in Variables
    - $0 the program name
    - $1 the first command-line argument
    - $2 the second command-line argument
    - $9 the ninth command-line argument
    - ${10} the tenth command-line argument
    - ${255} the two hundred and fifty-fifth (last) command-line argument
    - $# count of command-line arguments
    - $* all the command-line arguments (separately)
    - "$*" all the command-line arguments (together)
    - $@ all the command-line arguments (separately)
    - "$@" all the command-line arguments (as quoted)
    - $? exit status of the most recent command
    - $$ process ID of this shell

- test or [ ] 
    - The test command performs a test or combination of tests and:
        - does/prints nothing
        - returns a zero exit status if the test succeeds
        - returns a non-zero exit status if the test fails
    - Lets us do:
        - string comparison: = !=
        - numeric comparison: -eq (equal) -ne (not equal) -lt (less than) -ge (greater than or equal ...)
        - test if file exists/is executable/is readable/directory exists: -f -x -r- d
        - boolean operators (and/or/not): -a -o !
    - eg test "$x" -gt "$y" - is x greater than y?
    - same as: [ "$x" -gt "$y" ]

- if statements. Can test regular expressions: if [[ $n =~ $re ]] in double square brackets
## Example 1
if gcc main.c
then
    echo your C compiles
elif python3 main.c
    echo you have written Python not C
else
    echo program broken - send help
fi
## Example 2
if gcc a.c
then
# you can not have an empty body
# use a : statement which does nothing
    :
else
    rm a.c
fi

- while loops. Can do while true. There is break and continue
last=$1
number=1
while test $number -le "$last"
do
    echo $number
    number=$((number + 1))
done

- for loops
for a in $*
do
    echo "$a"
done

- case statement
# Classifying a file via its name
    case "$file" in
    *.c) echo "$file looks like a C source-code file" ;;
    *.h) echo "$file looks like a C header file" ;;
    *.o) echo "$file looks like a an object file" ;;
    ?) echo "$file's name is too short to classify" ;;
    *) echo "I have no idea what $file is" ;;
esac

- read is a shell builtin which reads a line of input into variables(s)

- shell functions
    - function arguments passed in: $@ $1 $2 . . .
    - use return to stop function execution and return exit status: return 0
    - beware: exit in a function still terminates entire program

repeat_message() {
    n=$1
    message=$2
    for i in $(seq 1 $n)
    do
        echo "$i: $message"
    done
}
i=0
while test $i -lt 4
do
    repeat_message 3 "hello Andrew"
    i=$((i + 1))
done

- sleep 1 suspends execution for a second
- kill sends a signal to a process, which by default causes it to exit
- > chuck into file (overwrite)
- >> append into file
- Put “time” before a program and its arguments and to see how long it takes to execute
- Use && and ||
- Cp “file1” “file2” || exit - if the copy fails, then it will exit and not continue. failsafe
