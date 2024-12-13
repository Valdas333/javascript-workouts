let customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
  Tracy: {
    visits: 1,
  },
};

function greetCustomer(customerToGreet, customerData) {
  const normalizedCustomerToGreet = customerToGreet.toLowerCase();

  const customerKey = Object.keys(customerData).find(
    (key) => key.toLowerCase() === normalizedCustomerToGreet
  );

  if (!customerKey) {
    return (
      "Welcome to the North Pole Café! " +
      "Is this your first time, " +
      customerToGreet +
      "? ❄️"
    );
  }

  const visits = customerData[customerKey].visits;
  if (visits === 1) {
    return (
      "Welcome back, " +
      customerKey +
      "! We’re glad you enjoyed your first visit! 🎅"
    );
  } else if (visits > 1) {
    return (
      "Merry greetings, " + customerKey + "! So wonderful to see you again!"
    );
  }
}

console.log(greetCustomer("Carrie", customerData));
console.log(greetCustomer("Tracy", customerData));
console.log(greetCustomer("Remy", customerData));
console.log(greetCustomer("Joe", customerData));
