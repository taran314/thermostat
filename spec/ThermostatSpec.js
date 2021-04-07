describe("Thermostat", function() {
  var testThermostat;
  var minTemp = 10;

  beforeEach(function(){
    testThermostat = new Thermostat();
  });

  describe("#current_setting", function() {
    it("starts at 20 degrees", function(){
      expect(testThermostat.current_setting()).toEqual(20);
    });
  });

  describe("#upTemp", function() {
    it("You can increase the temperature with an up function", function() {
      expect(testThermostat.upTemp(1)).toEqual(21);
    });

    it("cannot increase the temperature above 32 degrees", function() {
      expect(testThermostat.upTemp(13)).toEqual("Temperature cannot exceed 32 degrees, it has not been increased.");
    });

    it("If power saving mode is on, the maximum temperature is 25 degrees", function() {
      testThermostat.adjustPowerSave()
      expect(testThermostat.upTemp(13)).toEqual("Temperature cannot exceed 25 degrees, it has not been increased.");
    });
  });

  describe("#adjustPowerSave", function() {
    it("switches power save mode on and off", function() {
      expect(testThermostat.adjustPowerSave()).toBeTrue();
    });
  });

  describe("#downTemp", function() {
    it("You can decrease the temperature with a down function", function() {
      expect(testThermostat.downTemp(1)).toEqual(19);
    });
    it("has a minimum temperature of 10 degrees", function() {
      expect(testThermostat.downTemp(11)).toEqual(`Temperature cannot go below ${minTemp} degrees, it has been adjusted to 10 degrees!`)
      expect(testThermostat.current_setting()).toEqual(10);
    });
  });

});
