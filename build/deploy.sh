echo "Deploying current `dist` to `gh-pages`"
# git subtree push --prefix dist origin gh-pages

CUR_DIR=`pwd`
reset_dir () {
  cd $CUR_DIR
}
trap reset_dir EXIT SIGINT SIGKILL SIGTERM

function echoblue {
  echo "\x1B[1;34m${1}\x1B[0m"
}

dt=$(date)
ts=$(date +%s)

cd dist && \
$(npm bin)/rimraf .git
git init && \
git add . && \
git commit -m "Deploy to GitHub Pages $dt" && \
git push --force "${GIT_DEPLOY_REPO}" master:gh-pages \
git tag -a "Deploy$ts" -m "Deploy to GitHub Pages $dt"

echo "Deploy complete."
cd $CUR_DIR
git tag -a "Deploy$ts" -m "Deploy to GitHub Pages $dt"
echoblue "Don't forget to git push origin Deploy$ts"
