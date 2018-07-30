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
    describe('RSS Feeds', function() {
        // Checks to make sure that the allFeeds variable has been defined and is not empty.
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Checks each feed in allFeeds and sees if each URL is defined and is not empty.
        it('have URLs defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

        // Checks each feed in allFeeds and sees if each name is defined and is not empty.
        it('have names defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });


    describe('The Menu', function() {
        // Checks to see if the menu is hidden by default.
        it('Menu is hidden by default', function() {
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Checks to see if the menu displays when clicked and hides when clicked again.
        it('Menus are visible', function() {
          // Uses the jqury .click() method.
          $('.icon-list').click();
          expect($('body').hasClass('menu-hidden')).toBe(false);

          $('.icon-list').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
         // Calls loadFeed() before the tests are performed.
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         // Checks to see if the .feed container has at least 1 child .entry element.
         it('Should be at least single element after the loadFeed function is called', function(done) {
           expect($('.feed .entry').length).toBeGreaterThan(0);
           done();
         });
    });


  describe('New Feed Selection', function() {
    let firstFeedContent;
    let secondFeedContent;

    // Make sure loadFeed function is called/completes its work
    beforeEach(function(done){
      // Load and save the first feed's content
      loadFeed(0, function() {
        firstFeedContent = document.querySelector('.feed').innerHTML;
        // Load and save the second feed's content
        loadFeed(1, function() {
          secondFeedContent = document.querySelector('.feed').innerHTML;
          done();
        });
      });
    });

    //Ensures when a new feed is loaded that the content actually changes
    it('content actually changes', function(done) {
      // Error handling for out-of-bound array access
      expect(allFeeds[0]).toBeDefined();
      expect(allFeeds[1]).toBeDefined();
      // Error handling for undefined variables
      expect(firstFeedContent).toBeDefined();
      expect(secondFeedContent).toBeDefined();
      // Make sure content is not the same
      expect(firstFeedContent).not.toBe(secondFeedContent);
      done();
    });
  });
}());
