
var utilPageModel = function () {

    var alzapremium = element(by.xpath("//*[@id=\"lblAp\"]"));
    this.expectedUrl1 = "https://www.alza.cz/EN/alzapremium";
    var myalza = element(by.xpath('//*[@id="lblMujUcet"]'));
    this.expectedUrl2 = "https://www.alza.cz/my-alza/profile";
    var forcompanies = element(by.xpath('//*[@id="topbar"]/span[3]/a'));
    this.expectedUrl3 = "https://www.alza.cz/EN/alza-for-business-home-page";
    var about = element(by.xpath('//*[@id="headerbottom_liHowToBuy"]'));
    this.expectedUrl4 = "https://www.alza.cz/EN/ako-nakupit-art13603.htm";
    var career = element(by.xpath('//*[@id="headerbottom_liCareer"]'));
    this.expectedUrl5 = "https://www.alza.cz/EN/career";
    var login = element(by.xpath('//*[@id="lblLogin"]'));
    var userName = element(by.xpath('//*[@id="userName"]'));
    var password = element(by.xpath('//*[@id="password"]'));
    var forgotPasswordLink = element(by.xpath('//*[@id="forgotPasswordLink"]'));
    var newregistrationlink = element(by.xpath('//*[@id="registerLink"]'));
    this.expectedUrl6 = "https://www.alza.cz/Registration.htm";
    var btnLogin = element(by.xpath('//*[@id="btnLogin"]'));
    this.btnLogin1 = element(by.xpath('//*[@id="btnLogin"]'));
    this.usermissing = element(by.xpath("/html/body/div/div/form/div[1]/div[2]/span"));
    this.passwordmissing = element(by.xpath("/html/body/div/div/form/div[1]/div[3]/span"));
    var newuser = element(by.xpath('//*[@id="edth1EmailLogin"]'));
    var newpass = element(by.xpath('//*[@id="edth1Password"]'));
    var passconf = element(by.xpath('//*[@id="edth1PasswordConfirm"]'));
    var enterphone = element(by.xpath('//*[@id="ctl00_ctl00_cpcm_cpc_ud2_phoneCountryBasicPhoneValidator_inpTelNumber"]'));
    var savebtn = element(by.xpath('//*[@id="orderpage"]/div[2]/div[2]/a/span[1]'));
    var sentbtn = element(by.xpath('/html/body/div/div/form/div[1]/div[3]/button'));
    var backtologinbtn = element(by.xpath('/html/body/div/div/form/div[1]/a'));
    this.forgotpasstitle= element(by.xpath('/html/body/div/div/form/div[1]/div[1]/h1'));
    this.savebtn1 = element(by.xpath('//*[@id="orderpage"]/div[2]/div[2]/a/span[1]'));
//getters
    this.getbacktologinbtn = function () {
        return backtologinbtn;
    };
    this.getsentbtn = function () {
        return sentbtn;
    };
    this.getalzapremium = function () {
        return alzapremium;
    };
    this.getmyalza = function () {
        return myalza;
    };
    this.getforcompanies = function () {
        return forcompanies;
    };
    this.getabout = function () {
        return about;
    };
    this.getcareer = function () {
        return career;
    };
    this.getlogin = function () {
        return login;
    };
    this.getuserName = function () {
        return userName;
    };
    this.getpassword = function () {
        return password;
    };
    this.getforgotPasswordLink = function () {
        return forgotPasswordLink;
    };
    this.getnewregistrationlink = function () {
        return newregistrationlink;
    };
    this.getbtnLogin = function () {
        return btnLogin;
    };
    this.getnewuser = function () {
        return newuser;
    };
    this.getnewpass = function () {
        return newpass;
    };
    this.getpassconf = function () {
        return passconf;
    };
    this.getenterphone = function () {
        return enterphone;
    };
    this.getsavebtn = function () {
        return savebtn;
    };

};

module.exports = new utilPageModel();
