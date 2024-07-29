/// <reference types="cypress" />

class Base_PO{
    //baseUrl= "https://www.webdriveruniversity.com/";
    "Contact-Us/contactus.html"
    navigate(path){
        cy.fixture("config.json").then((data) => {
            cy.visit(data.baseUrl + path)
        })

    }

    getPageTitle(){
        return cy.title();
    }

}

export default Base_PO;