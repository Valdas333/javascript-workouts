const fs = require("fs").promises;

const unitConversions = {
  ft: 30.48,
  in: 2.54,
  mil: 160934,
  yd: 91.44,
  wm: 60,
};

async function processFile() {
  try {
    const data = await fs.readFile("distances.txt", "utf-8");
    const distanceArray = data.split("\n").map((line) => line.trim());

    const someArray = [];
    let totalDistance = 0;

    distanceArray.forEach((element) => {
      const unit = Object.keys(unitConversions).find((key) =>
        element.includes(key)
      );
      if (unit) {
        const value = Number(element.split(unit)[0]);

        if (!isNaN(value)) {
          const unitMetric = value * unitConversions[unit];
          someArray.push({
            unitUS: value,
            unit,
            unitMetric,
          });

          totalDistance += unitMetric;
        }
      }
    });

    console.log("Total Distance (Metric):", totalDistance.toFixed(2));
  } catch (err) {
    console.error("Error reading the file:", err);
  }
}

processFile();
