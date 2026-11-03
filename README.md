# OUTLIER — Strategic Market Development & Creative Advisory
### Brand Identity & Digital Website Experience

A premium digital web presence for **OUTLIER**, evolved from the strategic market development and creative advisory foundation and executed in accordance with the selected visual identity direction.

---

## 1. Brand Identity System

- **Brand Name:** OUTLIER
- **Tagline:** WE CREATE WAYS IN.
- **Positioning:** Strategic Market Development & Creative Advisory.
- **Brand Essence:** Perspective, unconventional strategic intelligence, and the capability to turn insight into decisive commercial action.
- **Aesthetic:** Editorial sophistication, architectural minimalism, and timeless restraint. Not a tech startup; an established international boutique advisory firm.

---

## 2. Logo Assets (`public/brand/`)

Recreated directly as clean, scalable vector SVGs based on the mountain-ridge symbol:

| File | Description | Usage |
|---|---|---|
| `outlier-logo-primary-dark.svg` | Symbol + OUTLIER + Tagline (Charcoal `#252724`) | Light & warm off-white surfaces |
| `outlier-logo-primary-light.svg` | Symbol + OUTLIER + Tagline (Warm Off-White `#F3F0E9`) | Dark & charcoal surfaces |
| `outlier-logo-secondary-dark.svg` | Symbol + OUTLIER without tagline (Charcoal) | Header nav on light surfaces |
| `outlier-logo-secondary-light.svg` | Symbol + OUTLIER without tagline (Light) | Header nav on dark surfaces / Hero |
| `outlier-symbol-dark.svg` | Mountain-ridge symbol only (Dark) | Accent / watermark / bullets |
| `outlier-symbol-light.svg` | Mountain-ridge symbol only (Light) | Watermark / dark accents |
| `outlier-icon-dark.svg` | Dark squircle app icon | Digital application / favicon |
| `outlier-icon-light.svg` | Off-white squircle app icon | Digital application / light theme |
| `favicon.svg` | Scalable vector site favicon | Browser tab icon |

A reusable React component [`components/OutlierLogo.tsx`](components/OutlierLogo.tsx) is also provided for inline rendering with props:
`variant="primary" | "secondary" | "symbol" | "wordmark"`, `theme="dark" | "light" | "current"`.

---

## 3. Color Tokens

- **Warm Off-White:** `#F3F0E9`
- **Subtle Sand / Alt Off-White:** `#EAE5DB` / `#DCD4C7`
- **Warm Stone:** `#C8C1B5`
- **Muted Olive:** `#565A50`
- **Deep Charcoal:** `#252724`
- **Soft Black:** `#151515`

---

## 4. Typography

- **Headlines (English):** *Cormorant Garamond* (Serif, refined, editorial contrast)
- **Headlines (Hebrew):** *Frank Ruhl Libre* (Editorial Hebrew serif with matching dignity)
- **Body & UI (English):** *Manrope* / *Inter* (Geometric clarity)
- **Body & UI (Hebrew):** *Assistant* / *Heebo* (High readability sans)
- **Logo Wordmark:** Uppercase with wide letter spacing (`0.36em`)

---

## 5. Editorial Photography Direction (`public/images/`)

- `hero-mountain-ridge.jpg`: Wide cinematic landscape of a rugged mountain ridge bathed in late afternoon golden light with receding hazy peaks.
- `architectural-portal.jpg`: Minimalist brutalist concrete portico with raking light and geometric shadows opening to the horizon.
- `winding-mountain-road.jpg`: Dark asphalt road carving along a mountain slope toward a misty valley.

---

## 6. Bilingual Support

- **English (LTR):** Primary language with generous whitespace and editorial alignment.
- **Hebrew (RTL):** Full Hebrew translation with mirrored navigation, inverted layout geometry, and Frank Ruhl Libre typography.
- **Language Switcher:** Seamless toggle in the header navigation and footer.

---

## 7. Running the Application

To build and run:
```bash
npm run build
npm run start -p 3088
```
Visit `http://localhost:3088`.
