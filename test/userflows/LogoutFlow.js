const Logger = require("../customlogger/Logger");
const BaseScreen = require("../screens/base/Base");
const Footer = require("../screens/common/Footer");
const ProfileScreen = require("../screens/ProfileScreen");


const footer = new Footer();
const profileScreen = new ProfileScreen();
const LOGGER = new Logger();

class LogoutFlow extends BaseScreen{

    
    async performLogout(){

        LOGGER.info('Logging out from the app');
        await footer.clickOnProfileIcon();
        await profileScreen.clickOnLogoutButton();

    }

    async navigateToHome(){
        
    }



}
module.exports = LogoutFlow;