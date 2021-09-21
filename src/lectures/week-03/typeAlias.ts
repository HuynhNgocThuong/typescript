// Type alias
type StringOrNumber = string | number;
type Client = {
    name: string;
    id: StringOrNumber;
}

const studentDetails = (id: StringOrNumber, clientName: string) : void => {
    console.log(`Client ${clientName} has id: ${id}`)
}

const greet = (client: Client) => {
    console.log(`${client.name} with id ${client.id} says hello`);
}
studentDetails('1996', "Thuong");
greet({name:'Thuong', id:'1'});