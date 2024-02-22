const { log } = require("winston");
const BaseScreen = require("./base/Base");

class LoginScreen extends BaseScreen{
    constructor(){
        super();
        this.selectors = {
            loginButton: `#txt-login`,
            usernameTextField: `#inp-email`,
            passwordTextField: `#inp-password`,
            loginOTP: `#inp-opt-{index}`,
            verifyButton: `#txt-verify`
        }
    }
    
    async enterCredentials(username, password) {

        await this.setValue(this.selectors.usernameTextField, username);
        await this.setValue(this.selectors.passwordTextField, password);

    }

    async clickOnLoginButton(){
        await this.click(this.selectors.loginButton);
    }

    async enterOTP(otp) {
        const otpDigits = otp.split('');
        for (let index = 0; index < otpDigits.length; index++) {
            const digit = otpDigits[index];
            const otpFieldXpath = this.selectors.loginOTP.replace('{index}', index + 1);
            await this.setValue(otpFieldXpath, digit);
        }
    }
    
    async clickOnVerifyButton(){
        await this.click(this.selectors.verifyButton);
    }

}

module.exports = LoginScreen;