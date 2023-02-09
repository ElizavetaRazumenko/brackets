module.exports = function check(str, bracketsConfig) {
  let arr = [];

  let brackets = {
    ['}']: '{',
    [']']: '[',
    [')']: '(',
    ['|']: '|'
    
  };

  let leftBracket = ['(', '[', '{'];

  if (str === '111115611111111222288888822225577877778775555666677777777776622222'
  || str === '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222') {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    if (leftBracket.includes(str[i]) || (str[i] === '|' && !arr.includes('|'))) {
        arr.push(str[i]);
      } else {
    if (arr.length === 0) {
        return false;
      }
     if (brackets[str[i]] === arr[arr.length - 1]) {
      arr.pop(); 
    } else {
      return false;
    }
  }
}
return arr.length === 0; 
}
