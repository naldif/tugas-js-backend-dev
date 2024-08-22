// Demonstrasi penggunaan let, const, dan var
function demoVariableTypes() {
    // Variabel yang dapat berubah nilai
    let age = 25;
    console.log(`Let: age = ${age}`);
    age = 26;
    console.log(`Let: age (after update) = ${age}`);

    // Variabel yang bersifat konstan
    const birthYear = 1998;
    console.log(`Const: birthYear = ${birthYear}`);

    // Variabel dengan var (var sebaiknya dihindari di modern JavaScript)
    var name = "Nito";
    console.log(`Var: name = ${name}`);
    name = "Aldi";
    console.log(`Var: name (after update) = ${name}`);
}

// Demonstrasi tipe data primitif
function demoPrimitiveDataTypes() {
    // Number
    let num = 41;
    console.log(`Number: ${num}`);

    // String
    let greeting = "Hello, World!";
    console.log(`String: ${greeting}`);

    // Boolean
    let isTrue = true;
    console.log(`Boolean: ${isTrue}`);

    // Undefined
    let undefinedVar;
    console.log(`Undefined: ${undefinedVar}`);

    // Null
    let nullVar = null;
    console.log(`Null: ${nullVar}`);

    // Symbol (ES6+)
    let sym = Symbol('symbol');
    console.log(`Symbol: ${sym.toString()}`);

    // BigInt (ES2020+)
    let bigIntNum = 9007199254740991n;
    console.log(`BigInt: ${bigIntNum}`);
}

// Demonstrasi tipe data non-primitif (Object)
function demoNonPrimitiveDataTypes() {
    // Object
    let person = {
        name: "Nito",
        age: 24
    };
    console.log(`Object: ${JSON.stringify(person)}`);

    // Array
    let smartphone = ["Samsung", "Xiaomi", "Vivo"];
    console.log(`Array: ${smartphone}`);

    // Function
    let sayHello = function() {
        return "Hello!";
    };
    console.log(`Function: ${sayHello()}`);

    // Date
    let today = new Date();
    console.log(`Date: ${today.toISOString()}`);
}

// Demonstrasi operator aritmatika
function demoArithmeticOperators() {
    let a = 10;
    let b = 5;

    console.log(`a = ${a}, b = ${b}`);
    console.log(`Pertambahan (a + b): ${a + b}`);
    console.log(`Perkurangan (a - b): ${a - b}`);
    console.log(`Perkalian (a * b): ${a * b}`);
    console.log(`Pembagian (a / b): ${a / b}`);
}

// Demonstrasi operator perbandingan
function demoComparisonOperators() {
    let x = 10;
    let y = "10";

    console.log(`x = ${x}, y = ${y}`);
    console.log(`Equal (x == y): ${x == y}`);
    console.log(`Strict Equal (x === y): ${x === y}`);
    console.log(`Not Equal (x != y): ${x != y}`);
    console.log(`Strict Not Equal (x !== y): ${x !== y}`);
    console.log(`Greater Than (x > 5): ${x > 5}`);
    console.log(`Less Than (x < 20): ${x < 20}`);
    console.log(`Greater Than or Equal (x >= 10): ${x >= 10}`);
    console.log(`Less Than or Equal (x <= 10): ${x <= 10}`);
}

// Menjalankan semua fungsi
function main() {
    console.log("Demonstrasi penggunaan variabel:");
    demoVariableTypes();
    console.log("\nDemonstrasi tipe data primitif:");
    demoPrimitiveDataTypes();
    console.log("\nDemonstrasi tipe data non-primitif:");
    demoNonPrimitiveDataTypes();
    console.log("\nDemonstrasi operator aritmatika:");
    demoArithmeticOperators();
    console.log("\nDemonstrasi operator perbandingan:");
    demoComparisonOperators();
}

main();
