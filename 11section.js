/*parameter handling */

/**
 * default parameters
 */
console.log('default parameters');
function one(x,y){
    console.log(x+y);
}
one(5,10);
/**
 * pass n no of parameters to function 
 * parameters will be accessed as array using ...args
 * we can implement all array methods on args like findIndex,splice etc
 */
console.log('rest parameters');
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
console.log('named parameters');
function three({name='amar',height='6.4',placed='yes'}){
    console.log(name,height,placed);
}
three({placed:'no'});
three({name:'raju',height:'5.7'})


/**
 * refering to another parameters 
 */
console.log('refering to another parameters ');
function four(x=2,y=x){
    console.log(x,y);
}
four();
four(5);