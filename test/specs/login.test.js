const assert = require('assert'); 
const Logger = require("../customlogger/Logger");
const ProfileScreen = require("../screens/ProfileScreen");
const Footer = require("../screens/common/Footer");
const LoginFlow = require("../userflows/LoginFlow");
const dataLoader = require('../utils/dataLoader');

describe('Login Flow', async function() {
    let loginFlow;
    let footer;
    let LOGGER;
    let profileScreen;
    let credentials;

    before(async function() {
        loginFlow = new LoginFlow();
        footer = new Footer();
        LOGGER = new Logger();
        profileScreen = new ProfileScreen();
        credentials = dataLoader.loadData('credentials.json');
    });

    it('should successfully perform the login flow', async function() {
        // Arrange
        const validCredentials = credentials.credentialsSets.validCredentials;

        // Act
        await loginFlow.performLogin(validCredentials.username, validCredentials.password, validCredentials.otp);
        await footer.clickOnProfileIcon();

        // Assert
        const isLoginSuccessful = await profileScreen.isLoginSuccessful();
        assert.strictEqual(isLoginSuccessful, true, "Login was not successful");

        LOGGER.info("Login Flow completed successfully");

    });

});
