let person = {
    name: 'Javier',
    lastName: 'Vargas',
    age: 20,
    inClass: true,
    classesTaught: ['Javascript', 'arrays']
}

let {name, age} = person
console.log(name)
console.log(age)

//console.log(person.name)
console.log(person['classesTaught'][0])
console.log(person.name)
person.name = 'The bruh'
console.log(person.name)

//delete variable in object
delete person.lastName
console.log(person)

const allProps = Object.keys(person)
console.log(allProps)

//check if there is age within the obect
//the -1 is NaN so as long as produced true it the prop exist
const hasAge = allProps.indexOf("age") > -1
console.log(hasAge)


person.name = 'Javi' //edit 
console.log(person) //add new property

person.age = 21 //becarful mistyped age DO NOT DO
console.log(person)
