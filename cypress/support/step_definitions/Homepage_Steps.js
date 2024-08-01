/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

//const url = "https://www.webdriveruniversity.com/";

//const basePage = new Base_PO();
const homePage = new Homepage_PO();

Before(() => {
    cy.log("Executing commands inside homepage steps");
})

Given(`I navigate to the webdriveruniversity homepage`, () => {
    //cy.visit(url);
   homePage.navigate("");
})


When(`I click on the contact us button`, () => {
    //cy.get('#contact-us').invoke("removeAttr", "target").click();
    homePage.clickOn_ContactUs_Button();
})


When(`I click on the login portal button`, () => {
    //cy.get('#login-portal').invoke("removeAttr", "target").click();
    homePage.clickOn_Login_Button();
})

When(`I click on the to do list`, () => {
    //cy.get('#login-portal').invoke("removeAttr", "target").click();
    cy.clickAndOpenLink_InSameTab("#ewfewgfewg")
})
