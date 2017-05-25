// var Bike = require('./../js/bike.js').bikeModule;
//
//
// var display = function(bikes){
//   $('.return').text('');
//   bikes.forEach(function(bike) {
//     $('.return').append('<li><ul><li>Title: ' + bike.style + '</li><li>Color: ' + bike.color + '</li><li>Date Stolen: ' + bike.date + '</li><li>Image: <img src="' + bike.image + '" alt="No image available."</li><br><br>');
//
//   });
// };
//
//
//
//
// $(document).ready(function(){
//   var bikeSearch = new Bike();
//   $('#bikeForm').submit(function(){
//     event.preventDefault();
//     var city = $('#city').val();
//     $('#city').val('');
//     bikeSearch.getInfo(city, display);
//   });
// });
