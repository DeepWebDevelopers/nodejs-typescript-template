console.log("Hello from typescript!");

function add(a: number, b: number) {
	return a + b;
}

interface Car {
	year: number;
	model: string;
	electric: boolean;
}

let myCar: Car;

console.log(`${myCar.year}`);

console.log(add(5, 5)); // result 10

//? All this code will be compiled into "../dist/index.js"
