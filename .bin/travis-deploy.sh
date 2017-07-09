#!/usr/bin/env bash
set -e

if [ $TRAVIS_BRANCH != "master" ]; then
  echo "TRAVIS_BRANCH=$TRAVIS_BRANCH"
  echo 'Not deploying.'
  exit 0
fi

cp ./.bin/404.html ./dist/404.html # gh-pages history Api Fallback for 404
cd dist

git init
git config user.name 'kamataryo@travis'
git config user.email "kamataryo@users.noreply.github.com"
git remote add origin git@github.com:kamataryo/react-redux-typescript-boilerplate.git

git checkout -b gh-pages
git add .
git commit -m "Deploy [made in travis cron]"
git push -f origin gh-pages
