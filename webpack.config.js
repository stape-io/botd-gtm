const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'botd-gtm': './src/botd.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    clean: true,
    chunkFormat: 'commonjs',
    filename: '[name].js',
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
      optionalChaining: false,
      templateLiteral: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'head',
      minify: false,
      scriptLoading: 'blocking',
    }),
    // new HtmlInlineScriptPlugin(),
  ],
  devServer: {
    port: 3000,
    hot: false,
  },
};
