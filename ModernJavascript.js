import {steamKey} from './keys.js';

// ES 6 updates
// String Interpolation/String Template Literal
let age = 26;
let finalString = `Hung is ${age} years old`;
let zenva = 'Zenva';
// Pad start and pad end
zenva = zenva.padEnd(10, '.');
zenva = zenva.padStart(15, '.');
console.log(zenva);
console.log(steamKey);

let appId = '221380'; // AoE II game ID
// let request = new Request('http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=440');

// fetch(request).then((data) => {
//   console.log(data);
// })
