@movie
Feature: movie

    As a client I should enter to the movie and see the trailer 

    Scenario: A client must be able to see the sinopsis of the movie
        Given a client is on the movie page
        When the right schedule is selected
        Then enter to the page of the movie and confirm the hour 

        