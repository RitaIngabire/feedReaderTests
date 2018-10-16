/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

'use strict';

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
   
    describe('RSS Feeds',function() {
        
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


        it('each feed has url defined', function() {  
            for(var feed of allFeeds) {
                /*
                What we are testing for here 
                ============================
                1. url field of each feed should exsist 
                2. url field of each feed should not be an empty string
                */
                expect(feed.url).toBeTruthy();
                expect(feed.url.length).not.toBe(0);
            }
        });


        it('each feed has a name', function(){ 
            for(var feed of allFeeds) {
                /*
                What we are testing for here 
                ============================
                1. each feed should have a name 
                2. each feed name should not be an empty string
                */
                expect(feed.name).toBeTruthy();
                expect(feed.name.length).not.toBe(0);
            }
        });        
    });


    /*The menu Test Suite */

    describe("The menu", function() {
        
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        

        it('toggles visibility when the menu icon is clicked', function(){
             const menu = $('.menu-icon-link');  

            /*
             *  When menu is clicked, if displayed hide, else display
             */             
             menu.click();
             expect($('body').hasClass('menu-hidden')).toBe(false);
             menu.click();
             expect($('body').hasClass('menu-hidden')).toBe(true);            
                      
        });
    });

    /* Initial Entries Test Suite */
    describe("Initial Entries", function() {

        beforeEach(function(done) {
            loadFeed(0, done);            
        });

        it('when the loadFeed completes there is at least a single entry within feed container', function() {
            let linksInFeed = $('.feed .entry');
            expect(linksInFeed.length > 0 ).toBe(true);
        });

    });

    /*New Feed Selection TestSuite */
    describe("New Feed Selection", function() { 
        
        let firstFeed = [];
        let secondFeed = [];       

        beforeEach(function(done) {
            /* 
             Load two feeds and compare them   
            */
           loadFeed(0, function(){
                Array.from($('.feed .entry')).forEach(function(link) {
                    firstFeed.push(link.innerText); 
                });                
                loadFeed(1, function(){                
                    Array.from($('.feed .entry')).forEach(function(link) {
                    secondFeed.push(link.innerText); 
                     });          
                    done();
                }); 

            });
        });                   

        it('loadFeed function runs, content changes', function() {            
            expect(firstFeed).not.toBe(secondFeed);                                       
        });


    });
}());

/* 
 References used to make Project
 https://goo.gl/7GK7VQ
*/