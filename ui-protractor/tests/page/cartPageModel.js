
var cartPageModel = function () {

    var cart = element(by.xpath('//*[@id="price"]'));
    this.resultcart = element(by.xpath('//*[@id="blocke"]/div/span'));
    var backtoshop = element(by.css('[href="https://www.alza.cz/en/"]'));
    var orderpage = element(by.xpath('//*[@id="orderpage"]'));


    this.resulthsearch = element(by.xpath('//*[@id="h1c"]'));
    this.mycustomsearchtitle = element(by.xpath('//*[@id="rootHtml"]/head/title'));
    this.alzadefaulftitle = element(by.xpath('//*[@id="rootHtml"]/head/title'));
    this.expectedUrl1 = "https://www.alza.cz/EN/Order1.htm";
    var addtocart = element(by.xpath('//*[@id="cpcm_cpc_tdAmount"]/span/div[1]/div/a/span[2]'));
    var addtocartiphone = element(by.xpath('//*[@id="boxes"]/div[1]/div[2]/div[1]/span/a[1]'));
    var cartcount = element(by.xpath('//*[@id="basketLink"]/span[2]'));
    this.cartcount1 = element(by.xpath('//*[@id="basketLink"]/span[2]'));
    var acceptcookies = element(by.xpath('//*[@id="rootHtml"]/body/div[6]/div/div/div[2]/a[1]'));
    var addtocartiphoneinside = element(by.xpath('//*[@id="img5669256"]'));


    this.getaddtocart = function () {
        return addtocart;
    };

    this.getaddtocartiphoneinside = function () {
        return addtocartiphoneinside;
    };

    this.getacceptcookies = function () {
        return acceptcookies;
    };
    this.getcartcount = function () {
        return cartcount;
    };
    this.getaddtocartiphone = function () {
        return addtocartiphone;
    };

    this.getcart = function () {
        return cart;
    };
     this.getbacktoshop = function () {
        return backtoshop;
    };
    this.getorderpage = function () {
        return orderpage;
    };


};

module.exports = new cartPageModel();
