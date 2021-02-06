# Bash

## Standard streams

- standard output
  - stdout
- standard input
  - stdin
- standard error
  - stderr

Standard for almost all unix application. Piping output, input, error from the same place

## Redirection

- `|` read from stdout
- `>` write stdout to file
- `>>` append stdout to file
- `<` read from stdin
- `2>` read from stderr

`/var/log` is where we store our logs



## Finding things

On a Linux system, there are 2 ways to find anything

1. `find` command to find files
2. `grep` to find content using regex. `zgrep` searches inside of gzip files

`find` e.g 

```bash
find /bar -name foo.txt
```

Useful options

- `-name`
- `-type`
- `-empty`
- `-executable`
- `-writable` 

