'use strict';
const srchB = require('../page/searchPageModel.js');
const utilB = require('../page/utilPageModel.js');

var baseUrl = browser.baseUrl;

describe('Alza utility option functionality tests', function(){

  var testParams = [
        {title: 'Try new Alza Premium', urlSuffix: utilB.expectedUrl1, method: utilB.getalzapremium()},
        {title: 'My Alza', urlSuffix: utilB.expectedUrl2, method: utilB.getmyalza()},
        {title: 'For companies', urlSuffix: utilB.expectedUrl3, method: utilB.getforcompanies()},
        {title: 'About Shopping',  urlSuffix: utilB.expectedUrl4, method: utilB.getabout()},
        {title: 'Careers', urlSuffix: utilB.expectedUrl5, method: utilB.getcareer()},
  ];


    beforeEach(function(done) {
        browser.ignoreSynchronization = true;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        browser.driver.manage().window().maximize();
        done();
    });


    it('checking all Util links and its urls', function () {
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
          testParam.method.click();
            browser.getCurrentUrl().then(function (url) {
               if(url===testParam.urlSuffix){
                 return true;
               }
            });
           expect(browser.getCurrentUrl()).toEqual(testParam.urlSuffix);
        };

      });


    it('click on login Util link and click on login button ', function () {
            browser.get(baseUrl);
            browser.ignoreSynchronization = true;
            browser.wait(function () {
              return srchB.alzadefaulftitle.getText().isPresent()
            });
            browser.wait(function () {
              return srchB.getsearchbtn().isPresent()
            });
            utilB.getlogin().click();
            browser.wait(function () {
              return element(by.id("loginIframe")).isPresent()
            });
            browser.switchTo().frame(1).then(function () {
            //utilB.getuserName().sendKeys("kiran.chinthala@gmail.com")
            browser.wait(function () {
              return utilB.getbtnLogin().isPresent()
            });
            utilB.getbtnLogin().click();
            expect(utilB.usermissing.getText()).toEqual(
                "Please enter email address");
            expect(utilB.passwordmissing.getText()).toEqual(
              "Please enter your password");
        });
      });

    it('click on login Util link and click on forgot password link ', function () {
            browser.get(baseUrl);
            browser.ignoreSynchronization = true;
            browser.wait(function () {
              return srchB.alzadefaulftitle.getText().isPresent()
            });
            browser.wait(function () {
              return srchB.getsearchbtn().isPresent()
            });
            utilB.getlogin().click();
            browser.wait(function () {
              return element(by.id("loginIframe")).isPresent()
            });
            browser.switchTo().frame(1).then(function () {
              //utilB.getuserName().sendKeys("kiran.chinthala@gmail.com")
              browser.wait(function () {
                return utilB.getbtnLogin().isPresent()
              });
              utilB.getforgotPasswordLink().click();
              expect(utilB.forgotpasstitle.getText()).toEqual("Forgotten password");
              browser.wait(function () {
                return utilB.getuserName().isPresent()
              });
              utilB.getsentbtn().click();
              utilB.getbacktologinbtn().click();
              expect(utilB.btnLogin1.isEnabled()).toBe(true);

         });
      });

    it('click on login Util link and click on new registration link', function () {
            browser.get(baseUrl);
            browser.ignoreSynchronization = true;
            browser.wait(function () {
              return srchB.alzadefaulftitle.getText().isPresent()
            });
            browser.wait(function () {
              return srchB.getsearchbtn().isPresent()
            });
            utilB.getlogin().click();
            browser.wait(function () {
              return element(by.id("loginIframe")).isPresent()
            });
            browser.switchTo().frame(1).then(function () {
              //utilB.getuserName().sendKeys("kiran.chinthala@gmail.com")
              browser.wait(function () {
                return utilB.getbtnLogin().isPresent()
              });
              utilB.getnewregistrationlink().click();
            });
            browser.wait(function () {
              return utilB.getsavebtn().isPresent()
            });
            expect(utilB.savebtn1.isEnabled()).toBe(true);
      });
  });



