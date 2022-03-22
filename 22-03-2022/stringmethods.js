let str="Abhishek"
let length = str.length
console.log(length)
console.log(str.slice(2,5))
console.log(str.slice(-3,-1))
console.log(str.substring(1,5))

// substring is similar to slice but the substring does not tag negitive value



let str2="visit amazon"
let str3=str2.replace('amazon','flipkart')
console.log(str3)

console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log(str.concat(' ',str2))


let str4="       Name       "
console.log(str4.trim())

let str5= "abhi"
let str6=str5.padStart(11)
console.log(str6)
console.log(str6.padEnd(7," "))

console.log(str.charAt(4))


// we can convert string into array
let arry=str.split("")
console.log(arry[0])



