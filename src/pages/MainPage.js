'use strict';
const BasePage = require('./BasePage');
const ItemListChunk = require('./ItemListPage');
const SearchResultsPage = require('./SearchResultsPage');

class MainPage extends BasePage {

    get acceptCookiesButton() {
        return $('#root .btn-primary');
    }

    get ukrainianLanguageLink() {
        return $('.c-lang-switcher__button');
    }

    get electronicsCategoryListItem() {
        return $('.categories-list__content--title')[8];
    }

    /* Using generic method, that can be used on any locale to click by index of item,
     for convenience, JSON with categories names can be added, e.g. categories : {'Electronics':10}. */

    navigateToSmartphonesSection() {
        ItemListChunk.clickOnCategoryByIndex(10);
        ItemListChunk.clickOnCategoryByIndex(2);
        ItemListChunk.clickOnCategoryByIndex(3);
        browser.waitForVisible(SearchResultsPage.starItemButton);
        return SearchResultsPage;
    }

}

module.exports = new MainPage();