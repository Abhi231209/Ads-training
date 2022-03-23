let maps=new Map()

maps.set("firstname",'abhi')
maps.set('last name','jangra')

console.log(maps.size)

let maps2=new Map([['firstname','abhishek'],['last name','jangra']])
var nam=maps.get('firstname')


let deletekey=maps2.delete('firstname')
console.log(deletekey)
console.log(maps2)