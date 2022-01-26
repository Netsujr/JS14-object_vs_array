// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);
// ** the original values goes in, if you change the value later,
// ** it won't affect you old variable
// ** this also goes for booleans and strings
// console.clear();

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);
// ** Team is just a reference to the original array, not a a copy

// You might think we can just do something like this:
team[3] = 'Renato';
console.log(players, team);
// ** if you update an array, it will always reference back
// ** need to make an actual copy of the array

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!


// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
// ** if we pass nothing to slice(), it will copy the original array its referencing.
console.log(team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
// ** Works the same as above

// or use the new ES6 Spread
const team4 = [...players];
// ** takes every item of original and put it into new array, doesnt change original
const team5 = Array.from(players) // creates an array from (passed_array)

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
// console.clear();
// with Objects
const person = {
  name: 'Renato Delboni',
  age: 29
};

// and think we make a copy:
const captain = person;
// captain.age = 99;
console.log(person);
console.log(captain);
// ** cannot copy like this, original object also changes.

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { age: 99});
// ** create empty object
// ** take everything from original object
// ** change attributes you wish to update
console.log(captain2);


// We will hopefully soon see the object ...spread
const captain3 = {...person};
// **  this is an object spead.

// ** ** ** spead/copy is shallow, it does not go into objects within objects
// ** it only goes for 1 level. find a function called "CloneDeep" to clone all levels.

// CHEAT CODE
const dev2 = JSON.parse(JSON.stringify(captain));
// ** turns it into a string, then immediately turn it is back into an object,
// ** poor mans way around the solution (performance issues);


console.log(captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
