/*always use let in js programs because using var may lead to undefined 
if you dont assign values to a variable but you declare it as var x  in func then console 
log will show it undefined.
 */

let x = 3;
function func(randomize) {
    //var x;
    if (randomize) {
        x = Math.random();
        console.log( x);
    }
    console.log( x);
}
func(false);

/* multi line strings can be written in two ways*/
console.log("helllo\n"+
"this is multi line \n"+
"string");
console.log("hello \n this is also \n multiline");


/*arrow functions 
*/
const arr = [1, 2, 3];
const squares = arr.map(x => x * 3);
console.log(squares);


/** for each to loop through array */
f_array=[1,5,8,6,9];
f_array.forEach(x =>console.log(x));
for (const elem of f_array) {
    console.log(elem);
}
for (const [index, elem] of f_array.entries()) {
    console.log(index+'. '+elem);
}
/**
 * dealing with n no of arguments by using ...args
 * in e.g down below we will loop through args to get value in foreach loop
 * in for loop we will get index as well as value using of entities method.
 */
console.log('n arguments concept');
function n_args(...args){
    args.forEach(x=>console.log(x));
    for(const [index,value] of args.entries()){
        console.log('index is '+index+'value is'+value+'')
    }
}
n_args(1,5,9,7,8,9,5);

/**
 * spread operator -access the value of variable or assign the values
 */
console.log('...spread operator concept');
arr1=[1,2,7,8,9];
arr2=['a','b','c'];
arr2.push(...arr1);//assigning the values of arr1 to arr2 
console.log(arr2);

/**
 * methods in js
 */
console.log('creating objects');
var obj1={
    numb:5,
    func(y){
        console.log(this.numb+y);
    }
}
const haha=Object.create(obj1);//object.create is used to create objects
haha.func(10);

/**
 * classes
 *       keyword  constructor is used for intialising value when object is created.
 */
console.log('classes');
class amardeep{
    constructor(name,height){
        this.name=name;
        this.height=height;
    }
    
}
let raj=new amardeep('raj',6);//creating new object of class -----another method
console.log(raj.name);

/**
 * we will now derive class son from amardeep.
 */
console.log('deriving classes');
class son extends amardeep{
    constructor(name,height,placed){
        //super keyword is used to invoke the constructor of parent class 
        //here constructor of amardeep class will be invoked
        super(name,height);
        this.placed=placed;
        console.log(this);
    }
}
var son1=new son('akash',6,'yes');
console.log(son1);


/**
 * maps --in the below example countwords will get the value of  key from the map if exits or it will 
 * assign count value 0 and map.set will set the value with using word passed as argument will be key
 * for map and count will be value. 
 */
const map = new Map();
function countWords(word) {
    const count = map.get(word) || 0;
    map.set(word, count + 1);
}

countWords('hello');
countWords('hello');
countWords('hello1');
console.log(map);


/*some array methods*/
console.log('searching aaaa in  array ');
let arrr=['aaaa','bbbbb','cccc','dddddd'];
const ind=arrr.indexOf('aaaa');
console.log(ind);