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
  name: "[YOUR NAME]",
  headline: "Comedian • Comedy Coach • Entertainer",
  tagline: "[YOUR TAGLINE — one funny line about you]",
  homeBase: "[YOUR CITY / HOME BASE]",
  email: "[YOUR EMAIL]",
  phone: "[YOUR PHONE]",
  footerJoke: "[YOUR FOOTER JOKE — something short and dumb goes here]",
};

export const socials = [
  { label: "Instagram", handle: "[INSTAGRAM]", url: "#", icon: "instagram" as const },
  { label: "TikTok", handle: "[TIKTOK]", url: "#", icon: "tiktok" as const },
  { label: "YouTube", handle: "[YOUTUBE]", url: "#", icon: "youtube" as const },
  { label: "Facebook", handle: "[FACEBOOK]", url: "#", icon: "facebook" as const },
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
  description:
    "[SHORT SHOW DESCRIPTION — what the show is, in two or three punchy sentences. Part stand-up, part game show, all about how absurdly expensive everything got.]",
  expectations: [
    {
      title: "Guess the price",
      body: "[HOW THE GAME WORKS — describe the round and what the audience has to do.]",
    },
    {
      title: "Audience in the hot seat",
      body: "[AUDIENCE PARTICIPATION — how volunteers get involved and what happens to them.]",
    },
    {
      title: "Real receipts",
      body: "[BIT DESCRIPTION — the props, receipts, or screenshots you bring on stage.]",
    },
    {
      title: "Actual prizes",
      body: "[PRIZES — what people can win, or how gloriously cheap the prizes are.]",
    },
  ],
  runtime: "[RUNTIME]",
  format: "[FORMAT — solo show, host + guests, etc.]",
  audience: "[AUDIENCE — ages, room size, vibe]",
};

export type Show = {
  id: string;
  date: string; // e.g. "[MONTH DAY, YEAR]"
  time: string;
  venue: string;
  city: string;
  showName: string;
  ticketUrl: string;
  ticketLabel?: string;
};

/** Add, remove or reorder shows here. Delete a block to remove a date. */
export const shows: Show[] = [
  {
    id: "show-1",
    date: "[DATE]",
    time: "[TIME]",
    venue: "[VENUE NAME]",
    city: "[CITY, STATE]",
    showName: "The Inflation Game",
    ticketUrl: "#",
    ticketLabel: "Get tickets",
  },
  {
    id: "show-2",
    date: "[DATE]",
    time: "[TIME]",
    venue: "[VENUE NAME]",
    city: "[CITY, STATE]",
    showName: "[SHOW NAME]",
    ticketUrl: "#",
  },
  {
    id: "show-3",
    date: "[DATE]",
    time: "[TIME]",
    venue: "[VENUE NAME]",
    city: "[CITY, STATE]",
    showName: "[SHOW NAME]",
    ticketUrl: "#",
  },
];

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