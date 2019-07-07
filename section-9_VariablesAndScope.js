
/**line 6 will give error because we are assigning const a value 
 * also const  are immutables.
*/
let a=5;
const b=5;
a++;
//b++;
console.log(a+ 'and' +b);

/**const array 
 * we can change value in const array because as we are not changing the refrence of array 
 * but when we change value of varibale its refrence gets changed.
 */
console.log('constant arrays');
const arr=[5,7];
arr.push(8);
console.log(arr);//output will be 5,7,8

/**
 * arrays can be immutable by using freeze
 */
Object.freeze(arr);
//now try to push values
//uncomment next line error will be generated
//arr.push(9);                            
console.log(arr);


/**
 * const in loops 
 * this question may arise how we can use const in loop?
 * scope of const is block so we declare it fresh every time in below example.
 * in below example value of const index and value is changed everytime.
 */
console.log('const in loops')
for(const [index,value] of arr.entries()){
    console.log(index+"....."+value);
    }

/**
 * 
 *  */    