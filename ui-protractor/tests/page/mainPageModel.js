
var mainPageModel = function () {

    var mainpagelink = element(by.xpath('//*[@id="left"]/div[2]/a[1]'));
    var computerlink = element(by.xpath("//*[@id=\"litp18890188\"]/a"));
    this.expectedUrl1 = "https://www.alza.cz/EN/computers-and-laptops";
    var phonelink = element(by.xpath('//*[@id="litp18890259"]/a'));
    this.expectedUrl2 = "https://www.alza.cz/EN/phones-smartwatches-tablets";
    var gaminglink = element(by.xpath('//*[@id="litp18853682"]/a'));
    this.expectedUrl3 = "https://www.alza.cz/EN/gaming";
    var tvlink = element(by.xpath('//*[@id="litp18852655"]/a'));
    this.expectedUrl4 = "https://www.alza.cz/EN/tv-photo-audio-video";
    var appslink = element(by.xpath('//*[@id="litp18890756"]/a'));
    this.expectedUrl5 = "https://www.alza.cz/EN/appliances";
    var homeappslink = element(by.xpath('//*[@id="litp18857643"]/a'));
    this.expectedUrl6 = "https://www.alza.cz/EN/home-and-appliances";
    var gardenlink = element(by.xpath('//*[@id="litp18855850"]/a'));
    this.expectedUrl7 = "https://www.alza.cz/EN/hobby";
    var toyslink = element(by.xpath('//*[@id="litp18851104"]/a'));
    this.expectedUrl8 = "https://www.alza.cz/EN/toys";
    var beautylink = element(by.xpath('//*[@id="litp18852918"]/a'));
    this.expectedUrl9 = "https://www.alza.cz/EN/beauty";
    var medlink = element(by.xpath('//*[@id="litp18855766"]/a'));
    this.expectedUrl10 = "https://www.alza.cz/EN/maxi";
    var petslink = element(by.xpath('//*[@id="litp18868987"]/a'));
    this.expectedUrl11 = "https://www.alza.cz/EN/pet";
    var sportlink = element(by.xpath('//*[@id="litp18855692"]/a'));
    this.expectedUrl12 = "https://www.alza.cz/EN/sport";
    var fashionlink = element(by.xpath('//*[@id="litp18881432"]/a'));
    this.expectedUrl13 = "https://www.alza.cz/EN/fashion";
    var autolink = element(by.xpath('//*[@id="litp18856699"]/a'));
    this.expectedUrl14 = "https://www.alza.cz/EN/auto";
    var officelink = element(by.xpath('//*[@id="litp18890842"]/a'));
    this.expectedUrl15 = "https://www.alza.cz/EN/office-and-stationery";
    var bookslink = element(by.xpath('//*[@id="litp18854340"]/a'));
    this.expectedUrl16 = "https://www.alza.cz/EN/media";
    var foodlink = element(by.xpath('//*[@id="litp18876334"]/a'));
    this.expectedUrl17 = "https://www.alza.cz/EN/food";
    var giftlink = element(by.xpath('//*[@id="litp18848934"]/a'));
    this.expectedUrl18 = "https://www.alza.cz/EN/gifts";
    var healthlink = element(by.xpath('//*[@id="litp18874562"]/a'));
    this.expectedUrl19 = "https://www.alza.cz/EN/health";
    var acceptcookies = element(by.xpath('//*[@id="rootHtml"]/body/div[6]/div/div/div[2]/a[1]'));

    //getters
    this.getacceptcookies = function () {
        return acceptcookies;
    };
    this.getmainpagelink = function () {
        return mainpagelink;
    };
    this.getcomputerlink = function () {
        return computerlink;
    };
    this.getphonelink = function () {
        return phonelink;
    };
    this.getgaminglink = function () {
        return gaminglink;
    };
    this.gettvlink = function () {
        return tvlink;
    };
    this.getappslink = function () {
        return appslink;
    };
    this.gethomeappslink = function () {
        return homeappslink;
    };
    this.getgardenlink = function () {
        return gardenlink;
    };
    this.gettoyslink = function () {
        return toyslink;
    };
    this.getmedlink = function () {
        return medlink;
    };
    this.getpetslink = function () {
        return petslink;
    };
    this.getsportlink = function () {
        return sportlink;
    };
    this.getfashionlink = function () {
        return fashionlink;
    };
    this.getautolink = function () {
        return autolink;
    };
    this.getofficelink = function () {
        return officelink;
    };
    this.getbookslink = function () {
        return bookslink;
    };
    this.getfoodlink = function () {
        return foodlink;
    };
    this.getgiftlink = function () {
        return giftlink;
    };
    this.gethealthlink = function () {
        return healthlink;
    };
    this.getbeautylink = function () {
        return beautylink;
    };

};

module.exports = new mainPageModel();
