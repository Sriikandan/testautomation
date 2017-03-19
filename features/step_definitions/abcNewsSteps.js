'use strict';

var expect = require('chai').expect;
var assert = require('assert');
var totalpages;
var articlecountperpage;
var authorcountperpage;
var timestampcountperpage;
var title;
var count;
var imgCount;

module.exports = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^I open the abc news url$/, function () {
        this.driver.get('http://www.abc.net.au/news/');
    });

    this.Given(/^I open the abc video page url$/, function () {
        this.driver.get('http://www.abc.net.au/news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908');
    });

    this.Given(/^I open the abc image page url$/, function () {
        this.driver.get('http://www.abc.net.au/news/2017-02-10/abc-open-pic-of-the-week/8256256');
    });

    this.When(/^I am on the homepage of abc news$/, function () {
        this.driver.getTitle().then(function(title) {
            expect(title).to.equal("ABC News (Australian Broadcasting Corporation)");
        });
    });

    this.When(/^I am on the video page of abc news$/, function () {
        this.driver.getTitle().then(function(title) {
            expect(title).to.contains("ABC News (Australian Broadcasting Corporation)");
        });
    });

    this.When(/^I am on the image page of abc news$/, function () {
        this.driver.getTitle().then(function(title) {
            expect(title).to.contains("ABC News (Australian Broadcasting Corporation)");
        });
    });

    this.Then(/^I confirm the News Banner loaded$/, function () {
        this.waitFor('img.print');
        return this.driver.findElements({ css: 'img.print' })
            .then(function(elements) {
                expect(elements.length).to.not.equal(0);
            });
    });

    this.Then(/^I navigate to the Justin page$/, function () {
        this.waitFor('#n-justin');
        return this.driver.findElement({ css: '#n-justin' }).click();
    });

    this.Then(/^I confirm the content is loded with title$/, function () {
        return this.driver.findElements({ xpath:"//ul[@class='article-index']/li" })
            .then(function(elements) {
                articlecountperpage=elements.length;
                expect(articlecountperpage).to.not.equal(0);
            });
    });

    this.Then(/^I verified the Author is available for all with titles$/, function () {
        return this.driver.findElements({ xpath:"//ul[@class='article-index']/li/div[@class='byline']" })
            .then(function(elements) {
                authorcountperpage=elements.length;
                expect(articlecountperpage).to.equal(authorcountperpage);
            });
    });

    this.Then(/^I verified the timestamp is available for all with titles$/, function () {
        return this.driver.findElements({ css:'p.published' })
            .then(function(elements) {
                timestampcountperpage=elements.length;
                expect(articlecountperpage).to.equal(timestampcountperpage);
            });
    });

    this.Then(/^I verified the text is available for all with titles$/, function () {
        return this.driver.findElements({ xpath:"//ul[@class='article-index']/li/p[1]" })
            .then(function(elements) {
                timestampcountperpage=elements.length;
                expect(articlecountperpage).to.equal(timestampcountperpage);
            });
    });

    this.Then(/^I confirm the video loaded$/, function () {
        this.driver.findElement({ id: 'jwplayer-video-0' }).isDisplayed().then(function (state) {
            console.log("video is loded:");
        });
    });


    this.Then(/^I confirm the images loaded$/, function () {
        this.driver.findElements({ css:'span.gallery-image-count.gallery-showing' }).then(function (elements) {
            imgCount=elements.length;
        });
        var elements= this.driver.findElements({ css:'span.gallery-image-count.gallery-showing' });
        for (count = 1; count < 15; count++) {
            this.driver.findElement({css:'a.lSNext'}).click();
        }

        this.driver.findElement({ css: 'ul.imageGallery' }).isDisplayed().then(function (state) {
            console.log("image is loded:");
        });

    });


};


