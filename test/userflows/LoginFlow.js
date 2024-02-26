const Logger = require("../customlogger/Logger");
const BaseScreen = require("../screens/base/Base");
const Footer = require("../screens/common/Footer");
const LoginScreen = require("../screens/LoginScreen");
const ProfileScreen = require("../screens/ProfileScreen");

const footer = new Footer();
const profileScreen = new ProfileScreen();
const loginScreen = new LoginScreen();
const LOGGER = new Logger();

class LoginFlow extends BaseScreen{

    async performLogin(username, password, otp){

        LOGGER.info("Logging in to the application");

        await footer.clickOnProfileIcon();
        await profileScreen.clickOnLoginButton();
        await loginScreen.enterCredentials(username, password);
        await loginScreen.clickOnLoginButton();
        await loginScreen.enterOTP(otp);
        await loginScreen.clickOnVerifyButton();
    }
}

module.exports = LoginFlow;