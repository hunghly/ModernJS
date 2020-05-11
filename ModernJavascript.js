//import {steamKey} from './keys.js';
const fetch = require('node-fetch');

// ES 6 updates
// String Interpolation/String Template Literal
let age = 26;
let finalString = `Hung is ${age} years old`;
let zenva = 'Zenva';
// Pad start and pad end
zenva = zenva.padEnd(10, '.');
zenva = zenva.padStart(15, '.');
// New arrow functions
let add = (x, y) => {
  return x + y;
}
console.log(add(1,2)); // returns 3
// New default parameters
let sub = (x , y = 1) => {
  return x - y;
}
console.log(sub(1));
// Promises
const promise = new Promise((resolve, reject) => {
  let number1 = 5;
  if (number1 === 5) {
    resolve('resolved');
  } else {
    reject('rejected');
  }
});
promise.then((response) => {
  console.log(response);
}).catch((response)=> {
  console.log(response);
});
// Asynchronous functions
async function multiply(x,y) {
  return await x * y;
}
let appId = 221380; // AoE II game ID
let url = `http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${appId}`;
async function fetchData(url) {
  console.log(url);
  let response = await fetch(url);
  let jsonResponse = await response.json();
  printData(jsonResponse);
  console.log(JSON.stringify(jsonResponse));
}
// new loops
let numbers = [1,2,3,4,5];
for (let number of numbers) {
  console.log('counting' + number);
}

let printData = (data) => {
  let jsonObject = data['achievementpercentages'];
  let allAchievements = jsonObject['achievements'];
  let achievementsArray = [];
  for (let achievement of allAchievements) {
    // console.log('NAME: ' + achievement.name);
    // console.log('PERCENT: ' + achievement.percent);
    let newAchievement = new Achievement(achievement.name, achievement.percent);
    newAchievement.printValues();
    achievementsArray.push(newAchievement);
  }
  console.log(achievementsArray.length);
  return achievementsArray;
}

fetchData(url).catch(()=>{
  console.log('error with fetching');
});

// Classes
class Achievement {

    constructor(name, percent) {
      this.name = name;
      this.percent = percent;
    }
    printValues() {
      console.log(`${this.name} achievement has been completed by ${this.percent} percentage of people.`);
    }
}

let myAchievement = new Achievement('hungWins', 50);
console.log(myAchievement.name);
console.log(myAchievement.percent);




// let inventory = {
//   'food': 2,
//   'clothing': 3
// }
//
// console.log(inventory.food);
// console.log(inventory['food']);
