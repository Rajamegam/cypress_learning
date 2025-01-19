describe('alerts', () => {
    /**
     * four types of alerts are there
     * 1. javascript alert : it will have some text and have 'OK' button
     * 2. javascript confirm alert : it will have some text and have 'OK' and 'Cancel' button
     * 3. javascript prompt alert: It will have some text with a text box for user input along with 'ok' and 'cancel' button
     * 4. Authenticated alert
     */
    it('normal alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')

        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    it('positive confirmation alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')


    })
    it.only('cancel confirmation alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm', () => false)
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    it('javascript prompt alert', () => {
        /**
         * if we need to pass any text in the window alert
         * we need to trigger the event, before opening the alert window
         * 
         */
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text', 'You entered: Welcome')
    })
    it('javascript prompt alert-negative tc', () => {
        /**
         * if we need to pass any text in the window alert
         * we need to trigger the event, before opening the alert window
         * 
         */
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:prompt', () => false)
        cy.get('#result').should('have.text', 'You entered: Welcome')
    })
    it("Authenticated alert", () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: "admin",
                password: "admin"
            }
        })
        cy.get('p').should('have.contain', 'Congratulations!You must have the proper credentials')



    })
})