// platformLogosWithColour.js
export const platformLogos = [
  {
    name: "wordpress",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#21759B"/>
      <path d="M8.5 8.5c1.5.5 3 4 4 6 1-2 2.5-5.5 4-6-1.8.2-4.2.3-8 0-1.1-.1-2 .1-2 0z" fill="#ffffff"/>
      <path d="M7.2 15.2c1.3-1.5 2.6-4.7 3.5-6.8 1 2.1 2.3 5.3 3.6 6.8-2.4.2-4.8.2-7.1 0z" fill="#ffffff"/>
    </svg>`
    // WordPress official blue: #21759B :contentReference[oaicite:0]{index=0}
  },

  {
    name: "shopify",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="6" width="14" height="12" rx="2" fill="#95BF47"/>
      <path d="M7 6V5a3 3 0 0 1 6 0v1" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M9 12c1.2-1 3.5-1.2 4.5 0 .6.7-1.7 2.2-2.8 2.2-1.2 0-3-1.5-1.7-2.2z" fill="#000000"/>
    </svg>`
    // Shopify colours include #95BF47 (“Android Green”) and #64943E (“Palm Leaf”) :contentReference[oaicite:1]{index=1}
  },

  {
    name: "react",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#61DAFB" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="12" rx="6.5" ry="2.9" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="6.5" ry="2.9" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="6.5" ry="2.9" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="1.6" fill="#61DAFB" stroke="none"/>
      </g>
    </svg>`
    // React official blue: #61DAFB (widely used) — make sure to check React branding.
  },

  {
    name: "vue",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 3l6.5 11.5H17L12 5.5 7 14.5H5.5L12 3z" fill="#41B883"/>
      <path d="M12 7l-3.5 6H15.5L12 7z" fill="#35495E"/>
    </svg>`
    // Vue.js typical green & dark-blue colours.
  },

  {
    name: "angular",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l8 3v6.5c0 4-3 7.5-8 8-5-0.5-8-4-8-8.5V5L12 2z" fill="#DD0031"/>
      <path d="M9.3 15h1.9l.9-2.6.9 2.6h1.9L12 7.8 9.3 15z" fill="#FFFFFF"/>
    </svg>`
    // Angular official red: #DD0031
  },

  {
    name: "nodejs",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" fill="#83CD29"/>
      <circle cx="12" cy="12" r="2" fill="#FFFFFF"/>
    </svg>`
    // Node.js green: #83CD29
  },

  {
    name: "nextjs",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#000000"/>
      <path d="M7 17V7h3l3 6v4h-3v-3l-3-.001" fill="#FFFFFF"/>
    </svg>`
    // Next.js typically uses black/white.
  },

  {
    name: "github",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#181717"/>
      <path d="M9 9c0 2-1 3-1 3s1 2 4 2 4-2 4-2-1-1-1-3c0-1.5-1-2-2-2s-2 .5-2 2c0-1.5-1-2-2-2s-2 .5-2 2z" fill="#FFFFFF"/>
    </svg>`
    // GitHub official black: #181717
  }
];
