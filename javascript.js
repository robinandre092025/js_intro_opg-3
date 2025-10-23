/******************************************************************************
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------

1.

Use a regular 'for loop' to iterate through the `people` array and do the following:

- If the object's `name` value is "Otto", none of the changes below should be made
  to that object (hint: use the `continue` keyword).

- Create a new key on each person object in the array called "city" and set its value
  to a random city from the `cities` array.

- Create a new key on each person object called "title" and set it to "Mr." for
  males and "Ms." for females.
	
- Increase the age by 2.

- Add "coding" to the beginning of the hobbies array in each object.

**PS**: Use only one loop to perform all the steps above.

Use `console.log(people)` after the loop to check that the changes are correct.

Use your loop to calculate the combined age of all person objects
and store it in the variable `combinedAge`.

Then, after the loop, use the combined age to calculate the average age
for everyone, and store it in the variable `averageAge`.

Do the calculations AFTER adding two years to the age, and remember, skip Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

let combinedAge = 0;
let averageAge = 0;

// Write the code for assignment 1 here

for (let i = 0; i < people.length; i++) {
  if (people[i].name.toLowerCase() === "otto") {
    continue;
  }

  people[i].city = cities[Math.floor(Math.random() * cities.length)];
  people[i].title = people[i].male ? "Mr." : "Ms.";
  people[i].hobbies.unshift("coding");
  people[i].age += 2;

  combinedAge += people[i].age;
}

averageAge = combinedAge / people.length;

console.log(people);
console.log(`Average age: ${averageAge}`);

/******************************************************************************
2.

Create the following function:

The function should take one number as a parameter.

The function should return an array with random numbers between 1 and 6.
The length of the array is determined by the number the function receives as a parameter
(think of it as the number of dice we roll).

Examples:
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

Add a second parameter to the function that determines how many sides the die should have.
diceRoller(5, 20) should return an array with 5 random numbers from 1-20.

******************************************************************************/

// Write the code for assignment 2 here

function diceRoller(numRolls, numSides = 6) {
  let rolledDice = [];

  for (let i = 0; i < numRolls; i++) {
    rolledDice.push(Math.floor(Math.random() * numSides) + 1);
  }
  // console.log(rolledDice);

  return rolledDice;
}

console.log(`Rolling 5 dice with 6 sides:\n`, diceRoller(5, 4));
console.log(`Rolling for initiative:\n`, diceRoller(1, 20));

/******************************************************************************
3.

Create the following function:

The function should take an array of strings as a parameter.

Inside the function, do the following:

Write a loop that iterates through the strings in the array, and does the following:
- Remove spaces from the beginning and end of each word.
- Convert all words to lowercase.

Use a "for...of" loop.

After the loop, use a method to join the array into a single string
with a single space between the words (" "), and return the resulting string.

Example:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
should return:
"this text needs to be cleaned up"

******************************************************************************/

// Write the code for assignment 3 here

let messyTextArr = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"];

function cleanText(arr) {
  let cleanedArr = [];
  for (let word of arr) {
    cleanedArr.push(word.trim().toLowerCase());
  }

  cleanedArr.splice(cleanedArr.indexOf("needs"), 3, "has", "been");
  cleanedArr.push(":)");

  return cleanedArr.join(" ");
}

console.log("Running cleanText(messyTextArr):\n", cleanText(messyTextArr));

/******************************************************************************
4.

Complete the function below to achieve the following:

Return the string received in the first parameter with the following changes:

Each letter in the string that matches `charA` (second parameter) should be replaced
with `charB` (third parameter), and VICE VERSA - meaning that letters that
match `charA` should be replaced with `charB`, and letters that match `charB` should
be replaced with `charA`.

Examples:

doubleSwap("this is a string", "i", "s")
should return "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
should return "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
should return "whao is ohe ptino tf ohis?"

******************************************************************************/

function doubleSwap(string, charA, charB) {
  // Write the code for assignment 4 here
  let swappedString = "";

  // This was my first thought process, but this would first replace all of charA with charB
  // then swap all previously replaced charA back to charA (because they are now charB), which is unintended.
  //
  // swappedString = string.replaceAll(charA, charB);
  // swappedString = string.replaceAll(charB, charA);

  // Go through every character of the string and add the next character for each step to a new string,
  // and if the current step has a character that should be swapped, swap it and add it to the new string.
  for (let char of string) {
    if (char == charA) {
      swappedString += charB;
    } else if (char === charB) {
      swappedString += charA;
    } else {
      swappedString += char;
    }
  }
  return swappedString;
}

console.log(doubleSwap("Heisann alle sammen!", "a", "e"));
/******************************************************************************
5.

EXTRA CHALLENGE:

(Solving this assignment is not mandatory, only for those who want an extra challenge)

Create a function called `helloChecker` that takes a string as a parameter.

Write code that checks all the words in the string to find out if any of them
match the word for "hello" in any of these languages:

- hello (English)
- ciao (Italian)
- salut (French)
- hallo (German)
- hola (Spanish)
- czesc (Polish)

If any of the words in the string match one of these, the function should return:
"HELLO detected in (name of the language)."

If none of the words in the string match, the function should return:
"No HELLO detected."

PS: Make sure the function is case-insensitive; both "Hello" and "hello" should be detected.

I have added some test variables to check your function.

******************************************************************************/

const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!",
];

// Write the code for assignment 5 here

function helloChecker(str) {
  const hellos = {
    english: "hello",
    italian: "ciao",
    french: "salut",
    german: "hallo",
    spanish: "hola",
    polish: "czesc",
  };

  const words = str.toLowerCase().split(" ");

  for (let word of words) {
    for (let key in hellos) {
      if (word.includes(hellos[key])) {
        return `HELLO detected in ${key.charAt(0).toUpperCase() + key.slice(1)}.`;
      }
    }
  }
  return "No HELLO detected.";
}

// console.log(helloChecker(greetings[1]));

for (let greeting of greetings) {
  console.log(helloChecker(greeting));
}
