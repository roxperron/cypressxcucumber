/// <reference types="cypress" />
import { When ,Then } from "@badeball/cypress-cucumber-preprocessor"

When('I type a first name', () => {
    cy.get('[name=first_name]').type("Joe");
})

When('I enter a last name', () => {
    cy.get('[name=last_name]').type("Bob");
})

When('I enter a email address', () => {
    cy.get('[name=email]').type("joebob@gmail.com");
})

When('I enter a comment', () => {
    cy.get('textarea[name="message"]').type("This is the way");
})

When('I click on Submit button', () => {
    cy.get('[type="submit"]').click();   
})

Then('The system displayed a successful contact us submission message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!');
})

Then('The system displayed a unsuccessful contact us submission message', () => {
    cy.get('body').contains('Error: Invalid email address');
})

When('I type a specific first name {string}', (firstName) => {
    cy.get('[name=first_name]').type(firstName);
    })

When('I type a specific last name {string}', (lastName) => {
    cy.get('[name=last_name]').type(lastName);
    })

When('I type a specific email {string}', (email) => {
    cy.get('[name=email]').type(email);
    })

When('I type a specific word {string} and number {int} within the comment input field', (word, int) => {
    cy.get('textarea[name="message"]').type(word, int);
    })

When('I type a specific first name {word} and a last name {string}', (firstName, lastName) => {
    cy.get('[name=first_name]').type(firstName);
    cy.get('[name=last_name]').type(lastName);
})    

When('I type a specific email {string} and a {string}', (email, comment) => {
    cy.get('[name=email]').type(email);
    cy.get('textarea[name="message"]').type(comment);
})

Then('I should be presented with header text {string}', (message) => {
    cy.xpath("//h1 | //body").contains(message);
})
