const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            },
          }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      'node_modules',
    ],
    extensions: ['.js','.scss']
  },
};