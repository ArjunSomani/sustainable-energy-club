# LWHS Sustainable Energy Club — website

A clean, responsive one-page site for the club: purpose, goals, the Community
Powering Partners Project, and an embedded sign-up form.

## Files
- `index.html` — the page content
- `styles.css` — styling (light + dark, mobile-friendly)
- `script.js` — loads the Google Form and adds subtle scroll animations

## Connect your sign-up form (2 minutes)

The site is built to embed a **Google Form** so responses collect in a Google
Sheet you own — the easiest way to view, filter, and export sign-ups.

1. Create a Google Form (e.g. name, email/grade, why you're interested).
2. In the form, click **Send** → the **`< >`** (embed HTML) tab.
3. Copy **only the `src="..."` URL**. It looks like:
   `https://docs.google.com/forms/d/e/XXXXXXXX/viewform?embedded=true`
4. Open `index.html`, find the `<iframe>` in the **Join** section, and paste that
   URL into `data-google-form-src="..."` (replacing `PASTE_YOUR_GOOGLE_FORM_EMBED_URL_HERE`).
5. Save. The form now appears on the page automatically.

**To see responses:** open your Google Form → **Responses** tab → **Link to Sheets**.

## Preview locally
Open `index.html` in a browser, or run a tiny server:
```
python3 -m http.server 8000
```
then visit http://localhost:8000

## Publish for free with GitHub Pages
1. Push this branch/repo to GitHub.
2. Repo **Settings** → **Pages** → **Source: Deploy from a branch** → pick the
   branch and `/ (root)` → **Save**.
3. Your site goes live at `https://<username>.github.io/<repo>/`.
