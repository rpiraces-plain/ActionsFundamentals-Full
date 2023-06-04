#!/bin/sh -l

echo "Checking current weather in $1"

weather=$(curl -s "wttr.in/$1?format=3" | tr '\n' ' ')
echo "weather=$weather" >> "$GITHUB_OUTPUT"
