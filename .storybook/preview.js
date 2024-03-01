/** @type { import('@storybook/react').Preview } */
import React from "react";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered', // Center the elements in the preview
  },
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        gap: '20px',
        height: '100%',
      }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
