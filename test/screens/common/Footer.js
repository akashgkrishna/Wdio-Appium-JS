const BaseScreen = require("../base/Base");

class Footer extends BaseScreen{
    constructor() {
        super();
        this.selectors = {
            profileIcon: `#icon-profile`,
            trackIcon: `#icon-track-order`,
            searchIcon: `#icon-explore`,
            cartIcon: `#icon-cart`,
            homeIcon: `#icon-home`
        };
    }

    async clickOnProfileIcon(){
        await this.click(this.selectors.profileIcon);
    }
}

module.exports = Footer;