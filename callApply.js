const normalPerson = {

    firstName: 'Abdul',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){

        //console.log(this.firstName, this.lastName);
    },

   chargeBill: function(amount, tips, tax){
       console.log(this);
       this.salary = this.salary - amount - tips - tax;
       return this.salary;
   }
}

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);

// console.log(normalPerson.salary);

const viPerson = {

    firstName: 'Prime',
    lastName: 'Minister',
    salary: 25000
}

const friendlyPerson = {

    firstName: 'Jakaria',
    lastName: 'Masud',
    salary: 20000
}


// normalPerson.chargeBill();

// const viChargeBill = normalPerson.chargeBill.bind(viPerson);
// viChargeBill(2000);
// viChargeBill(3000);
// console.log(viPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(9000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(viPerson, 900, 100, 10);
// normalPerson.chargeBill.call(viPerson, 2000, 300, 40);
// console.log(viPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(viPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(viPerson, [4000, 400, 40]);
console.log(viPerson.salary);