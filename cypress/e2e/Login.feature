@login @regression
Feature: webdriveruniversity - Login


    Background: webdriveruniversity navigation homepage
        When I wait for 5 seconds

    Scenario Outline:  Valid and invalid login credentials
        Given I navigate to the Webdriveruniversity homepage
        When I click on the login portal button
        And I type a username <username>
        And I type a password <password>
        And I click on the Login button
        Then The system displayed an alert box which contains text '<expectedAlert>'

        Examples:
            | username  | password     | expectedAlert        |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver123 | validation succeeded |
            | bob       | test123      | validation failed    |
