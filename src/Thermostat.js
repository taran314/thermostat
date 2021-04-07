class Thermostat {
  constructor() {
    this.temperature = 20;
  };

  current_setting() {
    return this.temperature;
  };

  upTemp(amount) {
    if (this.temperature + amount > 32) {
      return "Temperature cannot exceed 32 degrees, it has not been increased.";
    } else {
      this.temperature += amount;
    }
    return  this.current_setting();
  };
};
