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

    this.When(/^I am on the homepage of abc program and selected 'big ideas'$/, function () {
        this.driver.getTitle().then(function(title) {
            expect(title).to.equal("ABC Radio National (Australian Broadcasting Corporation)");
        });
        this.driver.findElement({css:'li.rn-nav-link.rn-nav-drop'}).click();
        this.driver.findElements({xpath:"//ul[@id='rn-programindex']/li"}).then(function (elements) {
            //console.log(elements.getText);
        });

    });

    this.When(/^I select the last program for the day$/, function () {

        this.driver.findElement({css:'div#right-arrow'}).click();
        this.driver.findElement({css:'div#right-arrow'}).click();
        this.driver.findElement({css:'div#right-arrow'}).click();

        this.driver.findElements({xpath:"//li/a/div[@class='summary']"}).then(function (elements) {

            var count=elements.length;
            elements[count-1].click();
           // console.log(elements[count-1]);
        }).catch(function (err) {

        });
    });

    this.When(/^I select the facebook share icon$/, function () {

        this.driver.switchTo().frame(this.driver.findElement({css:"iframe[title='fb:share_button Facebook Social Plugin'"}));
        this.driver.findElement({xpath:'//button'}).click();

    });


    this.Then(/^I confirm the 'bid ideas' loaded with page$/, function () {

    });

    this.Then(/^I confrim the facebook login appeared in new window$/, function () {

       this.driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
           //console.log(allhandles.length);
           assert.equal(allhandles.length,2,"face book is not loaded");
        });

    });
};

