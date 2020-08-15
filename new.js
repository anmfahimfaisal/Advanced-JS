class person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person('David', 'Prime', 20000);
console.log(heroPerson);
const friendlyPerson = new person('Becky', 'Rhodes', 25000);
console.log(friendlyPerson);

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Grand', 'Pa', 1200);
console.log(oldPerson);