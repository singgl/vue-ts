const path = require("path");
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
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
  chainWebpack: (config) => {
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/icons")) //处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        // extract: true,
        // spriteFilename: `sprite_9.svg`,
        symbolId: "icon-[name]",
      });
  },
};
