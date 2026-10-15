# landing

Marketing landing page for **www.almashift.com**. The LMS itself lives on
Frappe Cloud at **learn.almashift.com**; this repo is only the static front door.

```
site/
  index.html    landing page (HTML + inline CSS, no build step)
  404.html      not-found page
  terms.html, privacy.html, refund.html, contact.html
                policy pages (needed for Razorpay review), styled by legal.css;
                placeholders still to fill are marked class="todo"
  favicon.svg   logo mark
  og-image.png  1200x630 link-preview image (copy of brand/og-image.png)
  CNAME         custom domain for GitHub Pages (www.almashift.com)
  robots.txt, sitemap.xml
brand/          logo mark + wordmark (SVG), mark PNGs (32/180/512), og-image.png
                og-image.html is the source: re-render with headless Chrome at 1200x630
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
| A     | `@`     | `185.199.108.153`                | apex, redirects to www     |
| A     | `@`     | `185.199.109.153`                | apex, redirects to www     |
| A     | `@`     | `185.199.110.153`                | apex, redirects to www     |
| A     | `@`     | `185.199.111.153`                | apex, redirects to www     |
| CNAME | `www`   | `almashift.github.io.`           | this landing page          |
| CNAME | `learn` | `lms-nng-vdz.nvi.frappe.cloud.`  | Frappe Learning (LMS)      |

`almashift.github.io` assumes the GitHub organization is named `almashift`.
