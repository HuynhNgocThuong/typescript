// Option and non null
const add = (fisrtParam: number, secondParam?: number) => 
secondParam ? (fisrtParam + secondParam) : fisrtParam;
// Object is possibly 'undefined'.ts(2532)
// (parameter) secondParam: number | undefined
console.log(add(1, 2));

const nonNull = (fisrtParam: number, secondParam?: number) => (fisrtParam + secondParam!);
console.log(nonNull(1));