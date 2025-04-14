import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{svelte,md,svx}'],  // Ensure all content files are included
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100vw', // add required value here
          }
        }
      }
    },
  },
  plugins: [typography],
};
