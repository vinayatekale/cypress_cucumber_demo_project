import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CustomerLoginPage from "../../page-objects/CustomerLoginPage";
//import '../../support/commands';
import '../../../support/commands';

Given('I access the bank application', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  });

Given('click on Customer Login button', () => {
	CustomerLoginPage.clickCustomerLogin();
});

When('I enter the customer name {string}', (customerName: string) => {
	CustomerLoginPage.selectUserName(customerName);
});

When('I click on Login button', () => {
	CustomerLoginPage.clickLogin();
});

When('I withdraw money {string}', (amount: string) => {
	CustomerLoginPage.withdrawMoney(amount);
});

Then('Money should be withdrawn successfully', () => {
	cy.get(CustomerLoginPage.customerLoginBtn).should('exist');    
});




