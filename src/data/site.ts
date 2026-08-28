/**
 * ============================================================
 *  EDIT EVERYTHING HERE
 * ------------------------------------------------------------
 *  This is the single place to update your name, tagline, bio,
 *  show dates, coaching packages, prices, social links and
 *  contact details. Nothing is hard-coded in the pages.
 *  Anything wrapped in [BRACKETS] or shown as $___ is a
 *  placeholder waiting for your real info.
 * ============================================================
 */

export const profile = {
  name: "Esther Forrester",
  headline: "Comedian • Comedy Coach • Entertainer",
  tagline: "Bad jokes. Great website.",
  homeBase: "New York, NY",
  email: "jessicahirshcomedy@gmail.com",
  phone: "1+ (516) 350-7971",
  footerJoke: "© 2026 — Made with questionable decisions and good intentions.",
};

export const socials = [
  { label: "Instagram", handle: "@esmakesuslaugh", url: "https://www.instagram.com/esmakesulaugh", icon: "instagram" as const },
  { label: "TikTok", handle: "@jessicahirsh", url: "https://www.tiktok.com/@jessicahirsh", icon: "tiktok" as const },
  { label: "YouTube", handle: "@elf7900", url: "https://www.youtube.com/channel/UCp4FzzQPsvClfyHAvVdvfOA", icon: "youtube" as const },
];

export const about = {
  intro:
    "Jessica Hirsh (Stage Name) is a stand-up comedian, entrepreneur, tennis coach, and comedy educator. Her style can be described as confidently awkward. She talks about life in nyc, being an entrepreneur, the nuances of being by a former athlete, dating, and more. ",
  cards: [
    {
      title: "My comedy style",
      body: "Jessica Hirsh is a Confidently Awkward Comedian with a few years of on-stage experience",
    },
    {
      title: "My background",
      body: "Jessica Hirsh started doing comedy because Jeff Bezos’ brother in law encouraged her and he was in show biz. Her career began awkwardly when she had to hit on an audience member to revive her performance after going after Jerry Seinfeld",
    },
    {
      title: "Where I perform",
      body: "Anywhere You Want! If You Think I'd Make A Good Fit Contact Me! I'd Love To Perform!",
    },
  ],
  stats: [
    { value: "3-4", label: "Years on stage" },
    { value: "50+", label: "Shows a year" },
    { value: "Too Many To Count!", label: "Comedians coached" },
  ],
};

export const inflationGame = {
  title: "The Inflation Game",
  kicker: "The signature show",
  // Your live stream link (YouTube channel, live tab, or a specific stream URL)
  streamUrl: "https://www.youtube.com/channel/UCp4FzzQPsvClfyHAvVdvfOA/live",
  description:
    "Have You Felt Like Things Have Been Getting Expensive? Me Too! Join my streams for a comedic game show trying to guess prices of many household items.",
  expectations: [
    {
      title: "Guess the price",
      body: "[HOW THE GAME WORKS — describe the round and what the audience has to do.]",
    },
    {
      title: "Audience in the hot seat",
      body: "[Volunteers can join the streams for free and help guess prices!]",
    },
    {
      title: "Real receipts",
      body: "Real receipts and screenshots of actual items",
    },
    {
      title: "Actual prizes",
      body: "[PRIZES — what people can win, or how gloriously cheap the prizes are.]",
    },
  ],
  runtime: "About an hour⏱️",
  format: "Host + Guests",
  audience: "18+ Mainly Adults",
};

export type Show = {
  id: string;
  date: string; // e.g. "[MONTH DAY, YEAR]"
  time?: string;
  venue: string;
  city: string;
  showName: string;
  ticketUrl: string;
  ticketLabel?: string;
};

/**
 * ---------------------------------------------
 *  COMEDY CLIPS — paste new video URLs here
 * ---------------------------------------------
 *  YouTube links (watch, youtu.be or Shorts) are embedded and play
 *  right on the page. TikTok / Instagram / anything else shows as a
 *  clickable card that opens the clip in a new tab.
 *  To add a clip: copy one block below, change the url + title.
 */
