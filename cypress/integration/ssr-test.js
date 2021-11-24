describe('SSR Test:', function () {
    // Step 1: setup the application state
    beforeEach(function () {
        cy.visit('/');
    });

    describe('Test Title:', () => {
        it('allows a user to signin', () => {
            // Step 2: Take an action (Sign in)
            // cy.get(selectors.signInPasswordInput).type("DUMMY_PASSWORD");
            // cy.get(selectors.signInSignInButton).contains('Sign In').click();

            // // Step 3: Make an assertion (Check for sign-out text)
            cy.get(`#mainTitle`).contains('Welcome to');
        });
    });

});
