class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maximum_temperature = 32
    this.minimum_temperature = 10
    this.powerSave = false
  };

  current_setting() {
    return this.temperature;
  };

  upTemp(amount) {
    if (this.temperature + amount > this.maximum_temperature) {
      return `Temperature cannot exceed ${this.maximum_temperature} degrees, it has not been increased.`;
    } else {
      return this.temperature += amount; }
  };

  downTemp(amount) {
    if (this.temperature - amount < this.minimum_temperature) {
      this.temperature = 10;
      return `Temperature cannot go below ${this.minimum_temperature} degrees, it has been adjusted to 10 degrees!`;
    } else {
      return this.temperature -= amount;
    };
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
