const houses = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const speed = 10; // in km/h
const deliveryTime = calculateDeliveryTime(houses, speed, [0, 0], [0, 0]);

/**
 * @param {Array<number>} pointA
 * @param {Array<number>} pointB
 * @returns {number} Euclidean distance between two points
 */
function calculateDistanceBetweenTwoPoints(pointA, pointB) {
  return Math.sqrt(
    Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2)
  );
}

/**
 * @param {Array<Array<number>>} houses
 * @param {number} speed
 * @param {Array} santaHomeLocation
 * @param {Array} santaReturnLocation
 * @returns {number} Total time in hours to visit all houses and return
 */
function calculateDeliveryTime(
  houses,
  speed,
  santaHomeLocation,
  santaReturnLocation
) {
  validateSpeed(speed);
  validateCoordinates(houses);
  validateCoordinates([santaHomeLocation, santaReturnLocation]);
  let totalDistance = 0;
  const deliveryLocations = [...houses];
  deliveryLocations.unshift(santaHomeLocation);
  const santasDistanceToHome = calculateDistanceBetweenTwoPoints(
    deliveryLocations[deliveryLocations.length - 1],
    santaReturnLocation
  );
  for (let i = 1; i < deliveryLocations.length; i++) {
    totalDistance += calculateDistanceBetweenTwoPoints(
      deliveryLocations[i - 1],
      deliveryLocations[i]
    );
  }
  return (totalDistance + santasDistanceToHome) / speed;
}

/**
 * Validates the speed parameter.
 *
 * @param {number} speed - The speed value to validate.
 * @throws {Error} Throws an error if speed is not a number.
 * @throws {Error} Throws an error if speed is less than or equal to zero.
 */
function validateSpeed(speed) {
  if (typeof speed !== "number") {
    throw new Error("Speed must be a number.");
  }
  if (speed <= 0) {
    throw new Error("Speed must be greater than zero.");
  }
}

/**
 * Validates coordinates array.
 *
 * @param {Array<Array<number>>} coords - The coordinates to validate.
 * @throws {Error} Throws an error if coords is not an array.
 * @throws {Error} Throws an error if any coordinate is not a subarray of
 *   exactly two numbers.
 * @throws {Error} Throws an error if any coordinate contains a non-number.
 */
function validateCoordinates(coords) {
  if (!Array.isArray(coords)) {
    throw new Error("Coordinates must be an array.");
  }

  coords.forEach((point, index) => {
    if (!Array.isArray(point) || point.length !== 2) {
      throw new Error(`Invalid coordinate at index ${index}: ${point}`);
    }
    if (typeof point[0] !== "number" || typeof point[1] !== "number") {
      throw new Error(
        `Coordinates must be numbers at index ${index}: ${point}`
      );
    }
  });
}

console.log(deliveryTime);
