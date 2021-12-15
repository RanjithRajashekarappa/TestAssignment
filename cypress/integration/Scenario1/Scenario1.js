import { Given } from "cypress-cucumber-preprocessor/steps";
import invalidUser from '../../fixtures/example.json';

Given('I open test website', () => {
  cy.visit('/')
})

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title)
  })

When('I enter invalid credentials', () => {
  cy.fixture('example').then((invalidUser) => {
    cy.get('#txtUsername').type(invalidUser.InvalidName)
    cy.get('#txtPassword').type(invalidUser.InvalidPassword)
    cy.get('#btnLogin').click()
  })
  })

Then('I see invalid credentials error message', () => {
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
  })