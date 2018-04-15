const SearchResultsPage = require('../src/pages/SearchResultsPage');
const SavedResultsPage = require('../src/pages/SavedResultsPage');
const MainPage = require('../src/pages/MainPage');
/*
This test verifies saving filtered results functionality.
Test steps:
1. Navigate to https://olx.ua/
2. Change Language to ukrainian
3. Navigate to: Electronics -> Phones and accessories -> Mobile phones and accessories
4. Narrow down search results by providing additional search criteria:
Price - from:1000, to:1500
Currency - $
Brand - Apple
Condition- New
View- List
5. Click on results button
6. Star top 5 results
7. Go to Starred advertisements

Accepted criteria:
1. Assert that there are 5 results;
2. Assert that starred adds match to the adds in step 6

Note:
For verification, used comparing href of each starred item, as in this case it is unique identifier.
*/
describe('Save filtered results to favorites', function () {
    before(() => {
        MainPage.navigateToUrl('https://olx.ua/', {element: MainPage.acceptCookiesButton});
        MainPage.acceptCookiesButton.click();
        MainPage.ukrainianLanguageLink.click();
        MainPage.navigateToSmartphonesSection()
            .navigateToFilterPage()
            .setTestFilter()
    });
    it('Should correctly save five filtered results to favorites', function () {
        let filteredSavedLinks = SearchResultsPage.saveSearchResults();
        SearchResultsPage.navigateToSavedResultsPage();
        let actualResultsCounter = SavedResultsPage.resultsCounter.getText();
        let actualSavedLinks = SavedResultsPage.getSavedResultsLinks();
        assert.equal(actualResultsCounter, 5);
        assert.sameMembers(filteredSavedLinks, actualSavedLinks.reverse());
    });
});
