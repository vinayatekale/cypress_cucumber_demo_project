Feature: Customer Login and Money Withdrawal

Scenario Outline: Validate customer can login and withdraw money
Given I access the bank application
And click on Customer Login button
When I enter the customer name 'Hermoine Granger'
And I click on Login button
And I withdraw money '100'
Then Money should be withdrawn successfully

Scenario Outline: Validate customer can login and withdraw money multiple times
Given I access the bank application
And click on Customer Login button
When I enter the customer name '<customerName>'
And I click on Login button
And I withdraw money '<amount>'
Then Money should be withdrawn successfully
Examples:
    | customerName|amount |
    | Hermoine Granger | 100 |
    | Harry Potter | 200 |