export type Clip = {
  title: string;
  url: string;
  blurb?: string;
};

export const clips: Clip[] = [
  {
    title: "Inflation Game Clip",
    url: "https://www.youtube.com/shorts/_RlaoHeXsI8",
    blurb: "",
  },
    {
    title: "Jillian Takes the Stage!",
    url: "https://www.youtube.com/shorts/5LQB2ffvVEY",
    blurb: "",
  },
    {
    title: "[CLIP TITLE]",
    url: "",
    blurb: "[ONE LINE ABOUT THIS CLIP]",
  },
    {
    title: "",
    url: "",
    blurb: "[ONE LINE ABOUT THIS CLIP]",
  },
    {
    title: "[CLIP TITLE]",
    url: "",
    blurb: "[ONE LINE ABOUT THIS CLIP]",
  },
];

/** Shows are loaded live from the schedule API (see src/config/shows.ts). */

/**
 * ---------------------------------------------
 *  SHOP — merch + coaching products
 * ---------------------------------------------
 *  MERCH: copy a block to add a product. Set `image` to a photo URL
 *  (leave "" for a styled placeholder tile) and `url` to a checkout
 *  link (leave "" to send buyers to the contact page instead).
 *  COACHING PACKAGES: sold as products in the shop — prices are
 *  placeholders until you fill them in.
 */
export type Product = {
  name: string;
  price: string;
  blurb: string;
  image: string; // photo URL, or "" for a placeholder tile
  url: string; // checkout/product link, or "" to use the contact page
};

export const products: Product[] = [
  {
    name: "[MERCH ITEM — e.g. Confidently Awkward Tee]",
    price: "$___",
    blurb: "[ONE LINE ABOUT THIS ITEM]",
    image: "",
    url: "",
  },
  {
    name: "[MERCH ITEM — e.g. Inflation Game Mug]",
    price: "$___",
    blurb: "[ONE LINE ABOUT THIS ITEM]",
    image: "",
    url: "",
  },
  {
    name: "[MERCH ITEM]",
    price: "$___",
    blurb: "[ONE LINE ABOUT THIS ITEM]",
    image: "",
    url: "",
  },
];

export const coachingPackages = [
  {
    name: "Individual coaching",
    price: "$___",
    unit: "per session",
    blurb: "[WHO IT'S FOR — one-on-one work on your set.]",
    includes: [
      "[SESSION LENGTH]",
      "[WHAT WE COVER]",
      "[NOTES / RECORDING INCLUDED?]",
      "[IN PERSON OR VIRTUAL]",
    ],
    featured: false,
  },
  {
    name: "Coaching package",
    price: "$___",
    unit: "for [__] sessions",
    blurb: "[WHO IT'S FOR — steady, ongoing development.]",
    includes: [
      "[NUMBER OF SESSIONS]",
      "[HOMEWORK BETWEEN SESSIONS]",
      "[SET REVIEW / VIDEO FEEDBACK]",
      "[STAGE TIME SUPPORT]",
    ],
    featured: true,
  },
  {
    name: "Group workshop",
    price: "$___",
    unit: "per person",
    blurb: "[WHO IT'S FOR — small groups and open-mic crews.]",
    includes: [
      "[GROUP SIZE]",
      "[WORKSHOP LENGTH]",
      "[WRITING EXERCISES]",
      "[SHOWCASE AT THE END?]",
    ],
    featured: false,
  },
];

export const bookingTypes = [
  "Comedy club performance",
  "Private event",
  "Corporate event",
  "Festival",
  "Hosting / MC work",
  "The Inflation Game (full show)",
  "Special comedy show",
  "Comedy coaching",
  "Something else entirely",
];

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "The Inflation Game", to: "/inflation-game" },
  { label: "Clips", to: "/clips" },
  { label: "Shop", to: "/shop" },
  { label: "Schedule", to: "/schedule" },
  { label: "Book Me", to: "/book" },
  { label: "Contact", to: "/contact" },
] as const;
