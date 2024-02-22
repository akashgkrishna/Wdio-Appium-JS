class BaseScreen {
    async click(selector) {
        const element = await $(selector);
        await element.waitForDisplayed();
        await element.click();
    }

    async clearText(selector) {
        const element = await $(selector);
        await element.waitForDisplayed();
        await element.clearValue();
    }

    async setValue(selector, value) {
        const element = await $(selector);
        await element.setValue(value);
    }

    async isDisplayed(selector) {
        const element = await $(selector);
        return await element.isDisplayed();
    }
    
}

module.exports = BaseScreen;