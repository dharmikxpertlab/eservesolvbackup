/// <reference types="Cypress" />

describe('Machine Management', () => {

    const customerEmail = 'testuser+customer@eservsol.com';
    const password = 'testuser123';

    let locationResponse;

    beforeEach(() => {
        const location = new Date().getTime() + ' Standort';
        cy.visit('');
        cy.get('input[formcontrolname="email"]').click().type(customerEmail);
        cy.get('input[formcontrolname="password"]').type(password);
        cy.get('app-login').get('ion-button[type=submit]').last().click();
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
        cy.wait("@save").then((r) => {
            locationResponse = r.response.body;
        });
        cy.get('app-form-footer').contains('Back').click();
        cy.url().should('equal', Cypress.config().baseUrl + '/locations');
    })

    it('user can access machine management page as customer', () => {
        cy.get('app-locations-list').contains(locationResponse.name).click();

        cy.contains('Machine Management').click();
        cy.get('app-machines-list.ng-star-inserted > ion-content.md > .list-md > .ion-margin-top > .mat-stroked-button > .mat-button-wrapper').click();
    });

    it('user can add new machine as customer', () => {
        cy.get('app-locations-list').contains(locationResponse.name).click();

        const manufacturer = new Date().getTime() + ' Manufacturer';

        cy.contains('Machine Management').click();
        cy.get('app-machines-list.ng-star-inserted > ion-content.md > .list-md > .ion-margin-top > [routerlinkactive="router-link-active"]').click();

        cy.get('input[formControlName="manufacturer"').click().type(manufacturer);
        cy.get('input[formControlName="type"').click().type('12345');
        cy.get('input[formControlName="serial_number"').click().type('Serial 12123');

        cy.intercept({
            method: "POST",
            url: "/api/v1/machines/",
        }).as("machineSave");


        cy.get('app-machine-edit.ng-star-inserted > app-form-footer > .ion-no-border > .ion-margin-bottom > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait("@machineSave");

        cy.get('app-machine-edit.ng-star-inserted > app-form-footer > .ion-no-border > .ion-margin-bottom > :nth-child(1) > .mat-focus-indicator').click();
        cy.url().should('includes', '/machines');
        cy.contains(manufacturer);
    });

    it('user can add edit machine as customer', () => {
        cy.get('app-locations-list').contains(locationResponse.name).click();

        const manufacturer = new Date().getTime() + ' Manufacturer';

        cy.contains('Machine Management').click();
        cy.get('app-machines-list.ng-star-inserted > ion-content.md > .list-md > .ion-margin-top > .mat-stroked-button > .mat-button-wrapper').click();

        cy.get('input[formControlName="manufacturer"').click().type(manufacturer);
        cy.get('input[formControlName="type"').click().type('12345');
        cy.get('input[formControlName="serial_number"').click().type('Serial 12123');

        cy.intercept({
            method: "POST",
            url: "/api/v1/machines/",
        }).as("machineSave");


        cy.get('app-machine-edit.ng-star-inserted > app-form-footer > .ion-no-border > .ion-margin-bottom > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait("@machineSave");

        cy.visit(`/locations/${locationResponse.id}/machines`);
        cy.url().should('includes', '/machines');

        cy.intercept({
            method: "GET",
            url: "**/api/v1/machines/**",
        }).as("machineGet");

        cy.contains(manufacturer).click();
        cy.wait("@machineGet");
        const newManufacturer = new Date().getTime() + ' New Manufacturer';

        cy.get('input[formControlName="manufacturer"').click().focused().clear().type(newManufacturer);
        cy.get('input[formControlName="type"').click().clear().type('12345');
        cy.get('input[formControlName="serial_number"').click().clear().type('Serial 12123');


        cy.intercept({
            method: "PATCH",
            url: "**/api/v1/machines/**",
        }).as("machineUpdate");


        cy.get('app-machine-edit.ng-star-inserted > app-form-footer > .ion-no-border > .ion-margin-bottom > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait("@machineUpdate");

        cy.get('app-machine-edit.ng-star-inserted > app-form-footer > .ion-no-border > .ion-margin-bottom > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.url().should('includes', '/machines');
        cy.contains(newManufacturer);
    });
});