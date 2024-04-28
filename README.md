# sennur
Module that will be useful to you with many features

# Usage
## Emoji Text (For Discord Bot)
Example;
``` js
const sennur = require("sennur")
const text = sennur.toEmoji("Test")
console.log(text)
``` 
## Top.GG Check Vote (For Discord Bot)
Example;
``` js
const sennur = require("sennur")
const result = sennur.checkVote(`TopGG Bot Token`,`User id`)
console.log(result) // true or false (True: Voted,False: No vote)
``` 
