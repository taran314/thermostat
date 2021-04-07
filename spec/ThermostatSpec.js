describe("Thermostat", function() {
  var testThermostat;

  beforeEach(function(){
    testThermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(testThermostat.temperature()).toEqual("20 degrees");
  });
});
