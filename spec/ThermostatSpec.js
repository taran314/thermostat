describe("Thermostat", function() {
  var testThermostat;

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
  });

});
