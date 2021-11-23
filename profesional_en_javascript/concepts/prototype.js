// Mejorar y evitar tener que crear la misma funcion cada vez
// const heroMethods = {
//   greet: function () {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// }

// function Hero(name) {
//   const hero = {
//     name: name,
//   };
//   hero.greet = heroMethods.greet
//   return hero
// }

// const zelda = Hero('Zelda')
// zelda.greet();

// const link = Hero('Link')
// link.greet()


// Los metodos de hero dentro de hero
// const heroMethods = {
//   greet: function () {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// }

// function Hero(name) {
//   const hero = Object.create(heroMethods)
//   hero.name = name
//   return hero
// }

// const zelda = Hero('Zelda')
// zelda.greet();

// const link = Hero('Link')
// link.greet()

// new es un atajo (azucar sintactica) para llevar Hero.prototype al objeto que estamos creando
function Hero(name) {
  // this = Object.create(Hero.prototype)
  this.name = name
}

Hero.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
}

const zelda = new Hero('Zelda')
zelda.greet();

const link = new Hero('Link')
link.greet()