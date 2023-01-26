#!/usr/bin/env sh

set -e

npm run build:github

cd dist

echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'gh-pages'

git push -f https://github.com/inna-shutka/cryptoriance.git main:gh-pages
cd -
