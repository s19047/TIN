function distanceHandler(unit, value) {
  switch (unit) {
    case "kilometer":
      return {
        kilometer: value,
        mile: value / 1.609,
      };
    case "mile":
      return {
        kilometer: value * 1.609,
        mile: value,
      };
  }
}

module.exports = distanceHandler;
