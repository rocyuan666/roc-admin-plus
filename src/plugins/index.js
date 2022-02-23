const files = require.context("./", false, /\.js/);

export function installAllPlugins(app) {
  files.keys().forEach((file) => {
    if (file != "./index.js") {
      files(file).default(app);
    }
  });
}
