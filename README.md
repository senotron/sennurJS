# ✨️ New update! V1.1.1
What's new?
* A new platform has been added for the checkVote function. You can now see whether users voted for your bots, which are also on the discord.place platform!
Detailed: [Here](https://github.com/sshukurzade/sennurJS/main/README.md#check-vote-for-discord-bot)

# Usage
## Emoji Text (For Discord Bot)
- Converts the text you type into emojis

Example code;
``` js
const sennur = require("sennur")
const text = await sennur.toEmoji("Test")
console.log(text)
``` 
# Check Vote (For Discord Bot)
## Top.GG
- If your bot is on the Top.GG site, you will be able to easily find out whether any users have voted for your bot!

Example code;
``` js
const sennur = require("sennur")
const result = await sennur.checkVote({
    platform:'top.gg',
    apiKey:`TopGG Bot Token`,
    botId: 'Bot id',
    userId:`User id`
});
console.log(result) // true or false (True: Voted,False: No vote)
```
## discord.place
- If your bot is on the discord.place site, you will be able to easily find out whether any users have voted for your bot!

Example code;
``` js
const sennur = require("sennur")
const result = await sennur.checkVote({
    platform:'discord.place',
    apiKey:`discord.place api key`,
    botId: 'Bot id',
    userId:'User id'
});
console.log(result) // true or false (True: Voted,False: No vote)
```

## Fun Fact
- Gives random fun fact

Example code;
```js
const sennur = require("sennur")
const fact = await sennur.funFact()
console.log(fact) // Fun fact
```

## Leap Year (29 February)
- Indicates whether the entered year is a leap year or not.
- If your site/bot has a birthday system, I recommend using this module!

Example code;
``` js
const sennur = require("sennur")
const result1 = await sennur.isLeapYear("2024")
const result2 = await sennur.isLeapYear("2023")
console.log(result1) // true
console.log(result2) // false
```
# Links
- [Discord](https://discord.gg/nTa2qttkUa)
- [Youtube](https://www.youtube.com/channel/UCakcpjCJKKAJ-6B-fzjnVyA)
