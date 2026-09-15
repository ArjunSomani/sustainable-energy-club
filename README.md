# LWHS Sustainable Energy Club website

A responsive one-page site for the club: purpose, goals, the Community Powering
Partners Project, and an embedded Google Form sign-up.

## Files
- `index.html`: the page content
- `styles.css`: styling (light and dark, mobile friendly)
- `script.js`: loads the Google Form and adds subtle scroll animations
- `vercel.json`: deploy config for Vercel (clean URLs, security and cache headers)

## The sign-up form
The club's Google Form is already embedded in the Join section. Responses collect
in the form's **Responses** tab (and any linked Google Sheet).

You can edit the form freely (questions, wording, theme) and the changes show up
on the site automatically, since the page loads the live form. Two exceptions:
- If you create a brand new form, paste its new embed URL into
  `data-google-form-src` on the `<iframe>` in `index.html`.
- If the form gets much longer or shorter, update `data-google-form-height` on
  that same `<iframe>` so it fits without an inner scrollbar.

## Preview locally
Open `index.html` in a browser, or run a small server:
```
python3 -m http.server 8000
```
then visit http://localhost:8000

## Deploy with Vercel
1. Import the repo at vercel.com (framework preset: Other, empty build command).
2. Set the production branch to `main` in Vercel, or make `main` the repo's
   default branch on GitHub.
3. Every push to `main` deploys to production; other branches get preview URLs.
