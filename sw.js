$(document).ready(function()
{
  var lat;
  var lon;
  $.getJSON("http://ip-api.com/json", function(data) {
    lat = data.lat;
    lon = data.lon;
    console.log(lat);
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=bf64b46e065de79ad1f3f54bba617c79";

    $.getJSON(url, function(json) {
      $("#city").html(json.name + ", " + json.sys.country);
      $("#sky").html(json.weather[0].description);

      $("#wind").html("Wind: " + (json.wind.speed * 3.6).toFixed(1) + "km/h");
      var kTemp = (json.main.temp);
      var cTemp = (kTemp - 273.15).toFixed(1);
      var fTemp = ((kTemp * 9 / 5) - 459.67).toFixed(1);
      $("#temp").html(cTemp + "&deg;C");
      var tempSwap = true;
      $("#temp").click(function() {
        if (tempSwap === false) {
          $("#temp").html(cTemp + "&deg;C");
          tempSwap = true;
        } else {
          $("#temp").html(fTemp + "&deg;F");
          tempSwap = false;

        }
      });
      if (kTemp > 279) {
        $('body').css('background-image', 'url(https://images.unsplash.com/photo-1427464407917-c817c9a0a6f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=027dfa95ecc186cb04216b397e99b9b0)');
      } else {
        $('body').css('background-image', 'url(https://images.unsplash.com/photo-1486162452573-67aa76781dd8?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;s=ad5a0d0f8b716034db5173affd992679)');
      }
    });

  });

});
