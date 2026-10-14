# landing

Marketing landing page for **www.almashift.com**. The LMS itself lives on
Frappe Cloud at **learn.almashift.com**; this repo is only the static front door.

```
site/
  index.html    landing page (HTML + inline CSS, no build step)
  404.html      not-found page
  favicon.svg   logo mark
  CNAME         custom domain for GitHub Pages (www.almashift.com)
  robots.txt, sitemap.xml
.github/workflows/pages.yml   deploys site/ to GitHub Pages on push to main
```

## Edit locally

Open `site/index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000 --directory site
# then open http://localhost:8000
```

## Deploy

Every push to `main` publishes `site/` via GitHub Actions.

One-time setup in the GitHub repo: **Settings > Pages > Build and deployment > Source: GitHub Actions**,
then set **Custom domain** to `www.almashift.com` and tick **Enforce HTTPS** once the certificate is issued.

## DNS (Namecheap > Advanced DNS)

| Type  | Host    | Value                            | Serves                     |
|-------|---------|----------------------------------|----------------------------|
| ALIAS | `@`     | `almashift.github.io.`           | apex, redirects to www     |
| CNAME | `www`   | `almashift.github.io.`           | this landing page          |
| CNAME | `learn` | `lms-nng-vdz.nvi.frappe.cloud.`  | Frappe Learning (LMS)      |

`almashift.github.io` assumes the GitHub organization is named `almashift`.
