import LessPlugin from '@pawjs/less/webpack';
import path from 'path';

export default class ProjectWebpack {
  constructor({ addPlugin }) {
    const options = {
      javascriptEnabled: true,
      relativeUrls: false,
      rootPath: process.env.PROJECT_ROOT,
    };
    addPlugin(new LessPlugin(options));
  }

  apply(webpackHandler) {
    webpackHandler.hooks.beforeConfig.tap('AppSemanticConfig', (env, type, config) => {
      let configs = config;
      if (!Array.isArray(config)) {
        configs = [config];
      }
      configs.forEach((wConfig) => {
        wConfig.resolve = wConfig.resolve || {};
        wConfig.resolve.alias = wConfig.resolve.alias || {};
        wConfig.resolve.alias['../../theme.config$'] = path.resolve(path.join(process.env.PROJECT_ROOT, 'src/resources/styling/theme.config'));
      });
    });
  }
}
