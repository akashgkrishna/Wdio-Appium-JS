const assert = require('assert'); 
const Logger = require("../customlogger/Logger");
const ProfileScreen = require("../screens/ProfileScreen");
const Footer = require("../screens/common/Footer");
const LoginFlow = require("../userflows/LoginFlow");
require("dotenv").config();

describe('Login Flow', async function() {
    let loginFlow;
    let footer;
    let LOGGER;
    let profileScreen;

    before(async function() {
        loginFlow = new LoginFlow();
        footer = new Footer();
        LOGGER = new Logger();
        profileScreen = new ProfileScreen();
        LOGGER.info("Starting Login Flow");
    });

    it('should successfully perform the login flow', async function() {

        // Act
        // await loginFlow.performLogin("ulshopify@ultralesson.com", "12345", "0000");
        await loginFlow.performLogin(process.env.TEST_USERNAME, process.env.TEST_PASSWORD, process.env.TEST_OTP);
        await footer.clickOnProfileIcon();

        // Assert
        const isLoginSuccessful = await profileScreen.isLoginSuccessful();
        assert.strictEqual(isLoginSuccessful, true, "Login was not successful");

        LOGGER.info("Login Flow completed successfully");

    });

});
