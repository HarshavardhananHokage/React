var student = {
    name: 'Jack',
    age: 10,
    id: 24
}

for(prop in student) {
    if(student.hasOwnProperty(prop))
        console.log(prop);
}