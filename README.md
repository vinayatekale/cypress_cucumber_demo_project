This Cypress-Cucumber basic framework for UI, API tests.

**Pre-requisites:**
1. Nodejs
   
**Installation**
1. Install project dependencies with: npm i

**Running the Tests**
1. Can run tests in parallel e.g. npm run cy:parallel [dependency - cypress-parallel]
2. Can run specific scenario using tags e.g. npx cypress run -env tags="@test"  [dependency - @bdeball/cypress-cucumber-preprocessor]
3. It generates basic html report. [dependency - cypress-mochawesome-reporter]
4. npx cypress run - to run all tests & generates basic html report inside 'cypress/reports/html'
