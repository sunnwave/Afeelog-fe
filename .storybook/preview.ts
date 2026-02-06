import type { Preview } from "@storybook/nextjs-vite";
import "../src/styles/globals.css";
import "../src/styles/theme.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "app", value: "#FFFBF3" },
        { name: "dark", value: "#111827" },
      ],
      default: "app",
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
