/* Though in Plain English */
/*  declare a temp to store character which will be swaped
    for(index begin with first string ; if below half of string length; index ++) {
        temp = cur character
        string[index] = string[counterpart index of string]
        s[counterpart position] = temp;
    }
*/

function reverseString(s) {
    let temp;
    for (let i = 0; i < s.length / 2; i++) {
        temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
    return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]
