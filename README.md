## Project Details

In this project we used the Javascript Testing library Jasmine to write tests for a feedReader Application.  

The FeedReader is using Ajax to asynchronously load feeds from four sites  
i)  Udacity Blog  
ii) CSS Tricks  
iii)HTML5 Rocks  
iv) Linear Digressions  


## Code Structure 

The key files to take note of are:  
The app.js file that does the feed loading.  
The specrunner.js file in the jasmine folder has all the tests for the application.

## The Tests that were Written

1.RSS Feeds TestSuite :  
RSS Feeds are defined  
Each feed has url defined  
Each feed has a name  

2.The Menu TestSuite :  
The Menu of possible feeds is hidden by default  
The Menu toggles visibility when the menu icon is clicked

3.Initial Entries TestSuite:  
Checks that when the loadFeed completes there is at least a single entry within feed container
 
4.New Feed Selection TestSuite:  
Checks that when loadFeed function runs, content changes

## How to Run tests 

Execute Jasmine Tests by running index.html
