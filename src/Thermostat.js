class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maximum_temperature = 32
    this.powerSave = false
  };

  current_setting() {
    return this.temperature;
  };

  upTemp(amount) {
    if (this.temperature + amount > this.maximum_temperature) {
      return `Temperature cannot exceed ${this.maximum_temperature} degrees, it has not been increased.`;
    } else {
      this.temperature += amount;
    }
    return  this.current_setting();
  };

  adjustPowerSave() {
    if (this.powerSave) {
      this.powerSave = false
      this.maximum_temperature = 32
    } else {
      this.powerSave = true
      this.maximum_temperature = 25
    }
    return this.powerSave
  }
};
