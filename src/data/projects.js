/**
 * SELECTED WORK
 * Project previews live in public/projects/.
 */

export const projects = [
  {
    number: '01',
    title: 'UNSEEN — Streetwear',
    category: 'E-COMMERCE / WEB DEVELOPMENT',
    description:
      'A cinematic streetwear storefront built with React. UNSEEN combines editorial art direction, a video-led hero, interactive 3D details, product discovery, and a responsive shopping experience.',
    stack: [
      'React',
      'JavaScript',
      'Supabase',
      'React Router',
      'React Three Fiber',
      'Motion',
    ],
    highlights: [
      'Shop, product details, collections, lookbook, wishlist, and bag',
      'Cinematic intro and video-led hero with reduced-motion fallback',
      'Interactive 3D presentation and Supabase-powered authentication',
      'Demo checkout UI — no real payments or orders are processed',
    ],
    live: 'https://z-unseen.vercel.app/',
    repo: 'https://github.com/Ziad-HA/UNSEEN',
    image: '/projects/nobi-preview.webp',
    alt: 'UNSEEN streetwear storefront preview',
  },
  {
    number: '02',
    title: 'D4RK — Streetwear Accessories',
    category: 'E-COMMERCE / WEB DEVELOPMENT',
    description:
      'A dark streetwear accessories storefront made in Alexandria. It features a cinematic home page, product discovery, collections, and an Egyptian-market checkout experience.',
    stack: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'React Router',
      'GSAP',
      'Motion',
    ],
    highlights: [
      'Shop with category filters, search, product pages, and collections',
      'Persistent cart and Egyptian checkout interface',
      'GSAP-powered 3D tilt, depth, and scroll motion with touch-friendly behavior',
      'Demo checkout — payment options are presented, but real payments are not processed',
    ],
    live: 'https://d4rk.eu.org/',
    liveLabel: 'VISIT LIVE SITE',
    repo: 'https://github.com/Ziad-HA/D4RK',
    image: '/projects/d4rk-preview.webp',
    alt: 'D4RK streetwear accessories website preview',
  },
  {
    number: '03',
    title: 'NOBI Coach',
    category: 'ONLINE COACHING / WEB DEVELOPMENT',
    description:
      'An online coaching platform with a bold editorial interface, coaching programs, packages, client results, feedback, booking, and practical fitness tools.',
    stack: [
      'React',
      'JavaScript',
      'Motion',
      'React Router',
      'jsPDF',
      'Vite',
    ],
    highlights: [
      'Programs, coaching packages, results, client feedback, and booking flow',
      'Interactive calculator and branded A4 PDF generation',
      'Payment information with copy-to-clipboard interactions',
      'Responsive layouts and motion-led section transitions',
    ],
    live: 'https://nobi-coach.vercel.app/',
    repo: 'https://github.com/Ziad-HA/COACHING',
    image: '/projects/nobi-coach-preview.jpg',
    alt: 'NOBI Coach website preview',
  },
]
