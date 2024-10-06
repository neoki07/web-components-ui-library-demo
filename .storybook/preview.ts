import type { Preview } from "@storybook/web-components";
import { withScreenshot } from "storycap";

export const decorators = [withScreenshot];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
