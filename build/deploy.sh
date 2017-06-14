echo "Deploying current `dist` to `gh-pages`"
git subtree push --prefix dist origin gh-pages

function echoblue {
  echo "\x1B[1;34m${1}\x1B[0m"
}

echo "Deploy complete."

dt=$(date)
ts=$(date +%s)
git tag -a "Deploy$ts" -m "Deploy on $dt"
echoblue "Don't forget to git push origin Deploy$ts"
