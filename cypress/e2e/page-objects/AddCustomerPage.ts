import '../../support/commands';

class AddCustomerPage {
    static nameInput = 'input[ng-model="fName"]';
    static lastNameInput = 'input[ng-model="lName"]';
    static postCodeInput = 'input[ng-model="postCd"]';
    static addCustomerButton = 'button[type="submit"]';


    
    public static fillForm(name: string, lastName: string, postCode: string) {
   //     AddCustomerPage.fillForm(name, lastName, postCode);
        it('Filling the form', () => {
        cy.enterText(this.nameInput,name);
        cy.enterText(this.lastNameInput,lastName);
        cy.enterText(this.postCodeInput,postCode);
    })
};

    public static submitForm() {
   //     AddCustomerPage.submitForm();
        it('Submitting the form', () => {
        cy.clickElement(this.addCustomerButton);
    })
};

    
}
export default AddCustomerPage;