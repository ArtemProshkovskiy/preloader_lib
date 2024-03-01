/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
<<<<<<< HEAD
=======
    "@storybook/addon-docs", // Add this line to enable the docs addon
>>>>>>> c1f2c0047a80e197a3c13bdf4c4d18d4f80e8d47
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
<<<<<<< HEAD
    autodocs: true,
=======
    autodocs: 'tag',
>>>>>>> c1f2c0047a80e197a3c13bdf4c4d18d4f80e8d47
  },
};

export default config;
