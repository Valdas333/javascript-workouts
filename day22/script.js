/**
 * Calculates average temperature for a given day, given 24 temperatures for each hour of the day
 * @param {Array<number>} temperatures - Array of 24 temperatures each representing an hour of the day
 * @returns {number|String} The average temperature for the day, or a string error message if the input is invalid
 */
function calculateAverageDayTemperature(temperatures) {
  if (temperatures === undefined) {
    return "Temperatures parameter is required";
  } else if (temperatures.length < 24) {
    return "not enough data to calculate, add more temperatures(each hour)";
  } else if (temperatures.length > 24) {
    return "Too much data, provide only 24 temperatures";
  } else if (temperatures.some((element) => isNaN(Number(element)))) {
    return "Only numeric data allowed for calculations";
  }

  const dayTempAverage =
    temperatures.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    ) / 24;
  0;
  return dayTempAverage;
}

/**
 * Calculates probability of snowfall based on average day temperature and humidity
 * @param {number} avgDayTemperature - average day temperature in celsius
 * @param {number} humidity - humidity in percentage
 * @returns {number|String} Probability of snowfall, ranging from 0 to 100, or an error string if invalid input.
 */
function calculateSnowProbability(avgDayTemperature, humidity) {
  let snowProbability = 0;

  if (isNaN(Number(avgDayTemperature)) || avgDayTemperature === undefined) {
    return "Invalid day temperature!";
  } else if (isNaN(Number(humidity)) || humidity === undefined) {
    return "Invalid humidity value!";
  }

  if (avgDayTemperature < 0) {
    snowProbability += 35;
  }
  if (humidity > 80) {
    snowProbability += 40;
  }

  return snowProbability;
}

/**
 * Calculates snow depth, given average day temperature and humidity
 * @param {number} avgDayTemperature - average day temperature in celsius
 * @param {number} humidity - humidity in percentage
 * @returns {number} snow depth
 */
function calculateSnowDepth(avgDayTemperature, humidity) {
  return (Math.round(100 - avgDayTemperature) * humidity) / 100;
}

/**
 * Predicts whether it will snow based on provided temperatures and humidity.
 * Calculates the average day temperature, the probability of snowfall,
 * and the expected snow depth. Returns an object indicating if it will snow,
 * the probability of snowfall, and the expected snow depth.
 *
 * @param {Array<number>} temperatures - Array of 24 temperatures each representing an hour of the day
 * @param {number} humidity - Humidity in percentage
 * @returns {Object} - Prediction result with properties: willSnow (boolean), probability (number), expectedDepth (number)
 */

function predictSnowfall(temperatures, humidity) {
  const averageDayTemp = calculateAverageDayTemperature(temperatures);
  const snowProbability = calculateSnowProbability(averageDayTemp, humidity);
  const snowDepth = calculateSnowDepth(averageDayTemp, humidity);

  const prediction = {
    willSnow: snowProbability > 70 ? true : false,
    probability: snowProbability,
    expectedDepth: snowProbability > 70 ? snowDepth : 0,
  };

  return prediction;
}

const prediction1 = predictSnowfall(
  [
    -6.8, -7.1, -6.9, -6.2, -5.4, -4.8, -4.1, -3.9, -3.5, -3.2, -3.0, -3.3,
    -3.7, -4.2, -4.9, -5.3, -5.8, -6.2, -6.5, -6.8, -7.0, -7.2, -7.1, -6.9,
  ],
  88
);

const prediction2 = predictSnowfall(
  [
    -1.5, -1.3, -1.0, -0.8, -0.7, -0.9, -1.2, -1.4, -1.7, -2.0, -2.2, -2.4,
    -2.5, -2.3, -2.1, -1.8, -1.6, -1.4, -1.3, -1.5, -1.8, -2.1, -2.3, -2.4,
  ],
  60
);
console.log(prediction1);
console.log(prediction2);
