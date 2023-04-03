import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env) => {
  const isProduction = env.NODE_ENV === "production" || env.production;

  return {
    devServer: {
      compress: true,
      port: 8080,
      static: { directory: join(__dirname, "public") },
    },
    entry: "./src/main.js",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? undefined : "source-map",
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.svg$/i,
          type: "asset/inline",
        },
      ],
    },
    output: {
      filename: "bundle.js",
      path: resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(__dirname, "public"),
            to: resolve(__dirname, "dist"),
          },
          {
            // Copy CPS Elements assets to dist/assets
            from: resolve(__dirname, "node_modules/@cps-elements/web/assets"),
            to: resolve(__dirname, "dist/assets"),
          },
        ],
      }),
    ],
  };
};
