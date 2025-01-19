// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional' }, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types = "Cypress"/>


// creating a new command to find and click on the label
Cypress.Commands.add("clickLink", (label) => {
    cy.get(a).contains(label).click()

})

//overwrite the already existing commands
//Cypress.Commands.overwrite('contains',)

Cypress.Commands.add("loginapp", (username, password) => {
    cy.get('#Email').type(username)
    cy.get("#pwd").type(password)
    cy.get("button").click()
})

