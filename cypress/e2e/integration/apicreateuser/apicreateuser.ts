import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given('I create new user using API with the following details', function (dataTable: DataTable) {
    dataTable.hashes().forEach((row) => {
        cy.request("POST","https://reqbin.com/echo/post/json", row).as("createResponse").then((response) => {
          expect(response.status).to.eq(200);
        
       // AddCustomerPage.fillForm(row.firstName, row.lastName, row.postcode);  
      });
    });
});
Then('New user should be created successfully', function() {
    // cy.get('@createResponse').should((response) => {
    //     expect().to.eq(200);
    //     expect(response.body).to.have.property('success', true);
    // });
return "Pending";
});


let requestData: any[];

Given('I have following create user data for create user API', function(dataTable: DataTable) {
    requestData = dataTable.hashes().map((row) => {
    Object.keys(row).forEach((key) => {
        const value = row[key];
        if (!isNaN(Number(value))) {
          if (value.includes('.')) {
            (row as any)[key] = parseFloat(value);
          } else {
            (row as any)[key] = parseInt(value, 10);
          }
        };
      });
})
cy.wrap(requestData).as('requestData');
});

When('I post the request data to create user API', () => {
	    cy.get('@requestData').each((request) => {
            cy.request({
                method: 'POST',
                url: 'https://reqbin.com/echo/post/json',
                body: request,
                failOnStatusCode: false
            }).as('createUserResponse');
        })
});

Then('API should respond with status code {string}', (statusCode: string) => {
	    cy.get('@createUserResponse').its('status').should('eq', parseInt(statusCode));
        });
      


Given('I have following data for update user API', (dataTable:DataTable) => {
    requestData = dataTable.hashes().map((row) => {
        Object.keys(row).forEach((key) => {
            const value = row[key];
            if (!isNaN(Number(value))) {
              if (value.includes('.')) {
                (row as any)[key] = parseFloat(value);
              } else {
                (row as any)[key] = parseInt(value, 10);
              }
            };
          });
    })
    cy.wrap(requestData).as('requestData');
});

When('I send the request data to update user API', () => {
    cy.get('@requestData').each((request) => {
        cy.request({
            method: 'PUT',
            url: 'https://reqbin.com/echo/put/json',
            body: request,
            failOnStatusCode: false
        }).as('updateUserResponse');
    })
});

Then('update API should respond with status code {string}', function (statusCode: string) {
    cy.get('@updateUserResponse')
    .its('status')
    .should('eq', parseInt(statusCode));
});
        



