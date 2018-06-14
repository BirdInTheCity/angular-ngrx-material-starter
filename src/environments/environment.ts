// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const packageJson = require('../../package.json');

export const environment = {
  appName: 'Angular Ngrx Material Starter',
  envName: 'DEV',
  firebase: {
    apiKey: 'AIzaSyDSIdeefZPbx-eflbME2SMMZFwEljT4P_k',
    databaseURL: 'https://bl-toolkit.firebaseio.com',
    storageBucket: 'bl-toolkit.appspot.com',
    authDomain: 'bl-toolkit.firebaseapp.com',
    messagingSenderId: '498445371323',
    projectId: 'bl-toolkit'
  },
  production: false,
  test: false,
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
  }
};
