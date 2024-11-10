# Theme Name

## Features
- Nice to have
    - [ ] Analytics: Google, Plausible, Umami
        - https://gideonwolfe.com/posts/sysadmin/hugo/hugogoogleanalytics/
    - [ ] Robots txt
    - [ ] Google tag manager
    - [ ] Mailchimp subscribe
    - [ ] No JS links or onclick events to prevent crawling
    - [ ] Title and meta tags automation
    - [ ] Google lighthouse scores
    - [ ] Splash screen
    - [ ] Generated audio starting after splash screen
    - [ ] Ko-fi, Patreon, RSS feed, Gumroad

## Installation
```
git submodule add https://github.com/mpetteno/hugo-theme-vapor.git themes/vapor
cp -R themes/vapor/exampleSite/* .
sed -i '' 's|const themeDir = "../"|const themeDir = "./themes/vapor/"|g' postcss.config.js tailwind.config.js
sed -i '' 's|theme = "hugo-theme-vapor"|theme = "vapor"|g' config/_default/hugo.toml
sed -i '' 's|themesDir = "../.."|themesDir = "themes"|g' config/_default/hugo.toml
npm install
```
Change configuration as needed.

Run
```
huge server [--environment production]
```

## Configuration

## Example site
```
cd exampleSite
npm install
huge server [--environment production]
```
