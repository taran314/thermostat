$(document).ready(function() {
  var thermostat;
  thermostat = new Thermostat();

  // let elementsArray = document.querySelectorAll("button");
  // console.log(elementsArray);
  // elementsArray.forEach(function(elem) {
  //   elem.addEventListener("click", function() {
  //     $("#current_setting").text(thermostat.current_setting());
  //   });
  // });

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