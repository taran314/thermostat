$(document).ready(function() {
  var thermostat;
  thermostat = new Thermostat();
  CityTemp()
  // let elementsArray = document.querySelectorAll("button");
  // elementsArray.forEach(function(elem) {
  //   elem.addEventListener("click", function() {
  //     $("#current_setting").text(thermostat.current_setting());
  //   });
  // });
  
  // appid should be stored in an Env variable - SENSITIVE DATA!!! 
  function CityTemp(name = "London") {  
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        data: {
          'q' : `${name}`,
          'units' : 'metric',
          'appid' : '23738962f475494b1af4f1d87c114a52',
        },
        type: "GET",
        dataType: "json",
      })
      .done(function( json ) {
        $( "<h2>" ).text( `${json.name}, ${json.sys.country} : ${json.main.temp}°C` ).appendTo( "body" );
        console.log(json)
    });
  };

  $( "#city-input" ).submit(function( event ) {
    event.preventDefault();
    CityTemp($( "#city" ).val());
  });

  function UpdateTemp() {
    $("#current_setting").text(thermostat.current_setting());

    if (thermostat.energyUsage() === "Low") {
      $("#current_setting").css("color", "0000FF");
    } else if (thermostat.energyUsage() === "Medium") {
      $("#current_setting").css("color", "#000000");
    } else {
      $("#current_setting").css("color", "#FF0000");
    }   
  }

  $("#power_save_on").hide();
  $("#current_setting").text(thermostat.current_setting());

  $('#temperature_up').on('click', function() {
    thermostat.upTemp(1);
    UpdateTemp();
  });
  $('#temperature_reset').on('click', function() {
    thermostat.resetTemp();
    UpdateTemp();
  });
  $( "#temperature_down" ).on( "click", function() {
    thermostat.downTemp(1);
    UpdateTemp();
  });
  $("#power_save_on").on( "click", function() {
    thermostat.adjustPowerSave();
    $("#power_save_on").fadeOut();
    $("#power_save_off").fadeIn();
    UpdateTemp();
  });
  $("#power_save_off").on( "click", function() {
    thermostat.adjustPowerSave();
    $("#power_save_off").fadeOut();
    $("#power_save_on").fadeIn();
    UpdateTemp();
  });
});