// shallow copy
const students = {id:12, name:"Ram", location:"KTM"}

// destructure of object 
const {} = students
console.log(students);


// filter function

const age = [49,50,16,19,20]
const result = age.filter(CheckAge)
console.log(result);



function CheckAge(age){
    return age >=20
}



