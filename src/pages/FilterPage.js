'use strict';
const BasePage = require('./BasePage');
const SearchResultsPage = require('./SearchResultsPage');

class FilterPage extends BasePage{
    get priceFromField() {
        return $('div.c-price > div:nth-child(1) > input');
    }

    get priceToField() {
        return $('div.c-price > div:nth-child(2) > input')
    }

    get dollarCurrencyButton() {
        return $('.c-select--currency .c-select__item:nth-of-type(2) .c-select__label')
    }

    get listViewButton() {
        return $$('.c-select--currency .c-select__item:nth-of-type(2) .c-select__label')[0];
    }

    get filterListItem() {
        return $$('form .c-field-label');
    }

    get specificFilterListItem() {
        return $$('.c-multiselect__list .c-field-value');
    }

    get doneButton() {
        return $('.c-field-layer__save span');
    }

    get resultsButton() {
        return $('.btn-search-form');
    }

    clickOnFilterTypeByIndex(index = 0) {
        return $(`form > div:nth-child(${index}) > div > p`).click();
    }

    clickOnSpecificFilterListItem(index = 0) {
        return $(`.c-multiselect__list .c-field-value:nth-of-type(${index})`).click();
    }

    loadFilteredResults(){
        this.resultsButton.click();
        return SearchResultsPage;
    }

    setTestFilter(){
        this.priceFromField.setValue('1000');
        this.priceToField.setValue('1500');
        this.dollarCurrencyButton.click();
        this.listViewButton.click();
        this.clickOnFilterTypeByIndex(8);
        this.clickOnSpecificFilterListItem(5);
        this.doneButton.click();
        this.clickOnFilterTypeByIndex(10);
        this.clickOnSpecificFilterListItem(3);
        this.doneButton.click();
        this.loadFilteredResults();
    }

}

module.exports = new FilterPage();