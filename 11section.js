/*parameter handling */

/**
 * default parameters
 */
console.log('-----------------default parameters');
function one(x,y){
    console.log(x+y);
}
one(5,10);
/**
 * pass n no of parameters to function 
 * parameters will be accessed as array using ...args
 * we can implement all array methods on args like findIndex,splice etc
 */
console.log('------------------rest parameters');
function two(...args){
    console.log(args);
}
two(5,8,9,8,8,5,5,5,7777,5);
two('aaaa','bbbbb','cccc');

/**
 * named parameters
 * in named parameters default values are give if there is any change it is 
 * passed as argument with property_name:value
 */
console.log('-------------------named parameters');
function three({name='amar',height='6.4',placed='yes'}){
    console.log(name,height,placed);
}
three({placed:'no'});
three({name:'raju',height:'5.7'})


/**
 * refering to another parameters 
 * error will be generated if we use function four(x=y,y=2){}
 * so,first initialize the variable then use it.
 */
console.log('-------------------refering to another parameters ');
function four(x=2,y=x){
    console.log(x,y);
}
four();
four(5);

/**
 *-----------named parameters---------------
 named parameters are godd practice to use because sometimes you don't remember the sequence of parameter to be passed  
 you might notice we are sending parameters as objects and they are accessed as objects.
 if one of parameters are missing it may give output as undefined to get rid of undefined always give some default value.
 */
console.log('----------------------named parameters');
function five({start='',end='',middle=''}){
    console.log(start,end,middle);
}
five({start:0,middle:5,end:10}); //now you can pass them in any order they will be processed by name.
five({start:0,middle:5}); 
five({});//there will be no ouput in console

/**
 * destructring array of objects in parameters
 */
console.log('---------------------destructring array of objects in parameters');

const items = [
    { name:'amardeep', seat:25 },
    { name:'braru', seat:39 },
];
function six(arr){
arr.forEach(({name, seat}) => {
    console.log(name+' '+seat);
})
}
six(items);

/*
*optional parameters
*/
console.log('----------------------------------optional parameter');

function seven(first,second=undefined){
    console.log(first,second);
}
seven(5);

/**
 *mandatory parameters------when no parameters are passed then error will be generated.
 one might be confused when mandatory will called.In default parameter section when value is passed default value was ignored same in this case,
 mandatory function is like that default value that is invoked when no value is passed to function. 
 you can write your own function when value is not passed
 */
console.log('---------------------------------required parameter');
function mandatory() {
    throw new Error('Missing parameter');
}
function eight(first=mandatory()){
    console.log(first);
}
eight(5);//pass no parameters then error will be generated .Remove 5.

/**
 * dealing with arguments when more arguments are passed than needed
 */
console.log('dealing with max no of parameters');
function nine(a,b,c='limit'){
    if(arguments.length>2){
        console.error('pass 2 args');
    }else{
        console.log(a,b);
    }
}
nine(5,6);

/*** 
 * converting objects into array
*/
let