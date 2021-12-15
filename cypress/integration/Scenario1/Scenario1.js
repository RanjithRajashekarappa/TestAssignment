import { Given } from "cypress-cucumber-preprocessor/steps";

//const url = Cypress.'https://opensource-demo.orangehrmlive.com/index.php/auth/login'
Given('I open test website', () => {
  cy.visit('/')
})

Then('I see "OrangeHRM" in the title', () => {
    cy.title().should('include', 'OrangeHRM')
  })

When('I enter invalid credentials', () => {
    cy.get('#txtUsername').type('Invalid')
    cy.get('#txtPassword').type('Invalid')
    cy.get('#btnLogin').click()
  })

Then('I see invalid credentials error message', () => {
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
  })