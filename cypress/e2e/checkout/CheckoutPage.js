class CheckoutPage {
    proceedToCheckout(){
        cy.get('#checkout').should('be.visible').click();
    }

    fillCheckoutDetails(firstName, lastName, postalCode) {
        cy.get('#first-name').should('be.visible').type(firstName);
        cy.get('#last-name').should('be.visible').type(lastName);
        cy.get('#postal-code').should('be.visible').type(postalCode);
        cy.get('#continue').should('be.visible').click();
    }

    validateCheckoutOverView(){
        // Step 7: Validate order summary before finishing
        cy.get('.summary_info').should('be.visible');
        cy.get('.summary_info').within(() => {
            // Validate Payment Information (if static)
            cy.get('[data-test="payment-info-label"]').should('have.text','Payment Information:');
            cy.get('[data-test="payment-info-value"]').should('have.text', 'SauceCard #31337');

            // Validate Shipping Information (if static)
            cy.get('[data-test="shipping-info-label"]').should('have.text','Shipping Information:');
            cy.get('[data-test="shipping-info-value"]').should('have.text', 'Free Pony Express Delivery!');
        });
    }

    finishPurchase() {
        cy.get('#finish').should('be.visible').click();
    }

    verifyOrderConfirmation() {
        cy.get('.complete-header').should('be.visible').should('contain.text', 'Thank you for your order');
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}

export default CheckoutPage;