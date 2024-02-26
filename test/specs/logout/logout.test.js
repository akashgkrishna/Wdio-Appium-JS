const LoginFlow = require('../../userflows/LoginFlow');
const LogoutFlow = require('../../userflows/LogoutFlow');
const dataLoader = require('../../utils/dataLoader');


describe('Logout flow', async function(){
    let credentials;
    let logoutFlow;
    let loginFlow;

    this.beforeEach(async function(){
        // Login to application
        loginFlow = new LoginFlow();
        credentials = dataLoader.loadData('credentials.json');
        const validCredentials = credentials.credentialsSets.validCredentials;
        await loginFlow.performLogin(validCredentials.username, validCredentials.password, validCredentials.otp);

        logoutFlow = new LogoutFlow();

    })

    it('should successfully perform the logout flow', async function(){

        // Act
        await logoutFlow.performLogout();

    })
})