'use strict';

//Base class for holding generic helper methods
class BasePage {

    constructor() {
    }

    navigateToUrl(path = '/', {element} = {}) {
        if (element !== undefined) {
            browser.url(path);
            element.waitForVisible();
        } else {
            browser.url(path);
        }
    }
}

module.exports = BasePage;