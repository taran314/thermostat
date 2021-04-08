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
  $("#power_save_on").hide();
  $("#current_setting").text(thermostat.current_setting());
  $('#temperature_up').on('click', function() {
    thermostat.upTemp(1);
    $("#current_setting").text(thermostat.current_setting());
  });
  $('#temperature_reset').on('click', function() {
      thermostat.resetTemp();
    $("#current_setting").text(thermostat.current_setting());
    // $(this).css("background-color", "blue");
  });
  $( "#temperature_down" ).on( "click", function() {
      thermostat.downTemp(1);
    $("#current_setting").text(thermostat.current_setting());
    // $("body").css("background-color","#99ffcc");
  });
  $("#power_save_on").on( "click", function() {
    thermostat.adjustPowerSave();
    $("#power_save_on").fadeOut();
    $("#power_save_off").fadeIn();
    $("#current_setting").text(thermostat.current_setting());
  });
  $("#power_save_off").on( "click", function() {
    thermostat.adjustPowerSave();
    $("#power_save_off").fadeOut();
    $("#power_save_on").fadeIn();
    $("#current_setting").text(thermostat.current_setting());
  });
});