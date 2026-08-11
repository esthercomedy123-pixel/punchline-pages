/** Where the live show list comes from. Set VITE_SHOWS_API_URL to change it. */
export const SHOWS_API_URL =
  (import.meta.env["VITE_SHOWS_API_URL"] as string | undefined) ??
  "https://script.google.com/macros/s/AKfycbzCv6CspAYYmOhsD1HpajGAGa1VK7WtqYtc-cj211gbmOC5tDx2AbqDo6fny4RJuQ-iTA/exec";
