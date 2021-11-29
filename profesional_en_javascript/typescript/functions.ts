function add(a: number, b: number) {
  console.log(a);
  console.log(b);
  return a + b;
}

const sum = add(Math.random(), Math.random());

function createAdder(a: number): (number) => number {
  return function (b: number): number {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName:string = "Yo soy, Batman!", lastName?:string):string {
  return `${firstName} ${lastName}`
}

const laureano = fullName('Laureano', 'Vera')
const ivan = fullName('Ivan')
const gerardo = fullName('Gerardo')