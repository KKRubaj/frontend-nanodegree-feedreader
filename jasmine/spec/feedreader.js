$(function() {

    // feeds definition and allFeeds variable
    describe('RSS Feeds', function() {

        // tests that the allFeed variable has been defined and that is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //tests that each feed in the allFeeds object has URL defined and that is not empty
         it('each has a URL defined and not empty', function() {
              allFeeds.forEach(feed => {
                  expect(feed.url).toBeDefined();
                  expect(feed.url.length).not.toBe(0);
              });
         });

         //tests that each feed in the allFeeds object has name defined and that is not empty
         it('each has a name defined and not empty', function() {
              allFeeds.forEach(feed => {
                  expect(feed.name).toBeDefined();
                  expect(feed.name.length).not.toBe(0);
              });
         });

    });


    // new test suite named "The menu"
    describe('The menu', function() {
        var menu,
            menuIcon;

         //tests that the menu element is hidden by default
         it('menu element hidden by default', function() {
             menu = document.querySelector('.menu-hidden');
             //console.log(menu);

             expect(menu).toBeDefined();
             expect(menu.classList.contains('menu-hidden')).toBe(true);
             //expect(menu).toHaveClass('menu-hidden'); // not works
         });

          // tests that the menu changes visibility when the menu icon is clicked
          it('changes visibility when icon is clicked', function() {
               menuIcon = document.querySelector('.menu-icon-link');
               //console.log(menuIcon);

               menuIcon.click();
               expect(menu.classList.contains('menu-hidden')).not.toBe(true); // or ...toBe(false);

               menuIcon.click();
               expect(menu.classList.contains('menu-hidden')).toBe(true);
          });
    });

    // new test suite named "Initial Entries"
    describe('Initial Entries', function() {
        var entries;

         // tests if a single element is within the .feed container, when the loadFeed function complete its work
         beforeEach(function(done) {
             loadFeed(0, done);
         });

         it('feed container has .entry element', function() {
             entries = document.querySelectorAll('.feed .entry');
             //console.log(entries.length);

             expect(entries).toBeDefined();
             expect(entries.length).toBeGreaterThan(0);
         });
    });
    // new test suite named "New Feed Selection"
    describe('New Feed Selection', function() {

         //tests that the content actually changes when a new feed is loaded by the loadFeed function
         var feed,
             feedOldContents,
             feedNewContents;

         beforeEach(function(done) {
             loadFeed(0, function() {
                 feed = document.querySelector('.feed');
                 feedOldContents = feed.innerHTML;
                 //console.log(feedOldContents);
                 loadFeed(1, function() {
                     feed = document.querySelector('.feed');
                     feedNewContents = feed.innerHTML;
                     done();
                 });
             });
         });

         it('new feed is loaded and content changes', function() {

             expect(feed).toBeDefined();
             expect(feedNewContents).not.toEqual(feedOldContents);
             //console.log(feedNewContents);

         });
    });
}());
