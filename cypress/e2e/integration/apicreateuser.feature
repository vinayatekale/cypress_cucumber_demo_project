Feature: Create New User API

Scenario: Validate that new user can be created using API
Given I create new user using API with the following details
| Id | Customer | Quantity | Price|
| 12 | UserA | 1 | 100 |
Then New user should be created successfully

Scenario: Validate create new user with different details
Given I have following create user data for create user API
| Id | Customer | Quantity | Price|
| 12 | UserA | 1 | 100 |
| 14 | UserB | 2 | 200 |
When I post the request data to create user API
Then API should respond with status code '200'

Scenario: Validate that existing user can be updated using update API
Given I have following create user data for create user API
| Id | Customer | Quantity | Price|
| 12 | UserAUPDATED | 2 | 700 |
| 14 | UserBUPDATED11 | 3 | 800 |
When I send the request data to update user API
Then update API should respond with status code '200'


