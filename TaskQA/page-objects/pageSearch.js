// Searching for dress and  verify the search results 
module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',

    elements: {
        searchInput: '.search_query.form-control.ac_input',
        searchButton: '.btn.btn-default.button-search',
        searchResultItem: 'img[src="http://automationpractice.multiformis.com/img/p/1/0/10-home_default.jpg"]' // Selector for each search result item
    },

    commands: [{
        searchForDress: function () {
            return this
                .waitForElementVisible('@searchInput', 1000)
                .setValue('@searchInput', 'dress')
                .click('@searchButton')
                .waitForElementVisible('@searchResultItem', 3000);
        }
    }]
};
