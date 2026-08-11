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
  tagline: "[YOUR TAGLINE — one funny line about you]",
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
    "[SHORT INTRO — two or three sentences in your own voice. Who you are, what you talk about on stage, and why people keep coming back.]",
  cards: [
    {
      title: "My comedy style",
      body: "[YOUR STYLE — observational, storytelling, crowd work, one-liners, absurd? Say it the way you'd say it to a friend.]",
    },
    {
      title: "My background",
      body: "[YOUR BACKGROUND — how you started, how long you've been doing this, what you did before comedy.]",
    },
    {
      title: "Where I perform",
      body: "[WHERE YOU PERFORM — clubs, theaters, festivals, corporate rooms, colleges, that one bar with the weird lighting.]",
    },
    {
      title: "What makes it different",
      body: "[WHAT MAKES YOUR COMEDY UNIQUE — the thing nobody else on the lineup is doing.]",
    },
  ],
  stats: [
    { value: "[__]", label: "Years on stage" },
    { value: "[__]", label: "Shows a year" },
    { value: "[__]", label: "Comedians coached" },
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

/** Shows are loaded live from the schedule API (see src/config/shows.ts). */

export const coachingSkills = [
  { title: "Writing jokes", body: "[HOW YOU TEACH WRITING — premise, angle, tags, rewrites.]" },
  { title: "Stage presence", body: "[STAGE PRESENCE — owning the room, mic technique, movement.]" },
  { title: "Delivery & timing", body: "[DELIVERY & TIMING — pacing, pauses, where the laugh lives.]" },
  { title: "Finding your voice", body: "[COMEDIC VOICE — how we find the version of you that's funniest.]" },
  { title: "Performing live", body: "[PERFORMING — prepping sets, handling bombs, reading a room.]" },
  { title: "Developing material", body: "[MATERIAL — turning five okay minutes into a tight ten.]" },
  { title: "Getting better at stand-up", body: "[PROGRESS — practice structure, recording, honest feedback.]" },
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
  { label: "Comedy Coaching", to: "/coaching" },
  { label: "Schedule", to: "/schedule" },
  { label: "Book Me", to: "/book" },
  { label: "Contact", to: "/contact" },
] as const;
