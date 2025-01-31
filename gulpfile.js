const balm = require('balm');
const balmConfig = require('./config/balmrc');
const env = require('./config/env');
const constants = require('./config/constants');
const individual = require('./config/individual');
require('./config/update');

balm.config = balmConfig;
if (env.updateMDC) {
  balm.afterTask = 'update:mdc';
}

balm.go(mix => {
  if (env.buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
    mix.remove(['./dist/img/photos', './dist/font/materialicons']);
  } else {
    if (env.updateMDC) {
      // clear
      mix.remove([`${constants.DEV_SOURCE.mdc}/*`]);

      // update css reset for docs
      mix.copy(constants.CSS_RESET.normalize, './docs/styles/global', {
        prefix: '_',
        extname: '.scss'
      });
      mix.copy(constants.CSS_RESET.sanitize, './docs/styles/global', {
        prefix: '_',
        extname: '.scss'
      });

      // get Material
      mix.copy(
        `${constants.DMC_SOURCE.mdc}/material-components-web.scss`,
        constants.DEV_SOURCE.mdc
      );
      constants.DMC_COMPONENTS.forEach(item => {
        mix.copy(
          `${constants.DMC_SOURCE.material}/${item}/**/{*.scss,*.js}`,
          `${constants.DEV_SOURCE.mdc}/${item}`
        );
        mix.remove(`${constants.DEV_SOURCE.mdc}/${item}/dist`);
        mix.remove(`${constants.DEV_SOURCE.mdc}/${item}/node_modules`);
      });

      // Get Material Icons (Deprecated)
      // mix.copy(
      //   `${constants.DMC_SOURCE.icon}/*.{css,eot,ttf,woff,woff2}`,
      //   constants.DEV_SOURCE.mdi
      // );
    } else {
      if (balm.config.isProd) {
        // clear individual
        mix.remove([
          individual.output.components,
          individual.output.plugins,
          individual.output.directives,
          individual.output.utils
        ]);

        // build individual
        const individualBuild = [
          'components',
          'plugins',
          'directives',
          'utils'
        ];
        individualBuild.forEach(buildName => {
          // let buildFiles = individual[buildName].map(item => {
          //   return `${individual.input[buildName]}/${item}`;
          // });
          // mix.js(buildFiles, individual.output[buildName]);
          individual[buildName].forEach(async item => {
            await mix.js(
              [`${individual.input[buildName]}/${item}`],
              individual.output[buildName],
              {
                output: {
                  library: 'BalmUI_' + item.split('.')[0]
                }
              }
            );
          });
        });

        mix.copy(['./dist/css/*.css', './dist/js/*.js'], './dist');
        mix.copy('./dist/css/components/*', './components');
        mix.copy('./dist/css/plugins/*', './plugins');
        mix.copy('./dist/css/directives/*', './directives');
        mix.remove(['./dist/css', './dist/js']);

        mix.copy(
          './src/material-design-icons/v41/*.{ttf,woff,woff2}',
          './fonts'
        );
      }
    }
  }
});
