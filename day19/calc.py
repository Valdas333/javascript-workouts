# Define the conversion factors
unit_conversions = {
    "ft": 30.48,
    "in": 2.54,
    "mil": 160934,
    "yd": 91.44,
    "wm": 60
}

def process_file(filename):
    try:
        with open(filename, 'r') as file:
            distance_list = file.read().strip().split("\n")

        total_distance = 0

        for element in distance_list:

            for unit, conversion in unit_conversions.items():
                if unit in element:
                    value = float(element.replace(unit, ""))
                    metric_value = value * conversion
                    total_distance += metric_value
                    print(f"Element: {element}, Unit: {unit}, Value: {value}, Metric: {metric_value:.2f}")
                    break

        print(f"\nTotal Distance (Metric): {total_distance:.2f} cm")

    except Exception as e:
        print(f"Error reading the file: {e}")


process_file("distances.txt")


