// Searching for dress and  verify the search results 

module.exports = {
    'Search for dress': function (browser) {
        const searchPage = browser.page.pageSearch();
        searchPage
            .navigate()
            .searchForDress()
            .assert.elementPresent('@searchResultItem')
            .pause(3000);

        browser.end();
    }
};
