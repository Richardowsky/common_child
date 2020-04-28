# Common child

## How to test:
1. Clone this repo: `git clone https://github.com/Richardowsky/common_child.git`
2. `npm i`
3. `npm test`

## How to use:
```javascript
const {commonChild} = require('./src/index');
    
    let string1 = "ABCDEFJ"
    let string2 = "AFRDAJJ"

let res = commonChild(string1, string2);
console.log(res)
```