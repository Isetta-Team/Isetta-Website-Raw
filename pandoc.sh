#!/bin/bash

mkdir ./docs/interviews/docx
for filename in ./docs/interviews/*-interview.md; do
    person="$(basename "$filename" .md)"
    #echo ./pandoc.exe "$filename" -f markdown -t docx --resource-path ./docs/interviews -s -o ./docs/interviews/docx/"$person".docx
    ./pandoc.exe "$filename" -f markdown -t docx --resource-path ./docs/interviews -s -o ./docs/interviews/docx/"$person".docx
done

