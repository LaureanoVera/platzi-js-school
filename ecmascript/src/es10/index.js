// FLAT
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

// FLATMAP
let array2 = [1,2,3,4,5]
console.log(array2.flatMap((val) => [val, val * 2]));

// TRIMSTART - TRIMEND
let hello = '        hello world      '
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// TRY-CATCH
try {

} catch {
  console.log(error);
}

// FROMENTRIES
let entries = [['name', 'laureano'], ['age', 18]]
console.log(Object.fromEntries(entries));

// SYMBOL
let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description);