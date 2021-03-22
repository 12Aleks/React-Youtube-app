// const euros = [29.76, 41.85, 46.5];
// const average = euros.reduce((total, amount, index, array) => {
//   if (amount / 2 > 15) {
//     total.push(amount / 2);
//   }
//   return total;
// }, []);
// average; // 39.37
// var wiz = [
//   {
//     name: "Harry Potter",
//     house: "Gryfindor",
//   },
//   {
//     name: "Cedric Diggory",
//     house: "Hufflepuff",
//   },
//   {
//     name: "Tonks",
//     house: "Hufflepuff",
//   },
//   {
//     name: "Ronald Weasley",
//     house: "Gryfindor",
//   },
//   {
//     name: "Hermione Granger",
//     house: "Gryfindor",
//   },
// ];

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

// const rez = fruitBasket.reduce(
//   (newArr, el) => ((newArr[el] = (newArr[el] || 0) + 1), newArr),
//   {}
// );
// rez;

// const rez1 = fruitBasket.reduce((arr, el) => {
//   arr[el] = (arr[el] || 0) + 1;
//   return arr;
// }, {});

// rez1;
// const data = [
//   { a: "happy", b: "robin", c: ["blue", "green"] },
//   { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
//   { a: "sad", b: "goldfish", c: ["green", "red"] },
// ];

// const rezData = data.reduce((arr, el) => {
//   el.c.forEach((color) => {
//     if (arr.indexOf(color) === -1) {
//       arr.push(color);
//     }
//   });
//   return arr;
// }, []);

// rezData;

// const test = wiz.reduce(
//   (newArr, obj) => (
//     (newArr[obj.house] = newArr[obj.house] || []).push(obj), newArr
//   ),
//   {}
// );
// test;

// var selected = [{ price: 20 }, { price: 45 }, { price: 67 }, { price: 1305 }];

// let key  = 20;

// let price = selected.reduce((sum, product) => {
//   sum += (product.price) * key ;
//   return sum;
// }, 0);

// price;

// const rez = fruitBasket.reduce((all, el) => {
//   if (!all[el]) {
//     all[el] = 1;
//     return all;
//   } else {
//     all[el] = all[el] + 1;
//     return all;
//   }
// }, {});

// rez;

// const rez = fruitBasket.reduce(
//   (all, el) => (all[el] = (all[el] || 0) + 1, all),
//   {}
// );

// rez;

var wiz = [
  {
    name: "Harry Potter",
    house: "Gryfindor",
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    name: "Tonks",
    house: "Hufflepuff",
  },
  {
    name: "Ronald Weasley",
    house: "Gryfindor",
  },
  {
    name: "Hermione Granger",
    house: "Gryfindor",
  },
];

const rez = wiz.reduce((full, el) => ((full[el.name] = el), full) , {});

rez;

let t = Object.keys(rez);
t  