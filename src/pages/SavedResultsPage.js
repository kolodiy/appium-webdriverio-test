'use strict';
const BasePage = require('./BasePage');
const ItemListChunk = require('./ItemListPage');
const FilterPage = require('./FilterPage');

class SavedResultsPage extends BasePage {

    get resultsCounter() {
        return $('#rowsCounter');
    }

    get savedResultItem() {
        return $$("a.block.title.adLink.notbinded.binded.bindedfm");
    }

    get searchList() {
        return $$("div.c-listing > div > div > div > a");
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

    getSavedResultsLinks(count = 5) {
        let savedResultsLinks = [];
        for (let index = 0; index < count; index++) {
            let link = this.savedResultItem[index].getAttribute('href');
            savedResultsLinks.push(link.substring(link.lastIndexOf('/')));
        }
        return savedResultsLinks
    }

}

module.exports = new SavedResultsPage();