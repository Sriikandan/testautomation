Feature: ABCProgram
  As a automation tester
  I need to test the abc program using js
  so that I would be selected for abc program

  Scenario: ABC program menu loaded
    Given I open the abc program url
    When I am on the homepage of abc program and selected 'big ideas'

  Scenario: ABC program of last menu
    Given I open the abc program url
    When I select the last program for the day


  Scenario: ABC program details to share in facebook
    Given I open the abc program details url
    When I select the facebook share icon
    Then I confrim the facebook login appeared in new window
