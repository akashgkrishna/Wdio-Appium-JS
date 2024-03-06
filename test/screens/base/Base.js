class BaseScreen {
    async getElement(selector) {
        if (typeof selector !== 'string' || !selector) {
            throw new Error('Invalid selector provided');
        }
        return await $(selector);
    }

    async click(selector) {
        const element = await this.getElement(selector);
        await element.waitForDisplayed({ timeout: 20000, timeoutMsg: 'Element not displayed for click action' });
        await element.click();
    }

    async setValue(selector, value) {
        const element = await this.getElement(selector);
        await element.setValue(value);
    }

    async clearText(selector) {
        const element = await this.getElement(selector);
        await element.clearValue();
    }  

    async isDisplayed(selector) {
        try {
            await browser.waitUntil(async () => {
                const element = await this.getElement(selector);
                return await element.isDisplayed();
            }, {
                timeout: 10000,
                timeoutMsg: 'Element did not display in the specified time',
                interval: 2000
            });
            return true;
        } catch (error) {
            console.error('Error while checking if element is displayed: \n', error);
            return false;
        }
    }

    // Using promise then catch
    // async isDisplayed(element) {
    //     return browser.waitUntil(async () => {
    //         return await element.isDisplayed();
    //     }, {
    //         timeout: 10000,
    //         timeoutMsg: 'Element did not display in the specified time'
    //     }).then(() => true)
    //     .catch(error => {
    //         console.error('Error while checking if element is displayed: \n', error);
    //         return false;
    //     });
    // }

    async getText(selector) {
        const element = await this.getElement(selector);
        return await element.getText();
    }

}

module.exports = BaseScreen;
