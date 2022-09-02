/// <reference types="Cypress" />

const customerEmail = new Date().getTime() + '@gmail.com';
const serviceProviderEmail = new Date().getTime() + '+service_provider@gmail.com';

const password = Math.random().toString(36).slice(2);

describe('Registration', () => {

    beforeEach(() => {
        cy.clearLocalStorage();
    });

    it('user can register as customer', () => {
        cy.visit('');
        cy.contains('Register').click();
        cy.url().should('equal', Cypress.config().baseUrl + '/auth');
        cy.contains('service technician').click();
        cy.get('input[formcontrolname="first_name"]').click().type('Hemang');
        cy.get('input[formcontrolname="last_name"]').type('Kumar');
        cy.get('input[type="email"]').type(customerEmail);
        cy.get('input[type="password"]').last().type(password);
        cy.get('input[formcontrolname="phone"]').click().type('123');
        cy.get('mat-select[formControlName=company]').click()
            .get('mat-option').contains('Plant Company').click();
        cy.get('app-register').contains('Register').click();
        cy.url().should('equal', Cypress.config().baseUrl + '/home');
    });

    it('user can register as service provider', () => {
        cy.visit('');
        cy.contains('Register').click();
        cy.url().should('equal', Cypress.config().baseUrl + '/auth');
        cy.contains('new orders').click();
        cy.get('input[formcontrolname="first_name"]').click().type('Hemang');
        cy.get('input[formcontrolname="last_name"]').type('Kumar');
        cy.get('input[type="email"]').type(serviceProviderEmail);
        cy.get('input[type="password"]').last().type(password);
        cy.get('mat-select[formControlName=company]').click()
            .get('mat-option').contains('Plant Company').click();
        cy.get('input[formcontrolname="phone"]').click().type('123');
        cy.get('ion-toggle[formcontrolname="is_employee_manager"]').click();
        cy.get('ion-toggle[formcontrolname=is_location_manager]').click();
        cy.get('app-register').contains('Register').click();

        cy.url().should('equal', Cypress.config().baseUrl + '/home');
    });
});


describe('Login', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
    });

    it('user can login', () => {
        cy.visit('');
        cy.get('input[formcontrolname="email"]').click().type(customerEmail);
        cy.get('input[formcontrolname="password"]').type(password);
        cy.get('app-login').get('ion-button[type=submit]').last().click();

        cy.url().should('equal', Cypress.config().baseUrl + '/home');
    });
});

describe('Reset Password', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
    });

    it('user can trigger reset password', () => {
        cy.visit('');
        cy.contains('Reset Password').click();
        cy.get('app-reset-password').get('input[formcontrolname="email"]').last().click().type(customerEmail);
        cy.contains('Proceed').click();
    });
});
