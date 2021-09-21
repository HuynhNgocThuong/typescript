// Primitive type
// Trường hợp dưới đây, chỉ đơn giản là mình tạo ra một cái tên gọi khác cho kiểu primitive.
type StudentName = string;
type StudentAge = number;
type IsTopStudent = boolean;

// Object type
// Add question mark ?. for optional props.
// Add readonly to not allow updating value of a props 
// (NOTE: still able to set on creation)
type Student = {
    readonly id: number;
    name: string;
    age?: number; // optional
}

const studentA : Student = {
    id: 1,
    name: 'Alice '
}

// Union type
// "A union type is a type formed from two or more other types,
// representing values that may be any one of those types"
type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;

interface StudentType {
    id: number | string;
    name: string;
    gender: 'male' | 'female';
    grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

let x: number | string = 1;
x = 'super'; // works
x = 123; // works
// x = false; // ts error: Type 'boolean' is not assignable to type 'string | number'.ts(2322)

// Intersection type
interface BusinessPartner {
    name: string,
    credit: number
}
interface Identity {
    id: number,
    name: string
}

interface Contact {
    email: string, 
    phone: string
}
// Intersection type
type Customer = BusinessPartner & Contact;
interface CustomerGear extends Identity, Contact {};

// ###################
interface StudentUSA {
    id: number;
    name: string;
    }
// declaration merging
// works, no error
interface StudentUSA {
    id: number,
    age?: number;
}

const StudentUSA: StudentUSA = {
    id: 1,
    name: 'Alice',
    age: 20
}


// How to name for type vs interface
// Use PascalCase instead of camelCase. Use Student instead of student
// Don't use prefix I. Use Student instead of IStudent

interface Product {
    id: string;
    title: string;
}
interface ProductProps {
    data: Product;
}
function Product({ data }: ProductProps) {}


