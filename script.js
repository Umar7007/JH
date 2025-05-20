
const data = {
    id: 321,
    name: 'umarbek',
    password:231,
}


let a = prompt('write your name')
let b = prompt('write your password')

if (a == data.name && b == data.password) {
    console.log('welcome');
    
} else {
    console.log('godbye')
}