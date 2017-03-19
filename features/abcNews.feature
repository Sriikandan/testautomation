Feature: ABCnews
  As a automation tester
  I need to test the abc news using js
  so that I would be selected for abc news

  Scenario: ABC news banner loaded
    Given I open the abc news url
    When I am on the homepage of abc news
    Then I confirm the News Banner loaded
    Then I navigate to the Justin page
    Then I confirm the content is loded with title
    Then I verified the Author is available for all with titles
    Then I verified the timestamp is available for all with titles
    Then I verified the text is available for all with titles



  Scenario: ABC news video loaded
    Given I open the abc video page url
    When I am on the video page of abc news
    Then I confirm the video loaded

  Scenario: ABC news images loaded
    Given I open the abc image page url
    When I am on the image page of abc news
    Then I confirm the images loaded

