@contact-us @regression
Feature: webdriveruniversity - contact form 

Background: webdriveruniversity navigation homepage
    Given I navigate to the Webdriveruniversity homepage
    When I click on the contact us button

Scenario: Valid contact form submission
    And I type a first name
    And I enter a last name
    And I enter a email address
    And I enter a comment
    And I click on Submit button 
    Then The system displayed a successful contact us submission message

@smoke
Scenario: Invalid contact us form submission 
    And I type a first name
    And I enter a last name
    And I enter a comment
    And I click on Submit button 
    Then The system displayed a unsuccessful contact us submission message


Scenario: Valid contact form submission - Using specific data
    And I type a specific first name "Sarah"
    And I type a specific last name "Wood"
    And I type a specific email "sarah_wood@gmail.com"
    And I type a specific word 'Star Wars' and number 2025 within the comment input field
    And I click on Submit button 
    Then The system displayed a successful contact us submission message

Scenario Outline: Valid contact form submission 
    And I type a specific first name <firstName> and a last name '<lastName>'
    And I type a specific email '<emailAddress>' and a '<comment>'
    And I click on Submit button 
    Then I should be presented with header text '<message>' 

    Examples: 
    | firstName | lastName  | emailAddress       | comment            | message                      |
    | Marie     | Fortin    | mfortin@gmail.com  | This is the way    | Thank You for your Message!  |
    | Margot    | Robbie    | mrobbie@gmail.com  | Harley Queen Rules | Thank You for your Message!  |
    | Goerges   | Clooney   | gclooney@ | I love chips       | Error: Invalid email address |