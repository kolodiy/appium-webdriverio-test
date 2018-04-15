'use strict';
const BasePage = require('./BasePage');

class ItemListPage extends BasePage {

    clickOnCategoryByIndex(index = 0) {
        return $(`.categories-list__container li:nth-of-type(${index}) .categories-list__content--title`).click();
    }
}

module.exports = new ItemListPage();