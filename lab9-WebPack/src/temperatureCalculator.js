function temperatureHandler(unit, value) {
  switch (unit) {
    case "celcius":
      return {
        celcius: value,
        fahrenheit: value * 1.8 + 32,
        kelvin: value + 273.15,
      };
    case "fahrenheit":
      return {
        celcius: (value - 32) / 1.8,
        fahrenheit: value,
        kelvin: (value - 32) / 1.8 + 273.15,
      };
    case "kelvin":
      return {
        celcius: value - 273.15,
        fahrenheit: (value - 273.15) * 1.8 + 32,
        kelvin: value,
      };
  }
}

module.exports = temperatureHandler;
