const axios = require("axios")

function checkForUpdate(){
try {
            axios.get('https://registry.npmjs.org/solnjs/latest').then(response => {
                const data = response.data;

                if (require('./package.json').version !== data.version) {
                    error(`You are using an old version. You can update the module by typing '${ansi.blueBright(`npm install solnjs@${data.version}`)}'`);
                };
            }).catch(() => { });
        } catch (err) {}
    
}

exports.toEmoji = function (input) {
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

const result = input.split('').map(n => list[n] || n).join('')
return `${result}`;
checkForUpdate();   
};



exports.checkVote = async function (token, userID) {
  if (!token) return;
  const TopGG = require("@top-gg/sdk");
  const api = new TopGG.Api(token)
  let result = await api.hasVoted(userID)
  return `${result}`;
  checkForUpdate();
};
