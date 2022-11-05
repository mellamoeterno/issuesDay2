//const name = 'Diego';
//const age = 27;
//const user = {
//  name: name,
//  age: age,
//};

//instead of doing this ^^ 
//
//
//the short syntax means shortening the property name which is 
//similar to the variable
//but only in the case of when the property is the same as the variable, if different wont worK? (i guess)

const name = 'Diego';
const age = 27;

const user = {
    name,
    age,
};

document.body.innerText = JSON.stringify({ first, third, rest})