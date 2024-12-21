const coords = require("./coordinates.js");

function calculateDistanceBetweenTwoPoints(pointA, pointB) {
  return Math.sqrt(
    Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2)
  );
}

function getDistancesFromPoints(coords) {
  let distance = 0;
  let totalDistanceArray = [];

  for (let i = 0; i < coords.length; i++) {
    for (let j = 1; j < coords[i].length; j++) {
      distance += calculateDistanceBetweenTwoPoints(
        coords[i][j - 1],
        coords[i][j]
      );
    }
    totalDistanceArray.push(distance);
    distance = 0;
  }

  return totalDistanceArray;
}

function distanceBetweenMinAndMax(coords) {
  coords.sort((a, b) => a - b);
  return coords[coords.length - 1] - [coords[0]];
}

const result = distanceBetweenMinAndMax(getDistancesFromPoints(coords));

console.log(result.toFixed(2));
