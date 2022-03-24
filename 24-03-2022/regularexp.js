let text="w3school is a good website. facebook is also good"
console.log(text.search(/is/m))

console.log(text.search(/\bgo/g))

console.log(text.search(/\w/i))

const patt=/[is]/
console.log(patt.test('this is new text'))


const found=/e/
console.log(found.exec("this is new text"))