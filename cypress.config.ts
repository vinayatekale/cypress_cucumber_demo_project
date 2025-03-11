import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";


export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
    // browser: 'chrome', // Set the browser here
    supportFile: false,    
    filterSpecs: true,
    async setupNodeEvents(cypressOn, config) {
      const on = require('cypress-on-fix')(cypressOn)
      require('cypress-mochawesome-reporter/plugin')(on);
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
      require('@cypress/grep/src/plugin')(config);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
        
      );
      return config;
    },env:{grep: "@test"}     
  },
});
