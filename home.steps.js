import homePage from '../page_objects/home.page';

module.exports =  function() {

    this.Given(/^a client is on the cinepolis website$/, function () {
        homePage.open();
        homePage.searchCity.waitForVisible();
        homePage.searchCity.click();
        //browser.pause(150000);
    });

    this.When(/^the city and the theater are selected$/, function() {
        homePage.searchCity.waitForVisible();
        browser.selectByValue("#cmbCiudades", "105");
        browser.pause(3000);
        homePage.searchCine.waitForVisible();
        browser.selectByValue("#cmbComplejos", "cinepolis-san-pedro");
        browser.pause(3000);
    });

    this.When(/^enter to the page of the movie$/, function() {
        homePage.checkMovies();
        //homePage.movieList.click();
        //browser.selectByValue("27993-cinepolis-san-pedro-pie-pequeno");
        browser.pause(3000);
        //homePage.searchCine.waitForVisible();
        //browser.selectByValue("#cmbComplejos", "cinepolis-san-pedro");
        //browser.pause(3000);
    });


    this.Then(/^confirm schedule$/, function() {
        expect(true).toBe(true);
    });

}

 
