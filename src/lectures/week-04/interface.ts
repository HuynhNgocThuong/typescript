// interface

interface Person {
    name: string,
    age: number,
    speak(lang: string): void;
    spend(amount: number): number;
}

const Thuong: Person = {
    name: 'Thuong',
    age: 25,
    speak(text: string): void {
        console.log(text);
    },
    spend(atm: number): number {
        return atm;
    }
}

console.log(Thuong);
const helloThuong = (onePerson: Person) => console.log(`Hello ${onePerson.name}`);
helloThuong(Thuong);