let a: number = 1;  
let b: number = -3; 
let c: number = 2;

let discriminant: number = b * b - 4 * a * c;

let root1: number = (-b + Math.sqrt(discriminant)) / (2 * a);
let root2: number = (-b - Math.sqrt(discriminant)) / (2 * a);

console.log(`The roots are: ${root1} and ${root2}`);
