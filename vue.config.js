const { name } = require("./package.json");
process.env.VUE_APP_TITLE = name;

module.exports = {
  publicPath: "",
  assetsDir: "static",
  outputDir: "dist",
  lintOnSave: true,
  devServer: {
    open: true,
    // 代理
    // proxy: {
    //   '/api': {
    //     target: `https://luojing.top`,
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + '/api']: '',
    //     },
    //   },
    // },
    // after: require('./mock'),
  },
};
