const BaseScreen = require("./base/Base");

class ProfileScreen extends BaseScreen{
    constructor(){
        super();
        this.selectors = {
            registerButton: `#txt-register`,
            loginButton: `#txt-login`,
            usernameTextField: `#inp-email`,
            passwordTextField: `#inp-password`,
            username: `#txt-username`,
            logoutButton: `#btn-logout`
        }
    }

    async clickOnLoginButton(){
        await this.click(this.selectors.loginButton);
    }

    async isLoginSuccessful() {
        const isUsernameDisplayed = await this.isDisplayed(this.selectors.username);
        const isLogoutButtonDisplayed = await this.isDisplayed(this.selectors.logoutButton);
        return isUsernameDisplayed && isLogoutButtonDisplayed;
    }
}
module.exports = ProfileScreen;