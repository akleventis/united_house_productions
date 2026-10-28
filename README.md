# United House Productions

Website for United House Productions — a house music events and artist management collective. The site is content-managed via Contentful and deployed on Netlify.

## Pages

- **Events** — upcoming shows and flyers pulled from Contentful
- **About** — bio text and image carousel, managed via Contentful
- **Booking** — contact form (EmailJS) for booking inquiries and local talent submissions
- **Merch** — product listings with a shopping cart

## Stack

- React 17, React Router v6, React Bootstrap
- Contentful (CMS for events, about content, and product images)
- EmailJS (booking contact form)
- Hosted on Netlify

## Setup

```bash
mise install                    # Node 24 (pinned in mise.toml)
mise run setup                  # secret-scanning hook + npm ci
op inject -i .env.tpl -o .env   # EmailJS + Contentful keys from 1Password
mise run dev
```

Secrets: 1Password, **Dev** vault, item **`united_house_productions`**. Variables are listed in `.env.example`. Netlify builds from `master`.
