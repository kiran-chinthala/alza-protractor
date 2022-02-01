
var searchPageModel = function () {

    var typesearch = element(by.xpath('//*[@id="edtSearch"]'));
    var searchbtn = element(by.xpath('//*[@id="btnSearch"]'));
    this.resulthsearch = element(by.xpath('//*[@id="h1c"]'));
    this.mycustomsearchtitle = element(by.xpath('//*[@id="rootHtml"]/head/title'));
    this.alzadefaulftitle = element(by.xpath('//*[@id="rootHtml"]/head/title'));
    this.noresult = element(by.xpath('//*[@id="noresult"]'));
    this.expectedUrl1 = "https://www.alza.cz/EN/iphone/18851638.htm";
    this.expectedUrl2 = "https://www.alza.cz/EN/search.htm?exps=kjashjdha2839349023";
    this.gettypesearch = function () {
        return typesearch;
    };
     this.getsearchbtn = function () {
        return searchbtn;
    };

};

module.exports = new searchPageModel();
