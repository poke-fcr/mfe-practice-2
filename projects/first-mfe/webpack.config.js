const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'first-mfe',

  exposes: {
    // './Component': './projects/first-mfe/src/app/app.component.ts',
    './MfeHomeModule': './projects/first-mfe/src/app/mfe-home/mfe-home.module',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
