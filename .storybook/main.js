const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  typescript: {
    reactDocgen: 'react-docgen',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  stories: [
    '../src/ui/stories/**/*.stories.mdx',
    '../src/ui/stories/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
  ],
  webpackFinal: async (config) => {
    config.node = {
      ...config.node,
      fs: 'empty',
      browser: 'empty',
    };
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
};
