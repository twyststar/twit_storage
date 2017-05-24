var appid = '14a3d94ef13aae53af5a464c568794fb8329b8967bda34ee69fd7025abaebbaf'


function Bike(style, color, image, date) {
  this.style = style;
  this.color = color;
  this.image = image;
  this.date = date;
}

function dayStolen(dateInput) {
  time = new Date(dateInput * 1000);
    var month = time.getMonth();
    var day = time.getDate();
    var year = time.getFullYear();
    var dateStolen = month + ' ' + day + ', ' + year;
  return dateStolen;
}

Bike.prototype.getInfo = function(city, display) {
  bikes = [];
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=10&location=' + city + '&distance=10&stolenness=proximity&appid=' + appid).then(function(response){
    for (var i =0; i < 10; i++) {
      var style = response.bikes[i].title;
      var color = response.bikes[i].frame_colors;
      var image = response.bikes[i].thumb;
      var date = dayStolen(response.bikes[i].date_stolen);
      newBike = new Bike(style, color, image, date)
      bikes.push(newBike);
    }
    console.log(bikes)
    display(bikes);
  });
};

exports.bikeModule = Bike;
