var Tweet = require('./../js/twit-stuff.js').tweetModule;
var Twit = require('twit')
var env = require('../.env')



$(document).ready(function(){
  $('#bikeForm').submit(function(event){
    event.preventDefault();
    input = $('#city').val();

    var T = new Twit(env);

    var params = {q: input, count: 2};

    T.get('search/tweets', params,  gotData).then(function(gotData) {
      function gotData(err, data, response) {
          console.log(data)
          console.log(response);
      }
  });
});


var display = function(tweet){
  $('.return').append('Hi' + tweet);
}
