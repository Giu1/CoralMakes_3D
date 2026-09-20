# FORMA — atelier de impressão 3D

Placeholder site for a future shop: collect emails, show five product niches, and list pieces already coming off a **Bambu Lab A2L**.

**Catálogo (fotos e textos):** lê [COMO-EDITAR.md](COMO-EDITAR.md) — tutorial curto em PT-BR. Tudo o que vendes está em `js/products.js` + pasta `images/`.

Languages: **Português de Portugal**, **Português do Brasil**, **English**. The page follows the browser language, and visitors can switch with PT / BR / EN.

## Preview locally

Open the folder and serve it (opening `index.html` as a file also works):

```bash
npx --yes serve .
```

Or on Windows PowerShell:

```powershell
python -m http.server 8765
```

Then visit `http://localhost:8765`.

## Collect emails (required)

GitHub Pages cannot store form data. Point the waitlist at your inbox:

1. Open `js/config.js`.
2. Set `ownerEmail` to the address that should receive leads.

```js
window.FORMA_CONFIG = {
  ownerEmail: "you@yourmail.com",
  formspreeId: "",
  instagram: "",
  shopYear: "2026"
};
```

The site uses [FormSubmit.co](https://formsubmit.co) (free). The **first** real submission sends a confirmation mail to that address — open it and click the link once. After that, every waitlist signup arrives as an email (address, optional name, language, niches).

Alternative: create a form on [Formspree](https://formspree.io) and put the form id in `formspreeId` instead of `ownerEmail`.

Until one of those is set, the form shows an error instead of pretending to save emails.

## Host for free

### GitHub Pages

1. Create a GitHub repository (for example `forma-atelier`).
2. Upload this folder (or `git push` from here).
3. Repo **Settings → Pages → Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` (or `master`), folder `/ (root)`
4. After a minute the site is at `https://YOUR_USER.github.io/forma-atelier/`
5. If you want the site at `https://YOUR_USER.github.io`, name the repo `YOUR_USER.github.io` and put these files at the root.

Paths in the project are relative, so a project-page URL works.

### Cloudflare Pages or Netlify

Drag this folder onto [Cloudflare Pages](https://pages.cloudflare.com) or [Netlify Drop](https://app.netlify.com/drop). No build command, publish directory = the folder itself.

## What you can edit

| File | What it does |
| --- | --- |
| `js/config.js` | Your email, Formspree id, Instagram URL, quote rates |
| `COMO-EDITAR.md` | Tutorial PT-BR: fotos e descrições |
| `js/products.js` | Catálogo: foto, nome, texto, preço |
| `images/` | Fotos dos produtos |
| `js/quote.js` | Browser-side print estimate (STL volume + photo band) |
| `js/i18n.js` | All copy in PT-PT, PT-BR, EN |
| `index.html` | Page structure |
| `styles.css` | Look |

The five niches are:

1. Personalized keychains  
2. Anime / comic figurines (complex, multi-part)  
3. Tabletop miniatures  
4. Home décor and desk objects  
5. Cosplay and large-format props  

Rename the five niches in `js/products.js` (`FORMA_NICHES`) and the matching titles in `js/i18n.js`. Product photos, names and blurbs live only in `js/products.js`.

Replace the geometric drawings later with photos: put images in an `images/` folder and swap the SVG thumbs in `js/app.js` (`svgFor`).

## Print estimate

There is **no library that takes a photo and returns a real factory cost**. Image-to-3D APIs (Meshy, Tripo, PrintPal) build a mesh; Quote3D / a local Orca or Cura engine can price an STL. Both need paid keys or a backend, which GitHub Pages cannot hide.

The site therefore estimates **in the browser**:

- **STL:** mesh volume, bounding box, fit on the A2L (330 × 320 × 325 mm), PLA/PETG grams and a price band.
- **Photo:** a band from target height + niche + detail. Clearly not a slice.

Tune rates in `FORMA_CONFIG.quote`. Files never leave the visitor's machine unless they join the waitlist, which then sends a text summary only.

## Notes

- Original designs only on the public catalog — the footer states there are no official anime / comic / game licences.
- Prices are in euro and marked as starting-from, so they stay honest as a placeholder.
- The waitlist asks for consent (GDPR-style). Privacy copy is at the bottom of the page.
- No cookies except `localStorage` for the language choice.
