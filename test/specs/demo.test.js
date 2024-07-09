const LoginFlow = require("../userflows/LoginFlow");
// const dataLoader = require('../../utils/dataLoader');
const Footer = require("../screens/common/Footer");
const CartScreen = require("../screens/CartScreen");
const LogoutFlow = require("../userflows/LogoutFlow");

/**
//  * This test is only for trying out features
//  * DO NOT PUSH
 */
describe('Demo to test functionalities', async function(){
    let loginFlow;
    // let credentials;
    let footer;
    let cartScreen;
    let logoutFlow;

    before(async function(){
        loginFlow = new LoginFlow();
        footer = new Footer();
        cartScreen = new CartScreen();
        logoutFlow = new LogoutFlow();
    })
    it.skip('Test by logging in', async function(){
        // credentials = dataLoader.loadData('credentials.json');
        // const validCredentials = credentials.credentialsSets.validCredentials;
        await loginFlow.performLogin("ulshopify@ultralesson.com", "12345", "0000");

        // await footer.clickOnCartIcon();
        await browser.pause(10000);


        await cartScreen.navigateToHome();


        await logoutFlow.performLogout();

    })

    it.skip('Test by not logging in', async function(){
        // await footer.clickOnCartIcon();
        await browser.pause(15000);
        await cartScreen.navigateToHome();
        await browser.pause(5000);
    })
})