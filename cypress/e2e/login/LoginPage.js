class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com');
        cy.url().should('include', 'saucedemo'); // Ensure we're on the correct page
        cy.get('#login-button', { timeout: 15000 }).should('be.visible');
    }

    fillUsername(username) {
        cy.get('#user-name').should('be.visible').type(username);
    }

    fillPassword(password) {
        cy.get('#password').should('be.visible').type(password);
    }

    submit() {
        cy.get('#login-button').should('be.visible').click();
    }
}

export default LoginPage;