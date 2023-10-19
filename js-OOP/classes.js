//Task3
class ProductClass {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    purchase(quantity) {
        if (this.quantity > 0 && this.quantity - quantity >= 0) {
            this.quantity -= quantity;
            console.log(`The purchase is successful. If you like the ${this.name}, we have ${this.quantity} more.`);
        } else {
            console.error(`Not enough ${this.name} available for purchase. Available for purchase: ${this.quantity}`);
        }
    }
}

let products = [];

let tShirt = new ProductClass("t-shirt", 20, 10);
products.push(tShirt);

let jeans = new ProductClass("jeans", 40, 75);
products.push(jeans);

let shoes = new ProductClass("shoes", 60, 120);
products.push(shoes);

for (let product of products) {
    console.log(`Name: ${product.name}, Total price: ${product.getTotalPrice()}`);
}
let purchasedQuantity = tShirt.purchase(75);

//Task4 

class CarClass {
    #speed = 0;
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    };

    getCarsInfo(){
    };

    accelerate(speed){
        return this.#speed += speed
    };

    brake(speed){ 
        return this.#speed -= speed
    };
}

class AudiClass extends CarClass {
    #color;
    constructor(make, model, year, color){
        super(make, model, year);
        this.#color = color;
    };
    getCarsInfo(){
        console.log(`Car: ${this.make} ${this.model} "${this.year}", Color: ${this.#color}`);
    };
    get myCurrentColor(){
        return this.#color;
    };
    set myCurrentColor(color){
        return this.#color = color
    };
};

let myAudi = new AudiClass("Audi", "A4", 2023);
myAudi.getCarsInfo();
console.log("Current speed:", myAudi.accelerate(80));
console.log("Current speed:", myAudi.brake(15));
myAudi.myCurrentColor = "Black";
console.log(myAudi.myCurrentColor);
myAudi.getCarsInfo();

//Task5 

class Person  {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class PeopleRegistry extends Person {
    constructor (){
        super();
        this.people = [];
    }
    addPerson(person){
        this.people.push(person);
    }
   
    removePerson(firstName, lastName) {
        this.people = this.people.filter(person => !(person.firstName === firstName && person.lastName === lastName));
    }

    findPerson(firstName, lastName) {
        return this.people.find(person => person.firstName === firstName && person.lastName === lastName);
    }

    listPeople() {
        this.people.forEach(person => {
            console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
        });
    }
}

let registry = new PeopleRegistry();

let person1 = new Person('John', 'Doe', 30);
let person2 = new Person('Jane', 'Smith', 25);

registry.addPerson(person1);
registry.addPerson(person2);

registry.listPeople();

let foundPerson = registry.findPerson('John', 'Doe');
console.log('Person found:', foundPerson);

registry.removePerson('John', 'Doe');

registry.listPeople();