"use strict";

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]} ${i} `);
  }
}

// printIndices(["apple", "berry", "cherry"]);

// 2. everyOtherItem
function everyOtherItem(items) {
  const lst = [];

  for (let i = 0; i < items.length; i += 2) {
    lst.push(items[i]);
  }
  console.log(lst);
}

// everyOtherItem(["apple", "berry", "cherry"]);

// 3. smallestNItems
function smallestNItems(items, n) {
  const items1 = items.sort();
  const items2 = items1.slice(0, n);
  // const items3 = items2.reverse();
  // console.log(items1);
  console.log(items2);
  // console.log(items3);
}

smallestNItems([9, 6, 2, 3, 6, 5, 2, 7, 8], 6); // expecting [0, 1, 2, 3] as the result
