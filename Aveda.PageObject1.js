module.exports = function(){

    //Logging In
    this.username=element(by.model('login.credentials.Username'));
    this.usernameEntry=browser.params.AvedaUser
    this.password=element(by.model('login.credentials.Password'));
    this.passwordEntry=browser.params.AvedaPass
    this.loginBtn=element(by.buttonText('Login'));

    //Salon Search
    this.salonSearch=element(by.id('SalonSearch'));
    this.searchQuery="102615";

    //Order Build
    this.buildOrder=element(by.buttonText('Build Order'));
    this.basicOrder=element.all(by.repeater('orderType in salonsDetail.orderTypes')).get(0);
    this.searchProducts=element(by.id('ProductSearch'));
    this.searchProductsQuery="malva";

    //Checkout Process
    this.proceedToCheckout=element(by.css('[ng-click*="order.proceedToCheckout()"]'));
    this.validateOrder=element(by.css('[ng-click*="orderCheckout.validateOrder()"]'));
    this.continueBtn=element(by.css('[ng-click*="orderCheckout.continueFromReview()"]'));
    this.creditCardOption=element.all(by.css('.creditCardRadio-label')).get(1);
    this.submitBtn=element(by.css('[ng-click*="orderCheckout.submitOrder()"]'));

    //Return to Salan Profile and Logout
    this.returnToProfile=element(by.css('[ng-click="orderCheckout.goToSalonProfile()"]'));
    this.accountTabBtn=element(by.css('.fa.fa-user'));
    this.logout_Btn=element(by.css('.fa.fa-sign-out'));

}