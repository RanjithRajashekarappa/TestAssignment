Feature: Verify succesfull Login
  
  Scenario: Validate that user is logged in successfully with valid credentials 
    Given I open test website 
    Then I see "OrangeHRM" in the title
    When I fetch the valid test credentials from website
    And I enter valid test credentials
    Then I am successfully logged in
    And I see the correct user name