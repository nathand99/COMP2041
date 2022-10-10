# legit

legit a subset of the version control system Git.

USAGE

./legit-init: create a new legit repository 

./legit-add <filenames>: add filenames to index

./legit-commit [-a] -m <commit-message>: saves a copy of all files in index to repository. Optional -a flag which causes all files already in the index to have their contents from the current directory added to the index before the commit

./legit-log: prints a line for every commit made to the repository containing the commit number, and the commit message

./legit-rm [--force] [--cached] <filenames>: removes <filenames> from the index, or from the current directory and the index. If the --cached option is specified, the file is removed only from the index, and not from the current directory. The --force option will carry out the removal even if the user will lose work.

./legit-show <commit>:<filename>: print the contents of the specified filename as of the specified commit


Various testing scripts are included
