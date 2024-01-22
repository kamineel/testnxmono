window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    workspaces: [
      {
        id: 'local',
        label: 'local',
        projectGraphUrl: 'project-graph.json',
        taskGraphUrl: 'task-graph.json'
      }
    ],
    defaultWorkspaceId: 'local',
  };
  window.projectGraphResponse = {"hash":"15c9a8bc7e8aa2afa59f3058ae1d6346145be3caed03e198f023803ab4196de7","projects":[{"name":"app1-e2e","type":"e2e","data":{"tags":[],"root":"apps/app1-e2e","files":[{"file":"apps/app1-e2e/.eslintrc.json","hash":"4c5989b23b5aa8cc7aba2a07d1ae7daee19c1555"},{"file":"apps/app1-e2e/cypress.config.ts","hash":"22f7c84eb637d4f23447fcb59dee130dd25b2de0","deps":["npm:cypress","npm:@nrwl/cypress"]},{"file":"apps/app1-e2e/project.json","hash":"455f92ad897be616926bc76d6246682fbeb1fcc5"},{"file":"apps/app1-e2e/src/e2e/app.cy.ts","hash":"0e01634f04247f39df791fd284284743f9436704"},{"file":"apps/app1-e2e/src/fixtures/example.json","hash":"294cbed6ce9e0b948b787452e8676aee486cb3be"},{"file":"apps/app1-e2e/src/support/app.po.ts","hash":"32934246969c2ecb827ac05677785933a707a54d"},{"file":"apps/app1-e2e/src/support/commands.ts","hash":"310f1fa0e043ffebbbcf575c5a4d17f13a6b14d6"},{"file":"apps/app1-e2e/src/support/e2e.ts","hash":"3d469a6b6cf31eb66117d73e278bcf74f398f1db"},{"file":"apps/app1-e2e/tsconfig.json","hash":"9e27f75c6fadf5f6175f48ca953d551089aef787"}],"targets":{"e2e":{"inputs":["default","^production"],"executor":"@nrwl/cypress:cypress","options":{"cypressConfig":"apps/app1-e2e/cypress.config.ts","devServerTarget":"app1:serve:development","testingType":"e2e"},"configurations":{"production":{"devServerTarget":"app1:serve:production"}}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json"],"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/app1-e2e/**/*.{js,ts}"]},"configurations":{}}}}},{"name":"lib1-e2e","type":"e2e","data":{"tags":[],"root":"apps/lib1-e2e","files":[{"file":"apps/lib1-e2e/.eslintrc.json","hash":"696cb8b12127425419f6d2809c5f15a5963d86de"},{"file":"apps/lib1-e2e/cypress.config.ts","hash":"2611ba86c3f0015e0141a05608bb256e330f283e","deps":["npm:cypress","npm:@nrwl/storybook"]},{"file":"apps/lib1-e2e/project.json","hash":"002d59b77afb7bd3f1aeebce66f066624cf9ad17"},{"file":"apps/lib1-e2e/src/e2e/banner-bar/banner-bar.component.cy.ts","hash":"11d05ccf174463767c6ade9651bef3d115161c92"},{"file":"apps/lib1-e2e/src/fixtures/example.json","hash":"294cbed6ce9e0b948b787452e8676aee486cb3be"},{"file":"apps/lib1-e2e/src/support/commands.ts","hash":"310f1fa0e043ffebbbcf575c5a4d17f13a6b14d6"},{"file":"apps/lib1-e2e/src/support/e2e.ts","hash":"3d469a6b6cf31eb66117d73e278bcf74f398f1db"},{"file":"apps/lib1-e2e/tsconfig.json","hash":"cc509a730e12498509bb7475f6f54b1a18021191"}],"targets":{"e2e":{"inputs":["default","^production"],"executor":"@nrwl/cypress:cypress","options":{"cypressConfig":"apps/lib1-e2e/cypress.config.ts","devServerTarget":"lib1:storybook","testingType":"e2e"},"configurations":{"ci":{"devServerTarget":"lib1:storybook:ci"}}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json"],"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/lib1-e2e/**/*.{js,ts}"]},"configurations":{}}}}},{"name":"app1","type":"app","data":{"tags":[],"root":"apps/app1","files":[{"file":"apps/app1/.eslintrc.json","hash":"1540b6348f17ba8f6e0c4d9fffc19b8c07c3dcf9"},{"file":"apps/app1/jest.config.ts","hash":"9bb17bc9d1787c5972747b6470b4c5b4813f81db"},{"file":"apps/app1/project.json","hash":"61e0a8c3914e04438fc6eab45b405f622e76f168"},{"file":"apps/app1/src/app/app.component.html","hash":"58e857c9dc95c9b787c63c08bceeba20836e0d24"},{"file":"apps/app1/src/app/app.component.scss","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/app1/src/app/app.component.spec.ts","hash":"8d8f434db957105a329b0942351a58806fc6d20a","deps":["npm:@angular/core"]},{"file":"apps/app1/src/app/app.component.ts","hash":"4ad6c31d109a0a749b4eb92ca6c326573e1ab89e","deps":["npm:@angular/core"]},{"file":"apps/app1/src/app/app.module.ts","hash":"ca4cff2f830a9ae53ecd2ee9e5ecff7282c211f6","deps":["npm:@angular/core","npm:@angular/platform-browser"]},{"file":"apps/app1/src/app/nx-welcome.component.ts","hash":"14340abe072a509c243844d5cf51a79605e19867","deps":["npm:@angular/core"]},{"file":"apps/app1/src/assets/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/app1/src/favicon.ico","hash":"317ebcb2336e0833a22dddf0ab287849f26fda57"},{"file":"apps/app1/src/index.html","hash":"dd1f2385aeffddb84b525af8dede1da293f2cc73"},{"file":"apps/app1/src/main.ts","hash":"17a5cd4e0acab76fc50883a7833b33e1046c6d97","deps":["npm:@angular/platform-browser-dynamic"]},{"file":"apps/app1/src/styles.scss","hash":"7e7239a2eeea2a25f548d2e04302921d28c2a27e"},{"file":"apps/app1/src/test-setup.ts","hash":"1100b3e8a6ed08f4b5c27a96471846d57023c320","deps":["npm:jest-preset-angular"]},{"file":"apps/app1/tsconfig.app.json","hash":"fff4a41d444a486d4cf163be19f8601e0510c270"},{"file":"apps/app1/tsconfig.editor.json","hash":"8ae117d96293c675141bebfc2fad8c5df58429d3"},{"file":"apps/app1/tsconfig.json","hash":"e01cf19bd9d5ff6c8db1b3c2e180e5d79e6999b1"},{"file":"apps/app1/tsconfig.spec.json","hash":"f6a7d97bb8d04fb3cb2ddeab186d1e2a0a560a13"}],"targets":{"build":{"dependsOn":["^build"],"inputs":["production","^production"],"executor":"@angular-devkit/build-angular:browser","outputs":["{options.outputPath}"],"options":{"outputPath":"dist/apps/app1","index":"apps/app1/src/index.html","main":"apps/app1/src/main.ts","polyfills":["zone.js"],"tsConfig":"apps/app1/tsconfig.app.json","inlineStyleLanguage":"scss","assets":["apps/app1/src/favicon.ico","apps/app1/src/assets"],"styles":["@angular/material/prebuilt-themes/deeppurple-amber.css","apps/app1/src/styles.scss"],"scripts":[]},"configurations":{"production":{"budgets":[{"type":"initial","maximumWarning":"500kb","maximumError":"1mb"},{"type":"anyComponentStyle","maximumWarning":"2kb","maximumError":"4kb"}],"outputHashing":"all"},"development":{"buildOptimizer":false,"optimization":false,"vendorChunk":true,"extractLicenses":false,"sourceMap":true,"namedChunks":true}},"defaultConfiguration":"production"},"serve":{"executor":"@angular-devkit/build-angular:dev-server","configurations":{"production":{"browserTarget":"app1:build:production"},"development":{"browserTarget":"app1:build:development"}},"defaultConfiguration":"development"},"extract-i18n":{"executor":"@angular-devkit/build-angular:extract-i18n","options":{"browserTarget":"app1:build"}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json"],"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/app1/**/*.ts","apps/app1/**/*.html"]},"configurations":{}},"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nrwl/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"apps/app1/jest.config.ts","passWithNoTests":true},"configurations":{}}}}},{"name":"lib1","type":"lib","data":{"tags":[],"root":"libs/lib1","files":[{"file":"libs/lib1/.eslintrc.json","hash":"1540b6348f17ba8f6e0c4d9fffc19b8c07c3dcf9"},{"file":"libs/lib1/.storybook/main.js","hash":"99a41144f65246ef899be46774334bb7462273d7"},{"file":"libs/lib1/.storybook/preview.js","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"libs/lib1/.storybook/tsconfig.json","hash":"606b221a101947274bb8b632b7ce80cc2609459b"},{"file":"libs/lib1/jest.config.ts","hash":"8a9f1e4eef6e12b611bc7c784f9d0ed1f36a842c"},{"file":"libs/lib1/project.json","hash":"fecefa30c118ae9d0691a3b270d1ba3af756c7f4"},{"file":"libs/lib1/README.md","hash":"0614282a6b5b699db60e55eba9a38637465ea4c0"},{"file":"libs/lib1/src/index.ts","hash":"bb9b302c487bcc37e79f360c4a0db040993a4417"},{"file":"libs/lib1/src/lib/banner-bar/banner-bar.component.html","hash":"2048df4865a7d8444a5126cb7e96774cbf932d84"},{"file":"libs/lib1/src/lib/banner-bar/banner-bar.component.scss","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"libs/lib1/src/lib/banner-bar/banner-bar.component.spec.ts","hash":"7f5cb26c31de016f8775c6ffcfedbf1209e2b88a","deps":["npm:@angular/core"]},{"file":"libs/lib1/src/lib/banner-bar/banner-bar.component.stories.ts","hash":"7dcb1dd8454b5d089205a6f187eb1397d4835859","deps":["npm:@storybook/angular"]},{"file":"libs/lib1/src/lib/banner-bar/banner-bar.component.ts","hash":"431f799574b7bad97d30f4b82e6f03e9c1613974","deps":["npm:@angular/core"]},{"file":"libs/lib1/src/lib/lib1.module.ts","hash":"78d6851affe93b6df1cbc6ff95f5617eca9dc563","deps":["npm:@angular/core","npm:@angular/common"]},{"file":"libs/lib1/src/test-setup.ts","hash":"1100b3e8a6ed08f4b5c27a96471846d57023c320","deps":["npm:jest-preset-angular"]},{"file":"libs/lib1/tsconfig.json","hash":"c5ab1e5582f6b8a0f68784eec3fee2c1e152e3d7"},{"file":"libs/lib1/tsconfig.lib.json","hash":"bc9d6f45ce23c1994151582c8eb894bd712fccda"},{"file":"libs/lib1/tsconfig.spec.json","hash":"f6a7d97bb8d04fb3cb2ddeab186d1e2a0a560a13"}],"targets":{"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nrwl/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"libs/lib1/jest.config.ts","passWithNoTests":true},"configurations":{}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json"],"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["libs/lib1/**/*.ts","libs/lib1/**/*.html"]},"configurations":{}},"storybook":{"executor":"@storybook/angular:start-storybook","options":{"port":4400,"configDir":"libs/lib1/.storybook","browserTarget":"lib1:build-storybook","compodoc":false},"configurations":{"ci":{"quiet":true}}},"build-storybook":{"inputs":["default","^production","{workspaceRoot}/.storybook/**/*"],"executor":"@storybook/angular:build-storybook","outputs":["{options.outputDir}"],"options":{"outputDir":"dist/storybook/lib1","configDir":"libs/lib1/.storybook","browserTarget":"lib1:build-storybook","compodoc":false},"configurations":{"ci":{"quiet":true}}}}}}],"dependencies":{"app1-e2e":[{"source":"app1-e2e","target":"app1","type":"implicit"}],"lib1-e2e":[{"source":"lib1-e2e","target":"lib1","type":"implicit"}],"app1":[],"lib1":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};
    window.taskGraphResponse = {"taskGraphs":{"app1-e2e:e2e":{"roots":["app1-e2e:e2e"],"tasks":{"app1-e2e:e2e":{"id":"app1-e2e:e2e","target":{"project":"app1-e2e","target":"e2e"},"projectRoot":"apps/app1-e2e","overrides":{}}},"dependencies":{"app1-e2e:e2e":[]}},"app1-e2e:e2e:production":{"roots":["app1-e2e:e2e:production"],"tasks":{"app1-e2e:e2e:production":{"id":"app1-e2e:e2e:production","target":{"project":"app1-e2e","target":"e2e","configuration":"production"},"projectRoot":"apps/app1-e2e","overrides":{}}},"dependencies":{"app1-e2e:e2e:production":[]}},"app1-e2e:lint":{"roots":["app1-e2e:lint"],"tasks":{"app1-e2e:lint":{"id":"app1-e2e:lint","target":{"project":"app1-e2e","target":"lint"},"projectRoot":"apps/app1-e2e","overrides":{}}},"dependencies":{"app1-e2e:lint":[]}},"lib1-e2e:e2e":{"roots":["lib1-e2e:e2e"],"tasks":{"lib1-e2e:e2e":{"id":"lib1-e2e:e2e","target":{"project":"lib1-e2e","target":"e2e"},"projectRoot":"apps/lib1-e2e","overrides":{}}},"dependencies":{"lib1-e2e:e2e":[]}},"lib1-e2e:e2e:ci":{"roots":["lib1-e2e:e2e:ci"],"tasks":{"lib1-e2e:e2e:ci":{"id":"lib1-e2e:e2e:ci","target":{"project":"lib1-e2e","target":"e2e","configuration":"ci"},"projectRoot":"apps/lib1-e2e","overrides":{}}},"dependencies":{"lib1-e2e:e2e:ci":[]}},"lib1-e2e:lint":{"roots":["lib1-e2e:lint"],"tasks":{"lib1-e2e:lint":{"id":"lib1-e2e:lint","target":{"project":"lib1-e2e","target":"lint"},"projectRoot":"apps/lib1-e2e","overrides":{}}},"dependencies":{"lib1-e2e:lint":[]}},"app1:build":{"roots":["app1:build:production"],"tasks":{"app1:build:production":{"id":"app1:build:production","target":{"project":"app1","target":"build","configuration":"production"},"projectRoot":"apps/app1","overrides":{}}},"dependencies":{"app1:build:production":[]}},"app1:build:production":{"roots":["app1:build:production"],"tasks":{"app1:build:production":{"id":"app1:build:production","target":{"project":"app1","target":"build","configuration":"production"},"projectRoot":"apps/app1","overrides":{}}},"dependencies":{"app1:build:production":[]}},"app1:build:development":{"roots":["app1:build:development"],"tasks":{"app1:build:development":{"id":"app1:build:development","target":{"project":"app1","target":"build","configuration":"development"},"projectRoot":"apps/app1","overrides":{}}},"dependencies":{"app1:build:development":[]}},"app1:serve":{"roots":["app1:serve:development"],"tasks":{"app1:serve:development":{"id":"app1:serve:development","target":{"project":"app1","target":"serve","configuration":"development"},"projectRoot":"apps/app1","overrides":{}}},"dependencies":{"app1:serve:development":[]}},"app1:serve:production":{"roots":["app1:serve:production"],"tasks":{"app1:serve:production":{"id":"app1:serve:production","target":{"project":"app1","target":"serve","configuration":"production"},"projectRoot":"apps/app1","overrides":{}}},"dependencies":{"app1:serve:production":[]}},"app1:serve:development":{"roots":["app1:serve:development"],"tasks":{"app1:serve:development":{"id":"app1:serve:development","target":{"project":"app1","target":"serve","configuration":"development"},"projectRoot":"apps/app1","overrides":{}}},"dependencies":{"app1:serve:development":[]}},"app1:extract-i18n":{"roots":["app1:extract-i18n"],"tasks":{"app1:extract-i18n":{"id":"app1:extract-i18n","target":{"project":"app1","target":"extract-i18n"},"projectRoot":"apps/app1","overrides":{}}},"dependencies":{"app1:extract-i18n":[]}},"app1:lint":{"roots":["app1:lint"],"tasks":{"app1:lint":{"id":"app1:lint","target":{"project":"app1","target":"lint"},"projectRoot":"apps/app1","overrides":{}}},"dependencies":{"app1:lint":[]}},"app1:test":{"roots":["app1:test"],"tasks":{"app1:test":{"id":"app1:test","target":{"project":"app1","target":"test"},"projectRoot":"apps/app1","overrides":{}}},"dependencies":{"app1:test":[]}},"lib1:test":{"roots":["lib1:test"],"tasks":{"lib1:test":{"id":"lib1:test","target":{"project":"lib1","target":"test"},"projectRoot":"libs/lib1","overrides":{}}},"dependencies":{"lib1:test":[]}},"lib1:lint":{"roots":["lib1:lint"],"tasks":{"lib1:lint":{"id":"lib1:lint","target":{"project":"lib1","target":"lint"},"projectRoot":"libs/lib1","overrides":{}}},"dependencies":{"lib1:lint":[]}},"lib1:storybook":{"roots":["lib1:storybook"],"tasks":{"lib1:storybook":{"id":"lib1:storybook","target":{"project":"lib1","target":"storybook"},"projectRoot":"libs/lib1","overrides":{}}},"dependencies":{"lib1:storybook":[]}},"lib1:storybook:ci":{"roots":["lib1:storybook:ci"],"tasks":{"lib1:storybook:ci":{"id":"lib1:storybook:ci","target":{"project":"lib1","target":"storybook","configuration":"ci"},"projectRoot":"libs/lib1","overrides":{}}},"dependencies":{"lib1:storybook:ci":[]}},"lib1:build-storybook":{"roots":["lib1:build-storybook"],"tasks":{"lib1:build-storybook":{"id":"lib1:build-storybook","target":{"project":"lib1","target":"build-storybook"},"projectRoot":"libs/lib1","overrides":{}}},"dependencies":{"lib1:build-storybook":[]}},"lib1:build-storybook:ci":{"roots":["lib1:build-storybook:ci"],"tasks":{"lib1:build-storybook:ci":{"id":"lib1:build-storybook:ci","target":{"project":"lib1","target":"build-storybook","configuration":"ci"},"projectRoot":"libs/lib1","overrides":{}}},"dependencies":{"lib1:build-storybook:ci":[]}}}};
    