import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-white',
    'bg-green-500',
    'bg-green-200',
    'bg-green-700',
    'bg-green-900'
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
export default config;
