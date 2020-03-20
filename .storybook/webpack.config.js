const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'react-docgen-typescript-loader',
        options: {
          shouldExtractLiteralValuesFromEnum: true,
        },
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      }
    ],
  });

  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  })

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
