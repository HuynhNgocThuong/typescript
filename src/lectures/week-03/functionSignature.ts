// Function signature
let hello: Function;
hello = () => console.log('Hello');
hello();

let bye: (variableA: string, variableB: string) => void;
bye = (name: string, bye: string) => console.log(`${name} says ${bye}`);
bye('Thuong', 'bye');

let calculate: (fisrtParam: number, secondParam: number, thirdParam: string) => number;
calculate = (numOne: number, numTwo: number, action: string) => 
    action === 'add' ? numOne + numTwo : numOne - numTwo;
console.log(calculate(4, 2, 'add'));
console.log(calculate(4, 2, 'minus'));

type StudentPlus = {name: string, age: number};
let Student13Plus: StudentPlus;
Student13Plus = {name: 'Iphone13', age: 1};
let printStudent = (myStudent: StudentPlus) : void => {
    console.log(`${myStudent.name} is ${myStudent.age} years old`)
}
printStudent(Student13Plus);
// let objectA: {name: string, age: number} = {name: 'Thuong', age : 1};
