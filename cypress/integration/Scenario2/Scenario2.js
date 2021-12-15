import { Given } from "cypress-cucumber-preprocessor/steps";

//const url = 'https://opensource-demo.orangehrmlive.com/index.php/auth/login'
var username
var password

Given('I open test website', () => {
  cy.visit('/')
})

Then('I see "OrangeHRM" in the title', () => {
    cy.title().should('include', 'OrangeHRM')
  })

  When('I fetch the valid test credentials from website', () => {
    cy.get('#content > div:nth-child(3) > span').invoke('text').then((text1) => {
        cy.log(text1)
        var credentials = text1.split('|').map(e => e.split(':'));
        cy.log('username', credentials[0][1])
        username = credentials[0][1].trim()
        cy.log('password', credentials[1][1])
        password = credentials[1][1].replace(/[()]/g,'').trim()
    })
  })
And('I enter valid test credentials', () => {
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)
    cy.get('#btnLogin').click()
  })

Then('I am successfully logged in', () => {
    cy.get('#welcome').then(() => {
        cy.log('User has successfully logged in')
    })
  })

And('I see the correct user name', () => {
    cy.get('#welcome').invoke('text').then((text)=> {
        cy.log('The user name is' , text)
    })
    
})