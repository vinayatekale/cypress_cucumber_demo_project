import '../../support/commands';
class CustomerLoginPage {
    static customerLoginBtn = 'button[ng-click="customer()"]';
    static userNameDropdown = '#userSelect';
    static loginBtn = 'button[type="submit"]';
    static welcomeUserNameBanner = '//span[(text()="Hermoine Granger")]';
    static transcationsBtn = 'button[ng-click="transactions()"]';
    static depositBtn = 'button[ng-click="deposit()"]';
    static withdrawlBtn = 'button[ng-click="withdrawl()"]';
    static amountTxtBx= 'input[ng-model="amount"]';
    static transactionSuccessMsg= 'span[ng-show="message"]';
    

    public static clickCustomerLogin() {
        it('Clicking on Customer Login', () => {
            cy.clickElement(this.customerLoginBtn);
            cy.wait(4000);
        })
    };

    public static selectUserName(value: string) {
        it('Selecting the user name', () => {
            cy.selectDropdown(this.userNameDropdown,value);
            cy.wait(4000);
        })
    };

    public static clickLogin() {
        it('Clicking on Login', () => {
            cy.clickElement(this.loginBtn);
            cy.get(this.welcomeUserNameBanner).should('exist');
            cy.get(this.withdrawlBtn).should('exist');
            cy.get(this.depositBtn).should('exist');
            cy.get(this.transcationsBtn).should('exist');
            cy.wait(4000);
        })
    };

    public static withdrawMoney(amount: string){
        it('Withdrawing Money', () => {
            cy.clickElement(this.withdrawlBtn);
            cy.get(this.loginBtn).should('exist');
            cy.enterText(this.amountTxtBx,amount);
            cy.clickElement(this.loginBtn);
            cy.wait(4000);            
        })
    }
}
export default CustomerLoginPage;
