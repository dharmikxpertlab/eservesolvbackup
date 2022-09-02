/// <reference types="Cypress" />

describe('Location Management', () => {

    const customerEmail = 'testuser+customer@eservsol.com';
    const password = 'testuser123';

    beforeEach(() => {
        cy.visit('');
        cy.get('input[formcontrolname="email"]').click().type(customerEmail);
        cy.get('input[formcontrolname="password"]').type(password);
        cy.get('app-login').get('ion-button[type=submit]').last().click();
    })

    it('user can access location management page as customer', () => {
        cy.get('app-home').get('ion-menu-button').last().click();
        cy.contains('Location Management').click();
        cy.get('ion-menu').click();
    });

    it('user can add new location as customer', () => {
        const location = new Date().getTime() + ' Standort';
        cy.get('app-home').get('ion-menu-button').last().click();
        cy.get('ion-menu-toggle').contains('Location Management').click();
        cy.get('ion-backdrop').last().click({force: true});
        cy.get('.mat-focus-indicator.ng-star-inserted > .mat-button-wrapper').click();
        cy.get('input[formControlName="name"').click().type(location);
        cy.get('input[formControlName="address"').click().type('Address A');
        cy.get('input[formControlName="zip_code"').click().type('12345');
        cy.get('input[formControlName="city"').click().type('Hamburg');

        cy.intercept({
            method: "POST",
            url: "/api/v1/locations/",
        }).as("save");


        cy.get('app-form-footer').contains('Save').click();
        cy.wait("@save");

        cy.get('app-form-footer').contains('Back').click();
        cy.url().should('equal', Cypress.config().baseUrl + '/locations');
        cy.contains(location);
    });

    it('user can edit location as customer', () => {
        const location = new Date().getTime() + ' Standort';
        cy.get('app-home').get('ion-menu-button').last().click();
        cy.get('ion-menu-toggle').contains('Location Management').click();
        cy.get('ion-backdrop').last().click({force: true});
        cy.get('.mat-focus-indicator.ng-star-inserted > .mat-button-wrapper').click();
        cy.get('input[formControlName="name"').click().type(location);
        cy.get('input[formControlName="address"').click().type('Address A');
        cy.get('input[formControlName="zip_code"').click().type('12345');
        cy.get('input[formControlName="city"').click().type('Hamburg');

        cy.intercept({
            method: "POST",
            url: "/api/v1/locations/",
        }).as("save");


        cy.get('app-form-footer').contains('Save').click();

        cy.get('app-form-footer').contains('Back').click();

        cy.wait("@save");

        cy.visit(Cypress.config().baseUrl + '/locations');

        cy.intercept({
            method: "GET",
            url: "**/api/v1/locations/**",
        }).as("locationGet");

        cy.contains(location).click();

        cy.wait('@locationGet');

        cy.get('input[formControlName="name"').click().clear().type(location + 'update');
        cy.get('input[formControlName="address"').click().clear().type('Address A update');
        cy.get('input[formControlName="zip_code"').click().clear().type('12345 update');
        cy.get('input[formControlName="city"').click().clear().type('Hamburg update');

        cy.intercept({
            method: "PATCH",
            url: '/api/v1/locations/**',
        }).as("update");

        cy.get('app-form-footer').contains('Save').click();

        cy.wait("@update");

        cy.get('app-form-footer').contains('Back').click();
        cy.url().should('equal', Cypress.config().baseUrl + '/locations');
        cy.contains(location + 'update');
    });
});