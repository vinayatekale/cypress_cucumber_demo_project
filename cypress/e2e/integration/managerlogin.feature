Feature: New customer Account creation by Bank Manager

@test
Scenario: Validate bank manager can create new customer account
Given I access the bank application
And click on Bank Manager Login button
And click on Add Customer button
When I enter the first name 'User A', last name 'User A last name' and Postcode 'EH11 1AF'
And I click on Add Customer button
Then New customer account should be created.


Scenario: Validate that Bank Manager can add multiple customers
Given I access the bank application
And click on Bank Manager Login button
And click on Add Customer button
When I enter the following user credentials
| firstName | lastName | postCode |
| UserBfname  | UserBlname | EH11 1AF |
| UserCfname  | UserClname | EH12 1AF |
And I click on Add Customer button
Then New customer account should be created.

