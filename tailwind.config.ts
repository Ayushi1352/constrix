import type { Config } from "tailwindcss";

/*
  The design is drawn on a 1686px wide canvas. Every spacing utility is one
  "design pixel" (w-388 = 388px in the design, leading-30 = 30px) and font sizes
  are written as text-[N/16 rem]. From 1280px up the root font size follows the
  viewport (set on <html> in app/layout.tsx), so the desktop layout keeps the
  design's exact proportions on every screen.
*/
const designPixels = Object.fromEntries(
  Array.from({ length: 2001 }, (_, n) => [n, n === 0 ? "0" : `${n / 16}rem`]),
);

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    spacing: { px: "1px", ...designPixels },
    extend: {
      lineHeight: designPixels,
      opacity: { 8: "0.08", 12: "0.12" },
      gradientColorStopPositions: { "42%": "42%" },
      borderColor: {
        DEFAULT: "currentColor",
      },
      colors: {
        copper: {
          DEFAULT: "var(--color-copper)",
          light: "var(--color-copper-light)",
          dark: "var(--color-copper-dark)",
        },
        flame: "var(--color-flame)",
        tangerine: "var(--color-tangerine)",
        nav: "var(--color-nav)",
        ink: "var(--color-ink)",
        coal: "var(--color-coal)",
        night: "var(--color-night)",
        panel: "var(--color-panel)",
        cream: "var(--color-cream)",
        peach: "var(--color-peach)",
        mist: "var(--color-mist)",
        slate: "var(--color-slate)",
      },
      fontFamily: {
        main: ["var(--font-primary)"],
        heading: ["var(--font-heading)"],
        alt: ["var(--font-alt)"],
        display: ["var(--font-display)"],
        ui: ["var(--font-ui)"],
        text: ["var(--font-text)"],
      },
    },
  },
  plugins: [],
};
export default config;
