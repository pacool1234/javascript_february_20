// 1 - Booleans
const boolean1 = true
const boolean2 = false

let booleanAnd = boolean1 && boolean2
let booleanOr = boolean1 || boolean2
let booleanNot = !boolean1
let booleanMix0 = (boolean1 || boolean2) && (boolean1 ||(!boolean1 && !boolean2))

// 2 - Operators
let valueDivision = (17 / 3).toFixed(2)
let valueRemainder = 17 % 7

// 3 - Programming Logic
const A = 9
const B ='9'
if (A == B) console.log('They are equivalent')
//if (A === B) console.log('They are equivalent')

let backpack = ['book', 'notebook', 'laptop']
if (backpack.length > 10) {
    console.log('I can\'t bear so much stuff.')
} else if (2 <= backpack.length <= 10) {
    console.log('I am doing great with my backpack')
} else {
    console.log('I think I don\'t need a backpack')
}

let countToTen = 0
while (countToTen < 10){
    countToTen ++
}
console.log(`countToTen is now ${countToTen}`)

let dayOff = false
dayOff === true ? console.log('I don\'t work today') : console.log('I work today')

let loopArray = []
for (let i = 4; i < 19; i++) {
    loopArray.push(i)
}
console.log(loopArray)

let result = 0
for (num of loopArray) {
    result += num
}
console.log(result)

const myArray = ['Learning', 'loops', 'with', 'Sofia']
for (word of myArray) {
    console.log(word)
}
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

for (let i = 0; i < 20; i++) {
    if (i % 3 === 0) {
        console.log('Potato')
    }
}

// Extras
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    }
  ]

let fourLetterNames = []
for (obj of gente) {
    if (obj.nombre.length === 4) {
        fourLetterNames.push(obj)
    }
}
console.log(fourLetterNames)

let jayFortyNames = []
for (obj of gente) {
    if (obj.nombre.startsWith('J') && obj.edad < 40) {
        jayFortyNames.push(obj)
    }
}
console.log(jayFortyNames)

//====================================
let ordenador = {
    marca: 'La pava',
    tipo: 'portatil',
    perifericos: ['mouse', 'touchPad'],
    almacenamiento: {
        discos: ['SATA', 'HDD'],
        maestro: 0
    }
}
// TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (ordenador.marca === "La pava") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (ordenador.tipo === "portatil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

// ============================

let arr = [{name: 'pepito', age: 25}, 
           {name: 'pepito', age: 23},
           {name: 'Johnny', age: 19}]

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (typeof arr[0] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (typeof arr[1] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof arr[2] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (arr.length === 3) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[0].name === arr[1].name) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  // TEST 6
  if (arr[1].name === "pepito") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  // TEST 7
  if (arr[1].age > arr[2].age) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 8
  if (arr[0].age === 25) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 9
  if (typeof arr[2].name === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  // TEST 10
  if (arr[2].name[0] === "J") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
