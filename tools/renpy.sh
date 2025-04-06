# replaces all dots in filenames with hyphens before the extension name
for file in *.py; do
  base="${file%.py}"         # Get the file name without extension
  new_file="${base//./-}.py" # Replace the first dot with a hyphen and add .py
  mv "$file" "$new_file"
done
