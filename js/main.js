$( document ).ready(function() {

  var list = $('.list');
  var loader = $('.loader-wrapper');
  var key = '3629ea7365407c37c39077a452cb5df3';


  //The API has a limit to get maximum 20 posts, that is why I make five settings with different url-links to be abele to show 100 post.
  var settings1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=" + key,
    "method": "GET",
    "headers": {},
    "data": "{}",
  }

  var settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/popular?page=2&language=en-US&api_key=" + key,
    "method": "GET",
    "headers": {},
    "data": "{}",
  }

  var settings3 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/popular?page=3&language=en-US&api_key=" + key,
    "method": "GET",
    "headers": {},
    "data": "{}",
  }
  var settings4 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/popular?page=4&language=en-US&api_key=" + key,
    "method": "GET",
    "headers": {},
    "data": "{}",
  }
  var settings5 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/popular?page=5&language=en-US&api_key=" + key,
    "method": "GET",
    "headers": {},
    "data": "{}",
  }

  var index='';
  var settings = [settings1, settings2, settings3, settings4, settings5];

  getResults(settings);

  //to load posts when a function is done, to get the right order.
  function getResults(settings) {
    $.ajax(settings[0]).done(function(response) {
      printResults(response);
      $.ajax(settings[1]).done(function(response){
        printResults(response);
        $.ajax(settings[2]).done(function(response){
          printResults(response);
          $.ajax(settings[3]).done(function(response){
            printResults(response);
            $.ajax(settings[4]).done(function(response){
              printResults(response);
              loader.removeClass('active');
              list.addClass('active');
            });
          });
        });
      });
    });
  }

  //function that prints out every item in object
  function printResults(response) {
    response.results.forEach(function(result) {
      index++;
      list.append(createListItem(result));
    });
  }

  //function that creats a listitem in index.php
  function createListItem(result) {
    var html = '<li class="listitem">';
    html += '<div class="item-image"><img src="https://image.tmdb.org/t/p/w500/' + result.poster_path + '" /></div>';
    html += '<div class="item-content"><h4>' + index + '. ' + result.title + '</h4>';
    html += '<p>' + result.overview + '</p></div>';
    html += '</li>';

    return html;
  }
});
