'use strict';
const cartB = require('../page/cartPageModel.js');
const srchB = require("../page/searchPageModel");
const utilB = require("../page/utilPageModel");
var baseUrl = browser.baseUrl;


describe('Alza cart functionality tests', function() {

  beforeEach(function(done) {
    browser.ignoreSynchronization = true;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    browser.driver.manage().window().maximize();
    done();
  });

  it('Checking cart button and order page ', function() {
    browser.get(baseUrl);
    browser.ignoreSynchronization = true;
    browser.wait(function() {
      return cartB.alzadefaulftitle.getText().isPresent()});
    browser.wait(function() {
      return cartB.getcart().isPresent()});
    cartB.getcart().click();
    browser.wait(function() {
      return cartB.getorderpage().isPresent()});
    browser.wait(function() {
      return cartB.getbacktoshop().isPresent()});
    expect(browser.getCurrentUrl()).toEqual(cartB.expectedUrl1);

  });

  it('Checking empty cart, back button ', function() {
    browser.get(baseUrl);
    browser.ignoreSynchronization = true;
    browser.wait(function() {
      return cartB.alzadefaulftitle.getText().isPresent()});
    browser.wait(function() {
      return cartB.getcart().isPresent()});
    cartB.getcart().click();
    browser.wait(function() {
      return cartB.getorderpage().isPresent()});
    browser.wait(function() {
      return cartB.getbacktoshop().isPresent()});
    expect(browser.getCurrentUrl()).toEqual(cartB.expectedUrl1);
    expect(cartB.resultcart.getText()).toEqual("Looks like there's nothing in here...");

  });

  it('Checking empty cart, clicking back button, back to initial page ', function() {
    browser.get(baseUrl);
    browser.ignoreSynchronization = true;
    browser.wait(function() {
      return cartB.alzadefaulftitle.getText().isPresent()});
    browser.wait(function() {
      return cartB.getcart().isPresent()});
    cartB.getcart().click();
    browser.wait(function() {
      return cartB.getorderpage().isPresent()});
    browser.wait(function() {
      return cartB.getbacktoshop().isPresent()});
    expect(browser.getCurrentUrl()).toEqual(cartB.expectedUrl1);
    expect(cartB.resultcart.getText()).toEqual("Looks like there's nothing in here...");
    cartB.getbacktoshop().click();
    expect(browser.getCurrentUrl()).toEqual(baseUrl);
    browser.wait(function() {
      return cartB.alzadefaulftitle.getText().isPresent()});
  });

  it('Checking search button and add to cart ', function() {
    browser.get(baseUrl);
    browser.ignoreSynchronization = true;
    //cartB.getacceptcookies().click();
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
    browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
    cartB.getaddtocartiphoneinside().click();
    browser.wait(function() {
      return cartB.getaddtocart().isPresent()});
    cartB.getaddtocart().click();
    browser.wait(function() {
      return cartB.getcartcount().isPresent()});
    expect(cartB.cartcount1.getText()).toEqual("1");
  });

});