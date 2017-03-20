Feature: ABCProgram
  As a automation tester
  I need to test the abc program using js
  so that I would be selected for abc program

  Scenario: ABC program menu loaded
    Given I open the abc program url
    When I am on the homepage of abc program and selected 'big ideas'
    Then I confirm on the big ideas page

  Scenario: ABC program of last menu
    Given I open the abc program url
    When I select the last program for the day
    Then I confirm the program page is loaded

  Scenario: ABC program details to share in facebook
    Given I open the abc program details url
    When I select the facebook share icon
    Then I confrim the facebook login appeared in new window

  Scenario: ABC program to download the audio
    Given I open the abc program audio url
    When I select the click on the download icon
    Then I confrim that it is redirected to audio file
