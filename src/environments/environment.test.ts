const packageJson = require('../../package.json');

export const environment = {
  appName: 'Broadway Life Toolkit',
  envName: 'TEST',
  production: false,
  test: true,
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    fontAwesome:
      packageJson.dependencies['@fortawesome/fontawesome-free-webfonts'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  },
  firebase: {
    apiKey: 'AIzaSyDSIdeefZPbx-eflbME2SMMZFwEljT4P_k',
    databaseURL: 'https://bl-toolkit.firebaseio.com',
    storageBucket: 'bl-toolkit.appspot.com',
    authDomain: 'bl-toolkit.firebaseapp.com',
    messagingSenderId: '498445371323',
    projectId: 'bl-toolkit'
  }
};
