Feature: Check validation on invalid credentials
  
  Scenario: Validate that login fails for invalid credentials
    Given I open test website 
    Then I see "OrangeHRM" in the title
    When I enter invalid credentials
    Then I see invalid credentials error message 