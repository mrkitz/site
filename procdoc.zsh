#!/bin/zsh

TEMPLATE="template.html"
CSS="style.css"

for file in *.md; do
  # skip if no match
  [[ -e "$file" ]] || continue
  [[ "$file" == "README.md" ]] && continue

  base="${file%.md}"

  echo "Processing $file → $base.html"

  pandoc "$file" \
    --template="$TEMPLATE" \
    --css="$CSS" \
    --toc \
    --toc-depth=3 \
    --standalone \
    -o "$base.html"
done
