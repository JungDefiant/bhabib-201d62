// Ice Cream Questions
// 1. Yes or No Question
// 2. Multiple Possible Answers
// 3. If they like it, continue rest of app; else, offer smoothie
// 4. Ask for size of order (provide options)

var likesIceCream = confirm('Do you like ice cream?');
console.log('Likes Ice Cream?: ' + likesIceCream);

if(likesIceCream) {
  console.log('Yum Ice Cream!');
} else {
  console.log('Give Smoothie');
}

var favoriteFlavor = prompt('What is your favorite flavor?');
console.log('Favorite Flavor: ' + favoriteFlavor);

if(favoriteFlavor === 'mint chip' || favoriteFlavor === 'Mint chip' || favoriteFlavor === 'Mint Chip') {
  console.log('GIVE IT TO BRYANT');
} else if(favoriteFlavor === 'oreo' || favoriteFlavor === 'Oreo') {
  console.log('GIVE IT TO LINDSEY');
} else if(favoriteFlavor === 'theTonightDough') {
  console.log('GIVE IT TO MASON its worth a lot tho');
} else {
  console.log('I want to try ' + favoriteFlavor + '. I never tried that before.');
}

// == is for loose types, for comparing values of different types
// === is for strict type comparison

// PRIMITIVES

// boolean
true;
false;

// string
''; // This evaluates as false
'abc'; // This evaluates as true

// numbers
123; // This evaluates as true
1.23; // This evaluates as true
-50; // This evaluates as true
0; // This evaluates as false

// others
null; // This evaluates as false
undefined; // This evaluates as false