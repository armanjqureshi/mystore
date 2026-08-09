# Your Shop — Starter Site

A catalog site with search/filters and WhatsApp ordering (no payment gateway).
Runs entirely on free tiers.

## 1. First things first — edit `lib/config.js`

Open `lib/config.js` and fill in:
- `name`: The Great Dahanu Shop (HomeHeaven)
- `whatsappNumber`: your WhatsApp number in international format, digits only
  (e.g. a Mumbai number 98765 43210 becomes `"919503690140"`)
- `phoneDisplay`: how you want your number shown on the site

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) installed (any recent LTS version).

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site works right away using the sample
products in `lib/products.js`, so you can see the full design before
connecting anything else.

## 3. Set up free product management (Sanity)

This is what lets you add/edit products from a simple screen, without touching code.

1. Go to https://www.sanity.io and create a free account.
2. Run `npx sanity@latest init` in a **separate** folder (not this project) —
   this creates your Sanity Studio (the admin screen).
   - Choose "Create new project"
   - Choose the empty/blank template
   - Note the **Project ID** it gives you
3. In that new Sanity project, copy `sanity/schemas/product.js` from this
   project into your Studio's schema folder, and register it in
   `schemaTypes/index.js` (Sanity's setup wizard shows you where).
4. Run `npm run dev` inside your Sanity Studio folder — it opens a local
   admin screen where you can start adding products.
5. Deploy your Studio for free so you can edit from anywhere:
   `npx sanity deploy` (gives you a free `yourshop.sanity.studio` URL).
6. Back in **this** project, create a file called `.env.local` with:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
7. Restart `npm run dev` — the site will now pull products from Sanity
   instead of the sample data automatically (see `lib/products.js`).
8. In Sanity's project settings → API → CORS origins, add your local URL
   (`http://localhost:3000`) and later your live site URL, both with
   "allow credentials" unchecked (not needed here).

You do **not** need to touch any code to add a product after this —
just open your Sanity Studio, click "Product" → "New", fill in the fields,
and it appears on your live site automatically.

## 4. Deploy the site for free (Vercel)

1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign up free, click "New Project", and import
   the repo.
3. Add the same two environment variables from step 3.6 above in Vercel's
   project settings (Environment Variables).
4. Deploy — you get a free `yourshop.vercel.app` URL immediately.
5. (Optional, paid) Buy a domain and connect it in Vercel's Domains tab if
   you want `yourshopname.com` instead.

## Project structure

- `app/page.js` — homepage
- `app/shop/` — catalog page with filters
- `components/` — product card, filter bar, cart drawer
- `lib/products.js` — sample data + Sanity fetch (auto-switches once connected)
- `lib/config.js` — your shop name & WhatsApp number
- `sanity/schemas/product.js` — the schema to paste into your Sanity Studio

## How ordering works

There's no payment gateway. Customers browse, add items to a list (stored
only in their browser tab), then tap "Order via WhatsApp" — this opens
WhatsApp with a pre-filled message listing everything they picked, sent
straight to your number.
