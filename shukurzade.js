const axios = require("axios")

async function checkForUpdate(){
try {
    const response = await axios.get("https://registry.npmjs.org/sennur/latest");
    if (require("./package.json").version !== response.data.version) {
        console.warn("[sennurJS] It seems like you are using an outdated version of sennurJS. Use npm update sennur to update module.(Join my server https://discord.gg/nTa2qttkUa)");
    }
} catch (err) {
    console.error(err);
}
    
}

exports.toEmoji = async function (input) {
if(!input) return;
if(input.length > 50) return;
const list = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    'İ': ':regional_indicator_i:',
    'Ö': ':regional_indicator_o:',
    'ö': ':regional_indicator_o:',
    'Ş': ':regional_indicator_s:',
    'Ü': ':regional_indicator_u:',
    'Ç': ':regional_indicator_c:', 
    'ı': ':regional_indicator_i:', 
    'o': ':regional_indicator_o:',
    'ş': ':regional_indicator_s:',
    'ğ': ':regional_indicator_g:',
    'Ğ': ':regional_indicator_g:',
    'ü': ':regional_indicator_u:',
    'ç': ':regional_indicator_c:', 
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
    };
    
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(n => {
    list[n] = list[n.toUpperCase()] = ` :regional_indicator_${n}:`;
    });

const result = input.split('').map(n => list[n] || n).join('');
checkForUpdate();
return `${result}`;
};



exports.checkVote = async function (token, userID) {
  if (!token) return;
  const TopGG = require("@top-gg/sdk");
  const api = new TopGG.Api(token)
  let result = await api.hasVoted(userID)
  checkForUpdate();
  return `${result}`;
  
};

exports.funFact = async function () {
  const facts = require("./facts.json")
  const randomIndex = Math.floor(Math.random() * facts.length);
  const result = facts[randomIndex];
  checkForUpdate();
  return `${result}`;
  
};

exports.isLeapYear = async function (year) {
  if (!year || isNaN(year)) return console.warn("[sennur] Please enter a valid year as a number.");
  checkForUpdate();
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return isLeapYear ? true : false;
};
