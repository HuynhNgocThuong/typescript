// adding any, solved
// let count: any = 5;
// count = 'five';

// three common primitive types: string, number and boolean
// let countFlag: number = 10;
// let channelName: string = 'Easy Frontend';
// let isActive: boolean = true;

// we can simply omit the type annotation
// let countFlag = 10;
// let channelName = 'Easy Frontend';
// let isActive = true;


// Literal types
// / String literal types allow you to specify the exact value a string must have

// A literal is a more concrete sub-type of a collective type
// Literals are exact values that are JavaScript primitives.
// let count: 1;
// let channelName: 'easy';
// let isActive: false;
// let student: null;


// const count = 1; // const count: 1
// const channelName = 'Easy Frontend'; // const channelName: 'Easy Frontend'
// const isActive = false; 
// const isActive: false


const student = {
    id: 1,
    name: 'Easy Frontend',
} as const
    // this is how ts understand:
    // const student: {
    // id: number;
    // name: string;
    // }
    // because the props of an object can be updated
// student.name = 'Typescript is easy! :P';

const numberList = [1, 2, 3];
// ts understand: const numberList: number[]
const numberListAsConst = [1, 2, 3] as const
// ts understand: const numberListAsConst: readonly [1, 2, 3]



function getStatusName(state: 'active') {
    console.log(state);
    }
// let a : "hihi" = 'hihi';
let s : 'active' = 'active'; // let s: string
// const s = 'active';
getStatusName(s)
// ts error: Argument of type 'string' is not assignable to parameter of


// solution 1
// let s: 'active' = 'active'; // or const s = 'active'
// getStatusName(s);

// solution 2
// let s = 'active';
// getStatusName(s as 'active')