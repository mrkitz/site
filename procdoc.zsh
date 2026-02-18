#!/bin/zsh
# Stop on errors:
set -e

INPUT="index.md"
OUTPUT="index.html"
TEMPLATE="template.html"
CSS="style.css"

pandoc "$INPUT" \
  --standalone \
  --template="$TEMPLATE" \
  --css="$CSS" \
  --toc \
  --toc-depth=2 \
  -o "$OUTPUT"

