'use strict';
const srchB = require('../page/searchPageModel.js');
var baseUrl = browser.baseUrl;


describe('Alza search functionality tests', function() {

    beforeEach(function(done) {
        browser.ignoreSynchronization = true;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        browser.driver.manage().window().maximize();
        done();
    });

    it('Checking search button and titles ', function() {
        browser.get(baseUrl);
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return srchB.alzadefaulftitle.getText().isPresent()});
        browser.wait(function() {
            return srchB.getsearchbtn().isPresent()});
        srchB.gettypesearch().click();
        srchB.gettypesearch().sendKeys("iphone");
        srchB.getsearchbtn().click();
        expect(srchB.resulthsearch.getText()).toEqual("iPhone");
        browser.wait(function() {
            return srchB.mycustomsearchtitle.getText().isPresent()});
    });

   it('Checking search button clicked with empty string ', function() {
        browser.get(baseUrl);
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return srchB.alzadefaulftitle.getText().isPresent()});
        browser.wait(function() {
            return srchB.getsearchbtn().isPresent()});
        srchB.gettypesearch().click();
        srchB.gettypesearch().sendKeys("");
        srchB.getsearchbtn().click();
        browser.wait(function() {
            return srchB.alzadefaulftitle.getText().isPresent()});
    });

    it('Enter a junk string validating the outcome ', function() {
        browser.get(baseUrl);
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return srchB.alzadefaulftitle.getText().isPresent()});
        browser.wait(function() {
            return srchB.getsearchbtn().isPresent()});
        srchB.gettypesearch().click();
        srchB.gettypesearch().sendKeys("kjashjdha2839349023");
        srchB.getsearchbtn().click();
        expect(srchB.resulthsearch.getText()).toEqual("Search Result");
        expect(srchB.noresult.getText()).toEqual("I'm doing my best, but I can't find „kjashjdha2839349023“.");
        expect(browser.getCurrentUrl()).toEqual(srchB.expectedUrl2);
    });

  it('Checking search button and url ', function() {
    browser.get(baseUrl);
    browser.ignoreSynchronization = true;
    browser.wait(function() {
      return srchB.alzadefaulftitle.getText().isPresent()});
    browser.wait(function() {
      return srchB.getsearchbtn().isPresent()});
    srchB.gettypesearch().click();
    srchB.gettypesearch().sendKeys("iphone");
    srchB.getsearchbtn().click();
    expect(srchB.resulthsearch.getText()).toEqual("iPhone");
    expect(browser.getCurrentUrl()).toEqual(srchB.expectedUrl1);
    browser.wait(function() {
      return srchB.mycustomsearchtitle.getText().isPresent()});
  });

});