"use strict";

// 1. isHometown

function isHometown(town) {
  if (town === "San Francisco") {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
// isHometown("Walnut Creek");

// 2. getFullName

function getFullName(first_name, last_name) {
  const full_name_array = [first_name, last_name];

  console.log(full_name_array.join(" "));
  // console.log(`${first_name} ${last_name}`); // This is another way that works!!!
}
// getFullName("Lucca", "Wang");

// 3. calculateTotal
function calculateTotal(basePrice, state, tax = 0.05) {
  const subtotal = basePrice * (1 + tax);
  let fee = 0;

  if (state == "CA") {
    let fee = 0.03 * subtotal;
  } else if (state == "PA") {
    let fee = 2;
  } else if (state == "MA");
  {
    if (basePrice <= 100) {
      let fee = 1;
    } else {
      let fee = 3;
    }
  }
  console.log(Number(subtotal) + Number(fee));
}
calculateTotal(5, "CA");
