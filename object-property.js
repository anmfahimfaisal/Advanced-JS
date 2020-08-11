const students = [
    {id: 21, name: 'David'},
    {id: 31, name: 'Cruse'},
    {id: 41, name: 'Collin'},
    {id: 71, name: 'Flinn'}
];

const names = students.map( s=> s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s=> s.id>40);
console.log(bigger);
