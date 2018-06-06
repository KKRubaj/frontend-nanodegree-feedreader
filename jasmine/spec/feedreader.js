/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('each has a URL defined and not empty', function() {
              allFeeds.forEach(feed => {
                  expect(feed.url).toBeDefined();
                  expect(feed.url.length).not.toBe(0);
              });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('each has a name defined and not empty', function() {
              allFeeds.forEach(feed => {
                  expect(feed.name).toBeDefined();
                  expect(feed.name.length).not.toBe(0);
              });
         });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        var menu,
            menuIcon;

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu element hidden by default', function() {
             menu = document.querySelector('.menu-hidden');
             //console.log(menu);

             expect(menu.classList.contains('menu-hidden')).toBe(true);
             //expect(menu).toHaveClass('menu-hidden'); // not works
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility when icon is clicked', function() {
               menuIcon = document.querySelector('.menu-icon-link');
               //console.log(menuIcon);

               menuIcon.click();
               expect(menu.classList.contains('menu-hidden')).not.toBe(true); // or ...toBe(false);

               menuIcon.click();
               expect(menu.classList.contains('menu-hidden')).toBe(true);
          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        var entries;

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
             loadFeed(0, done);
         });

         it('feed container has .entry element', function() {
             entries = document.querySelectorAll('.feed .entry');
             //console.log(entries.length);

             expect(entries.length).toBeGreaterThan(0);
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var feed,
             feedContents,
             feedNewContents;

         beforeEach(function(done) {
             loadFeed(0, function() {
                 feed = document.querySelector('.feed');
                 feedContents = feed.innerHTML;
                 console.log(feedContents);
                 
                 done();
             });
         });

         it('new feed is loaded and content changes', function(done) {
             loadFeed(1, function() {
                 feed = document.querySelector('.feed');
                 feedNewContents = feed.innerHTML;

                 expect(feedNewContents).not.toEqual(feedContents);
                 console.log(feedNewContents);

                 done();
             });
         });
    });
}());
