import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import AddCustomerPage from "../../page-objects/AddCustomerPage";
import '../../../support/commands';


Given('I access the bank application', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  });

Given('click on Bank Manager Login button', () => {
    cy.clickElement('button[ng-click="manager()"]');
  });

Given('click on Add Customer button', () => {
    cy.contains('Add Customer').click();
  });

When('I enter the first name {string}, last name {string} and Postcode {string}', (firstName: string, lastName: string, postcode: string) => {
  AddCustomerPage.fillForm(firstName, lastName, postcode);  
});

When('I enter the following user credentials', function (dataTable: DataTable)  {
 // cy.log(dataTable.hashes());
  dataTable.hashes().forEach((row) => {
    AddCustomerPage.fillForm(row.firstName, row.lastName, row.postcode);  
  });
});


When('I click on Add Customer button',()=>{
  AddCustomerPage.submitForm();
});

Then('New customer account should be created.', () => {
	cy.on('window:alert', (str) => {
        expect(str).to.contains('Customer added successfully with customer id :');
    })
});
