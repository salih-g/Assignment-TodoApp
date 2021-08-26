#!/user/bin/env sh

set -e

echo Building ....
npm run build

cd dist

git config --global user.email "sudanmerinosu@gmail.com"
git config --global user.name "Salih"
git init 
git add -A
git commit -m "New Deployment"
git push -f git@github.com:sudanmerinosu/Assignment-TodoApp.git master:gh-pages

cd -