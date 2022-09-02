/// <reference types="Cypress" />

describe('Order Management', () => {

    const customerEmail = 'testuser+customer@eservsol.com';
    const password = 'testuser123';

    beforeEach(() => {
        cy.visit('');
        cy.get('input[formcontrolname="email"]').click().type(customerEmail);
        cy.get('input[formcontrolname="password"]').type(password);
        cy.get('app-login').get('ion-button[type=submit]').last().click();
    })

    it.only('user can create order draft', () => {
        cy.get('app-home').get('ion-menu-button').last().click();
        cy.contains('New Order').click();
        cy.get('ion-menu').click();

        cy.get(':nth-child(1) > app-order-type-option > img').click();
        cy.intercept(
            {
              method: 'GET', // Route all GET requests
              url: 'api/v1/locations/', // that have a URL that matches '/users/*'
            },
            [
                {
                    "id": 1,
                    "company": 1,
                    "name": "asdasdasd",
                    "address": "asd",
                    "city": "asdasd",
                    "zip_code": "1224",
                    "remark": null
                }
            ]
        )

        cy.intercept(
            {
              method: 'GET', // Route all GET requests
              url: '/api/v1/machines/?location=1', // that have a URL that matches '/users/*'
            },
            [
                {
                    "id": 1,
                    "location": 1,
                    "type": "dasdasd",
                    "manufacturer": "sasd",
                    "serial_number": "asdasdasda",
                    "remark": null
                }
            ]
        )

        cy.intercept(
            {
              method: 'POST', // Route all GET requests
              url: '/api/v1/orders', // that have a URL that matches '/users/*'
            },
            {
                "id": 90,
                "location": 1,
                "machine": 1,
                "documents": [],
                "type": "EMERGENCY_REPAIR",
                "area": "PLANTS",
                "descripiton": "ada",
                "contact_person_full_name": "sad",
                "contact_person_phone": "423",
                "contact_person_email": "a@a.com",
                "needs_fix_in_hours": 2,
                "status": "DRAFT",
                "created_at": "2021-05-05T07:35:45+0000",
                "last_updated_at": "2021-05-05T07:35:45+0000",
                "service_provider": null,
                "skills": [],
                "experience": [],
                "certificates": [],
                "candidate_service_providers": []
            }
        )

        cy.get(':nth-child(5) > ion-row.md > :nth-child(1)').click();

        cy.get('mat-select[formControlName=location]').click()
            .get('mat-option').first().click();


        cy.get('mat-select[formControlName=machine]').click()
            .get('mat-option').first().click();
        cy.get('textarea[formcontrolname=descripiton').click().type('adssd');
        cy.get('input[formcontrolname="contact_person_full_name"').click().type('adssd');
        cy.get('input[formcontrolname="contact_person_phone"').click().type('12312');
        cy.get('input[formcontrolname="contact_person_email"').click().type('dasad@adad.com');
        cy.get('mat-select[formControlName=needs_fix_in_hours]').click()
            .get('mat-option').first().click();

        cy.contains('Search').click();
        cy.url().should('includes', '/search');
    });

});