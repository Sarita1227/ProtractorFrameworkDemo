let homepage = function(){
    let firstNumber =  element(by.model('first'));
    let secondName =  element(by.model('second'));
    let goBtn = element(by.css('[ng-click="doAddition()"]'));


    this.get = function(url) {
        browser.get(url)
    }
    this.enterFirstNumber = function(firstNo) {
        firstNumber.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNum) {
        secondName.sendKeys(secondNum);
    };

    this.clickGo = function() {
        goBtn.click();
    };

    this.verifyResult = function(result) {
        let output = element(by.cssContainingText('.ng-binding',result)); 
        expect(output.getText()).toEqual(result);
    }

};

//to refer it into any external file
module.exports = new homepage();