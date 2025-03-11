/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


Cypress.Commands.add('clickElement',(elementLocator) => {
    cy.get(elementLocator)
    .should('exist')
    .should('be.visible').click();
})
Cypress.Commands.add('enterText',(txtFieldLocator, value) => {
    cy.get(txtFieldLocator)
    .should('exist')
    .should('be.visible').type(value);
})

Cypress.Commands.add('selectDropdown',(dropdownLocator, value) => {
    cy.get(dropdownLocator).select(value);
})

declare global {
    namespace Cypress {
        interface Chainable {
            clickElement (elementLocator: string): Chainable<void>;
            enterText(txtFieldLocator: string, value: string): Chainable<void>;
            selectDropdown(dropdownLocator: string, value: string): Chainable<void>;
        }
    }
}