'use strict';

var expect = require('chai').expect;
var assert = require('assert');


module.exports = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^I open the abc program url$/, function () {
        this.driver.get('http://www.abc.net.au/radionational/');
    });


    this.Given(/^I open the abc program details url$/, function () {
        this.driver.get('http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406');
    });

    this.Given(/^I open the abc program audio url$/, function () {
        this.driver.get('http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406');
    });

    this.When(/^I am on the homepage of abc program and selected 'big ideas'$/, function () {
        this.driver.getTitle().then(function(title) {
            expect(title).to.equal("ABC Radio National (Australian Broadcasting Corporation)");
        });
        this.driver.findElement({css:'li.rn-nav-link.rn-nav-drop'}).click();

        this.driver.findElement({xpath:"//a[text()='B']"}).click();
        this.driver.sleep(3000);
        this.driver.findElement({xpath:"//a[text()='Big Ideas']"}).click();
        this.driver.sleep(3000);


    });

    this.When(/^I select the last program for the day$/, function () {

        this.driver.findElement({css:'div#right-arrow'}).click();
        this.driver.sleep(3000);

        this.driver.findElement({css:'div#right-arrow'}).click();
        this.driver.sleep(3000);

        this.driver.findElement({css:'div#right-arrow'}).click();
        this.driver.sleep(3000);

        this.driver.findElements({xpath:"//li/a/div[@class='summary']"}).then(function (elements) {

            var count=elements.length;
            elements[count-2].click();

            elements[count-2].click();


        }).catch(function (err) {

        });
        this.driver.sleep(3000);

    });

    this.When(/^I select the facebook share icon$/, function () {

        this.driver.switchTo().frame(this.driver.findElement({css:"iframe[title='fb:share_button Facebook Social Plugin'"}));
        this.driver.findElement({xpath:'//button'}).click();
    });

    this.When(/^I select the click on the download icon$/, function () {
        this.driver.findElement({css:'a.ico.ico-download'}).click();
    });

    this.Then(/^I confirm on the big ideas page$/, function () {
        this.driver.getCurrentUrl().then(function (URL) {

            var strURL=URL;
            var urlconfirm=strURL.includes("bigideas");
            assert(urlconfirm);
        });
    });

    this.Then(/^I confirm the program page is loaded$/, function () {
        this.driver.getCurrentUrl().then(function (URL) {

            var strURL=URL;
            var urlconfirm=strURL.includes("program");
            assert(urlconfirm);
        });
    });
    this.Then(/^I confrim that it is redirected to audio file$/, function () {

       this.driver.getCurrentUrl().then(function (URL) {

                var strURL=URL;
               var urlconfirm=strURL.includes("mp3");
                assert(urlconfirm);
           });
    });

    this.Then(/^I confrim the facebook login appeared in new window$/, function () {

       this.driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
           //console.log(allhandles);
           assert.equal(allhandles.length,2,"face book is not loaded");
        });
       //console.log(this.driver.getWindowHandle());

       // console.log(this.driver.getAllWindowHandles());
    });
};

