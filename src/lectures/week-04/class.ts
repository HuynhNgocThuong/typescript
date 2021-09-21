// class
export class Employee {
    public name: string
    private age: number
    readonly male: boolean
    constructor(name: string, age: number, male: boolean){
        this.name = name;
        this.age = age;
        this.male = male;
    }
    print(){
        return `Name: ${this.name}, age: ${this.age}, gender: ${this.male}`;
    }
}

const thuongHuynh = new Employee('Thuong', 25, true);
console.log(thuongHuynh.male);
// console.log(thuongHuynh.age);
console.log(thuongHuynh.name);
thuongHuynh.name = 'ThuongHuynh';
console.log(thuongHuynh.name);
console.log(thuongHuynh.print());
const hiHi = new Employee('hiHi', 25, true);
let employees: Employee[] = [];
employees.push(thuongHuynh);
employees.push(hiHi);
employees.forEach(employee => console.log(employee.name));