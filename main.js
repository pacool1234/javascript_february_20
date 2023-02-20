// First part - Variables
//alert('JavaScript working properly')
let WorthlessVariable
let boolean1 = true
let boolean2 = false
const PI = 3.14259
const TAU = 2 * PI
const myName = 'Paco'
const myFavNumber = 7
let boolean3 = true
console.log(myName.length)
console.log(typeof myFavNumber)
console.log('My name is ' + myName + ' and my favourite number is ' + myFavNumber)
console.log('I\'ll be and ace in JavaScript by the end of the Bootcamp'.toUpperCase())
console.log('Hi I\'m an ace'.substring(0,5))
myFavNumberAsString = myFavNumber.toString()
console.log(typeof myFavNumberAsString)
const randomVar = 'mango'
const randomSentence = `${randomVar} is better than ${randomVar}`
console.log(randomSentence)
console.log(PI.toFixed(2))

// Second part - Arrays
const emptyArray = []
const numberArray = [0,1,2,3,4,5,6,7,8,9]
const numberArray2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const evenNumberArray = [0,2,4,6,8]
const negativeNumberArray = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
const helloWorld = ['Hello', 'World']
const saveEverything = ['hello', 'what', 23, 42.33, 'so']
const nestedArray = [[756, 'name'], [225, 'surname'], [298, 'address']]
console.log(saveEverything.length)
const newElem = false
saveEverything.push(newElem)
console.log(saveEverything)
console.log(typeof saveEverything[1])
saveEverything.push('Euralius')

// Third part - Objects
const Car = {
    make: 'Bugatti',
    model: 'Chiron',
    plateNumber: 'SEX6969'
}

const House = {
    zipCode: 'TEX666',
    street: 'False St.',
    number: 17,
    floor: 3
}

const FullStackDeveloper = {
    languageArray: ['HTML', 'CSS', 'JavaScript'],
    projectArray: ['NASA\'s webpage', 'I Love You virus', 'Y2K bug']
}

const Dog = {
    name: 'Wolfie',
    breed: 'German Shepperd',
    color: 'Brown',
    age: 4
}

const News = {
    headline: 'Complaining about government declared illegal.',
    body: 'Following mass protests due to social unrest, government has declared...'
}

const Person = {
    name: 'Brad',
    surname: 'Pitt',
    age: 51
}

console.log(Person.name)
console.log(FullStackDeveloper.languageArray[2])

const Laptop = {
    brand: 'Asus'
}

console.log(Laptop.brand)
console.log(Laptop['brand'])

const Concert = {
    bands: ['The Who', 'Dire Straits', 'Led Zeppelin']
}

console.log(Concert.bands)

const Led = {
    lamp1: 'red',
    lamp2: 'green',
    lamp3: 'blue'
}

const RGB = [Led.lamp1, Led.lamp2, Led.lamp3]
console.log(RGB)

const O_Error = {
    code: '011010100101101011110001101000' 
}

console.log(O_Error.code)

const Group = {
    members: ['Roger Daltrey', 'Pete Townsend', 'John Enstwistle', 'Keith Moon']
}

const members = Group.members
console.log(members[3])

const Printer = {
    ink: {
        red: 0.99,
        green: 0.54,
        blue: 0.78
    }
}

const inkLevel = Printer.ink
console.log(inkLevel)

const Mobile = {
    specs: 'whatever'
}

const specs = Mobile['specs']
console.log(specs)

Laptop.brand = 'MSI'
console.log(Laptop.brand)

Concert.bands.push('Guns N\' Roses')
console.log(Concert.bands)

Concert.date = '2023-02-20'
Concert.date = new Date()
console.log(Concert.date)

Group.members.shift()
console.log(Group.members.length)