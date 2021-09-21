import { Invoice, Payment } from "./classImpl";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice('Thuong', 'IT', 200);
const documentTwo: hasPrint = new Payment('Ovantine', 'Food', 25);

const allDocument: hasPrint[] = [];
allDocument.push(documentOne);
allDocument.push(documentTwo);
 console.log(allDocument);
 console.log(allDocument[0].print());
 console.log(allDocument[1].print());