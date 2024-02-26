const BaseScreen = require("./base/Base");

class HomeScreen extends BaseScreen{
    constructor(){
        super();
        this.selectors = {
            welcomeText: `//android.widget.TextView[@resource-id="com.ultralesson.ulshopify:id/txt-welcome-back"]`
        }
    }

    async isWelcomeTextDisplayed(){
        // await browser.pause(10000);
        const isWelcomeTextDisplayed = await this.isDisplayed(this.selectors.welcomeText);
        return isWelcomeTextDisplayed;
    }
}
module.exports = HomeScreen;