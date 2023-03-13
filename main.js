
/* console.log('hello');
console.error('this is an error')
console.warn('this is an warning') */

// # 1-var,let,const
// # 1.1 var
// var is globally scoped , so most part we dont use var any more.
// # 1.2 let  .let can reassign values
let age = 30;
age = 31
console.log(age)
// # 1.3 const . cant be changed
const name = 1
//name = 2
console.log(name)

// # 2-datatypes:str,num,boolean,null,undefined,symbol

const namee = 'ginger';
const agee = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //undefined as well
console.log(typeof z)

// contatenation
console.log('my name is '+ namee+ ' and i am ' + agee);

// template str
console.log(`my name is ${namee} and i am ${agee}`);

const hello = `my name is ${namee} and i am ${agee}`
console.log(hello)

// manipulate str
console.log(hello.length);
console.log(hello.toUpperCase());
console.log(hello.substring(0,7).toUpperCase());
console.log(hello.split(''));

// # 3-arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apple','orange','pear'];
console.log(fruits[0]);
fruits[3] = "grapes";
console.log(fruits);

fruits.push('mangos')
fruits.unshift('strawberries')
console.log(fruits);

fruits.pop('mangos');
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('orange'));

// # 4-object literals
const person ={
    firstName : 'john',
    lastName : 'doe',
    age : 30,
    hobbies:['music','yoga']
}
console.log(person);
console.log(person.lastName);
console.log(person.hobbies[1]);

const todos = [
    {
        id:1,
        text:'trash',
        isCompleted:true
    },
    {
        id:2,
        text:'buy',
        isCompleted:true
    },
    {
        id:3,
        text:'call',
        isCompleted:false
    },
]

console.log(todos[1].text)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// 5-loop
// for loop
/*
for(let i = 0 ;i <= todos.length ; i++){
    console.log(`For loop Number:${i}`);
}
*/
for(let todo of todos){
    console.log(todo.text);
}


// while loop
let j=0;
while(j<10){
    console.log(`For loop Number:${j}`);
    j++
}

// 6-forEach,map,filter
todos.forEach(function(todos){
    console.log(todos.text);
})
// 
const todoText = todos.map(function(todos){
    return todos.text;
});
// 
const todoCompleted = todos.filter(function(todos){
    return todos.isCompleted === true;
}).map(function(todos){
    return todos.text
})
console.log(todoCompleted)
