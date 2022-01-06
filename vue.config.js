module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: "Index Page",
      resolve: {
        extensions: [".ts", ".js", ".tsx", ".json"],
      },
      devtool:
        process.env.NODE_ENV === "production"
          ? "hidden-source-map"
          : "eval-source-map",
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
            exclude: /node_modules/,
          },
          {
            test: /\.vue$/,
            loader: "vue-loader",
          },
        ],
      },
    },
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    host: "0.0.0.0",
    open: true,
    port: 9999,
    proxy: null,
    hot: true,
    progress: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    // 压缩
    compress: true,
  },
  productionSourceMap: false,
  crossorigin: "", // use-credentials/anonymous
  css: {
    // 是否使用css分离插件
    extract: true,
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
    },
  },
  pluginOptions: {},
};
