const { warn } = require("winston");
const BaseScreen = require("./base/Base");

class CartScreen extends BaseScreen{
    constructor(){
        super();
        this.selectors = {
            contineShoppingButton: `#txt-continue-shopping`,
            backButton: `#btn-back`
        }
    }

    //TODO change logic later
    async navigateToHome(){
        console.log("Starting method");
        await browser.pause(5000);
        const isEleDis = await this.isDisplayed(this.selectors.contineShoppingButton);
        if(isEleDis){
            console.log("Continuing shopping...");
            await this.click(this.selectors.contineShoppingButton);
        } else {
            console.log("Going back...");
            await this.click(this.selectors.backButton);
        }
    }
}
module.exports = CartScreen;