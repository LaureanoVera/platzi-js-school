let muted: boolean = true;
muted = false;

let numerator: number = 19;
let denominator: number = 5;
let result = numerator / denominator;

let userName: string = "Laureano";

let people: string[] = [userName, 'Isagi', 'Naruto']

let peopleAndNumbers: Array<string|number> = [userName, 19]

// enum
enum Color {
  Red = "Rojo", 
  Green = "Verde",
  Blue = "Azul"
}

let favoriteColor: Color = Color.Red
console.log(`My favorite colo is ${favoriteColor}`);

// any
let joker: any = 25
joker = 'Random'
joker = false

// object
let someObject: object = { userName }