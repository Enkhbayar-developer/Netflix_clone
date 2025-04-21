const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "app"),
    },
    watchFiles: ["./app/**/*.html"],
    hot: true,
    port: 8080,
    host: "0.0.0.0",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-import"),
                  require("postcss-mixins"),
                  require("postcss-simple-vars"),
                  require("postcss-nested"),
                  require("autoprefixer"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
