import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I open test website', () => {
  cy.visit('/')
})

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title)
  })

When('I enter invalid credentials', () => {
    cy.get('#txtUsername').type('Invalid')
    cy.get('#txtPassword').type('Invalid')
    cy.get('#btnLogin').click()
  })

Then('I see invalid credentials error message', () => {
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
  })