'use strict';
const BasePage = require('./BasePage');
const FilterPage = require('./FilterPage');
const SavedResultsPage = require('./SavedResultsPage');

class SearchResultsPage extends BasePage {

    get starItemButton() {
        return 'div.qa-star-button.star-background';
    }

    get filterButton() {
        return $('.c-listing__filter-button span');
    }

    get searchList() {
        return $$("div.c-listing > div > div > div > a");
    }

    get savedResultsButton() {
        return $('a.c-navigation__link.qa-observed-ads-link');
    }

    addItemToFavoritesByIndex(index) {
        return $$("div.qa-star-button.star-background")[index].click();
    }

    navigateToFilterPage() {
        browser.execute('mobile: scroll', {direction: 'down', element: this.filterButton.value.ELEMENT});
        this.filterButton.click();
        FilterPage.resultsButton.waitForVisible();
        return FilterPage;
    }

    saveSearchResults(count = 5) {
        browser.waitForVisible(this.starItemButton);
        let filteredResultsLinks = [];
        for (let index = 0; index < count; index++) {
            this.addItemToFavoritesByIndex(index);
            let link = this.searchList[index].getAttribute('href');
            filteredResultsLinks.push(link.substring(link.lastIndexOf('/')));
        }
        return filteredResultsLinks
    }

    navigateToSavedResultsPage() {
        this.savedResultsButton.click();
        SavedResultsPage.resultsCounter.waitForVisible();
        return SavedResultsPage;
    }

}

module.exports = new SearchResultsPage();