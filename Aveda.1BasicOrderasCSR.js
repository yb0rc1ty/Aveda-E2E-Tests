var AvedaPage = require('./Aveda.PageObject1.js');

describe('Create a Basic Order as a CSR:',function(){
    var ap = new AvedaPage;
    it('Login to site',function(){
        browser.get(browser.params.AvedaURL);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.username), 10000, 'Element not clickable');
        ap.username.sendKeys(ap.usernameEntry);
        ap.password.sendKeys(ap.passwordEntry);
        ap.loginBtn.click();
    })
    beforeEach(function(){
        return browser.ignoreSynchronization = true;
    })
    it('Search for Salon',function(){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.salonSearch), 10000, 'Element not clickable');
        ap.salonSearch.click();
        ap.salonSearch.sendKeys(ap.searchQuery);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);
    })
    it('Select Order Type',function(){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.buildOrder), 10000, 'Element not clickable');
        ap.buildOrder.click();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.basicOrder), 10000, 'Element not clickable');
        expect(ap.basicOrder.getText()).toBe('Basic');
        ap.basicOrder.click();
        browser.sleep(1000);
    })
    it('Search for Products',function(){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.searchProducts), 10000, 'Element not clickable');
        ap.searchProducts.click();
        ap.searchProducts.sendKeys(ap.searchProductsQuery);
        browser.sleep(1000);
    })
    it('Build Order',function(){
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.NUMPAD1).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.NUMPAD1).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.NUMPAD1).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(500);
    })
    it('Proceed to Checkout',function(){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.proceedToCheckout), 10000, 'Element not clickable');
        ap.proceedToCheckout.click();
    })
    it('Validate Order and Continue to Payment Method',function(){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.validateOrder), 10000, 'Element not clickable');
        ap.validateOrder.click();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.continueBtn), 10000, 'Element not clickable');
        ap.continueBtn.click();
        browser.sleep(1000);
    })
    it('Select Payment Method and Submit Order',function(){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.creditCardOption), 10000, 'Element not clickable');
        ap.creditCardOption.click();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.submitBtn), 10000, 'Element not clickable');
        ap.submitBtn.click();
        browser.sleep(1000);
    })
    it('Return to Salon Profile and Logout',function(){
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.returnToProfile), 10000, 'Element not clickable');
        ap.returnToProfile.click();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.accountTabBtn), 10000, 'Element not clickable');
        ap.accountTabBtn.click();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(ap.logout_Btn), 10000, 'Element not clickable');
        ap.logout_Btn.click();
    })
})

