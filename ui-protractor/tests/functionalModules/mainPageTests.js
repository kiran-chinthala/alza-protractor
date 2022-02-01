'use strict';
const srchB = require('../page/searchPageModel.js');
const mainB = require('../page/mainPageModel.js');
const cartB = require("../page/cartPageModel");

var baseUrl = browser.baseUrl;

describe('Alza main page functionality tests', function() {

  var testParams = [
        {title: 'Computers and Laptops', urlSuffix: mainB.expectedUrl1, method: mainB.getcomputerlink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Phones, Smartwatches & Tablets', urlSuffix: mainB.expectedUrl2, method: mainB.getphonelink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Gaming and Entertainment', urlSuffix: mainB.expectedUrl3, method: mainB.getgaminglink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'TV, Photo, Audio & Video',  urlSuffix: mainB.expectedUrl4, method: mainB.gettvlink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Major and Small Appliances', urlSuffix: mainB.expectedUrl5, method: mainB.getappslink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Home Electronics', urlSuffix: mainB.expectedUrl6, method: mainB.gethomeappslink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Hobby & Garden', urlSuffix: mainB.expectedUrl7, method: mainB.getgardenlink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Toys, for Kids and Babies', urlSuffix: mainB.expectedUrl8, method: mainB.gettoyslink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Beauty', urlSuffix: mainB.expectedUrl9, method: mainB.getbeautylink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Drugstore', urlSuffix: mainB.expectedUrl10, method: mainB.getmedlink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Pet Supplies', urlSuffix: mainB.expectedUrl11, method: mainB.getpetslink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Sport & Outdoor', urlSuffix: mainB.expectedUrl12, method: mainB.getsportlink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Clothing, Shoes, Accessories', urlSuffix: mainB.expectedUrl13, method: mainB.getfashionlink(), scroll: 'false', acceptcookies: 'true'},
        {title: 'Car & Moto', urlSuffix: mainB.expectedUrl14, method: mainB.getautolink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Office Supplies and Stationery', urlSuffix: mainB.expectedUrl15, method: mainB.getofficelink(), scroll: 'false', acceptcookies: 'false'},
        {title: 'Books & Magazines', urlSuffix: mainB.expectedUrl16, method: mainB.getbookslink(), scroll: 'true', acceptcookies: 'false'},
        {title: 'Groceries', urlSuffix: mainB.expectedUrl17, method: mainB.getfoodlink(), scroll: 'true', acceptcookies: 'false'},
        {title: 'Gift Vouchers', urlSuffix: mainB.expectedUrl18, method: mainB.getgiftlink(), scroll: 'true', acceptcookies: 'false'},
        {title: 'Health', urlSuffix: mainB.expectedUrl19, method: mainB.gethealthlink(), scroll: 'true', acceptcookies: 'false'},
  ];


    beforeEach(function(done) {
        browser.ignoreSynchronization = true;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        browser.driver.manage().window().maximize();
        done();
    });


      it('checking all links and its urls', function () {
        for (var i = 0; i < testParams.length; i++) {
          var testParam = testParams[i];
          browser.get(baseUrl);
          browser.ignoreSynchronization = true;
          browser.wait(function () {
            return srchB.alzadefaulftitle.getText().isPresent()
          });
          browser.wait(function () {
            return srchB.getsearchbtn().isPresent()
          });
          if(testParam.scroll=='true'){
            browser.executeScript('window.scrollTo(0,100)');
          }
          if(testParam.acceptcookies=='true'){
            cartB.getacceptcookies().click();
          }
          testParam.method.click();
          expect(srchB.resulthsearch.getText()).toEqual(testParam.title);
            browser.getCurrentUrl().then(function (url) {
               if(url===testParam.urlSuffix){
                 return true;
               }
            });
          expect(browser.getCurrentUrl()).toEqual(testParam.urlSuffix);

        };

    });

  });



