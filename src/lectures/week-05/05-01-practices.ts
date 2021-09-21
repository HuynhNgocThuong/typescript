// Generics

type strArray = Array<string>;
type numArr = Array<number>;
const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);
const l2 = last([1, 2, 3]);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(['a', 'b']);
const l5 = lastT<string>(['a', 'b']);

const makeArr = (x: number) => [x] 
const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT('b');

// Make array generic
const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m4 = makeArrXY(1, 2);
const m5 = makeArrXY('a', 'b');

// Make tuple generic
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple(1, 2);
const m8 = makeTuple('a', 'b');
const m9 = makeTuple(1, 'b');
const m10 = makeTuple<number, string>(1, 'b');

// Make dedault generic is number
const makeTupleWithDefault = <X, Y = number> (x: X, y: Y): [X, Y] => [x, y];
const m11 = makeTupleWithDefault<string | null>('a', 2);


// ### Generic extends
// const makeFullNAme = obj => ({
//     ...obj,
//     fullName: `${obj.fisrtName} ${obj.lastName}`
// });

const makeFullNameConstraint = (obj : {firstName: string, lastName:string}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})
const n1 = makeFullNameConstraint({firstName: 'Huynh', lastName: 'Thuong'});
// const n2 = makeFullNameConstraint({firstName: 'Huynh', lastName: 'Thuong', age: 25});
const makeFullNameconstraintWithGeneric = <
        T extends {firstName: string, lastName: string}
    >(object: T) => ({
        ...object,
        fullName: `${object.firstName} ${object.lastName}`
})
const n3 = makeFullNameconstraintWithGeneric({firstName: 'Huynh', lastName: 'Thuong', age: 25});

// Another examples
const addNewEmployee = (employee: object) => {
    const uid  = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
}

const addNewEmployeeT = <T extends object> (employee: T) => {
    const uid  = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
}

const empTwo = addNewEmployeeT({name: 'Thuong', age: 25, male: true});
console.log(empTwo.name);
console.log(empTwo.age);


// ### Generic in Interface

interface Resource<T>{
    uid: number,
    name: string,
    data: T
}

type NumberResource = Resource<number[]>;
const numbers: NumberResource = {
    uid: 2,
    name: 'Car',
    data: [1, 2, 3]
}

const resourceOne: Resource<string> = {
    uid: 1,
    name: 'Person',
    data: 'Card'
}

const resourceTwo: Resource<object> = {
    uid: 1,
    name: 'Vinamilk',
    data: {name: 'Milo'}
}

const resourceThree: Resource<string[]> = {
    uid: 1,
    name: 'Car',
    data: ['BWM', 'Vinfast', 'Honda']
}
