// Implicit Conversion (Type Coercion) – JavaScript automatically converts types
// Explicit Conversion – You convert it manually using functions

console.log('5' + 3);   // '53' → Number converted to String
console.log('5' - 3);   // 2   → String converted to Number
console.log(true + 1);  // 2   → true becomes 1
console.log(false + '2'); // 'false2' → false becomes string

// 2. Explicit Conversion (Manual)
// You use functions like Number(), String(), Boolean() to convert values.

// Convert to Number
Number('5');        // 5
Number(true);       // 1
Number(false);      // 0
Number('hello');    // NaN

console.log(parseInt('100px'));   // 100
console.log(parseFloat('12.34')); // 12.34


// Convert to String
String(100);       // '100'
String(true);      // 'true'
(5).toString();    // '5'

// Convert to Boolean
Boolean(0);        // false
Boolean(1);        // true
Boolean('hello');  // true
Boolean('');       // false
Boolean(null);     // false
Boolean(undefined); // false


console.log('10' + 5);      // ?
console.log('10' - 5);      // ?
console.log(true + false);  // ?
console.log(Number('abc')); // ?
