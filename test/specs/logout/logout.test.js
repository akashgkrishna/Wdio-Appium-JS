const HomeScreen = require('../../screens/HomeScreen');
const ProfileScreen = require('../../screens/ProfileScreen');
const LoginFlow = require('../../userflows/LoginFlow');
const LogoutFlow = require('../../userflows/LogoutFlow');
const dataLoader = require('../../utils/dataLoader');
const assert = require('assert'); 


describe('Logout flow', async function(){
    let credentials;
    let logoutFlow;
    let loginFlow;
    let homeScreen;
    let profileScreen;

    this.beforeEach(async function(){
        // Login to application
        loginFlow = new LoginFlow();
        credentials = dataLoader.loadData('credentials.json');
        const validCredentials = credentials.credentialsSets.validCredentials;
        await loginFlow.performLogin(validCredentials.username, validCredentials.password, validCredentials.otp);

        logoutFlow = new LogoutFlow();
        homeScreen = new HomeScreen();
        profileScreen = new ProfileScreen();

    })

    it('should successfully perform the logout flow', async function(){

        // Act
        await logoutFlow.performLogout();
        await profileScreen.clickOnBackButton();

        // Assert
        const isLogoutSuccessful = await homeScreen.isWelcomeTextDisplayed();
        assert.strictEqual(isLogoutSuccessful, true, "Logout was not successful");

    })
})