module.exports = {
  stories: ["../stories/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-google-analytics",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
};
