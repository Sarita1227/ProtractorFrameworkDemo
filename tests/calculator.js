let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {
    it('addition test', function () {

        
        homepage.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000)
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('5');
        homepage.clickGo();
        homepage.verifyResult('7');
        browser.sleep(2000)




    });

    it('sub test', function () {

        
        homepage.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000)
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('5');
        homepage.clickGo();
        homepage.verifyResult('10');
        browser.sleep(2000)




    });

});