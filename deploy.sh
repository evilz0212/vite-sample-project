vite build
git checkout -b temp
git add -f dist
git commit --allow-empty -m 'Initial dist subtree commit'
git subtree split --rejoin --prefix dist -b gh-pages
git push -f origin gh-pages
git checkout master
git branch -D gh-pages temp