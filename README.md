## Feed Reader Testing
This project demonstrates the use of the Jasmine framework for JavaScript testing using the vehicle of a completed feed reader.

## How to View This Page
Clone or download this repository, then open index.html in your browser after starting a simple web server.

The easiest way is to use SimpleHTTPServer if you already have Python installed (it comes pre-installed on most Mac OS X and Linux computers). In a terminal window, cd into the downloaded directory and run the following command:

- python -m SimpleHTTPServer

- After it starts, you can navigate to http://0.0.0.0:8000/index.html in your preferred browser.


## Project Requirements
- Original Project assets.

- Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

- Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

- Write a new test suite named "The menu".

- Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

- Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

- Write a test suite named "Initial Entries".

- Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

- Write a test suite named "New Feed Selection".

- Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
No test should be dependent on the results of another.

- Callbacks should be used to ensure that feeds are loaded before they are tested.

- Implement error handling for undefined variables and out-of-bound array access.

- When complete - all of your tests should pass.

## Credits
The test cases were developed by Andres Espitia for the Udacity FrontEnd Web development Course using the starter code provided by Udacity. 
