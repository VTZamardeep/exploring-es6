/**destructring- it is way of extracting values or data stored in arrays or objects */
const obj={first:'amardeep',last:'saini'};
const{first:a1,last:a2}=obj;
console.log(a1,a2);

/** .exec is used for matching string patterns */
const [all, year, month, day] =/^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2999-12-31');
    console.log(year);

/**
 * destructring using for of
 *  */    
console.log('destructring using for of');
var arr=[105,20,25588,8894,984,541]
for(const [index,value] of arr.entries()){
    console.log(index+'.....'+value);
}
/**
 * destructring array of objects
 */
console.log('destructring array of objects');
const objarr=[{name:'amar',height:'6.4'},
            {name:'neeraj',height:'5.7'}];
const [...args]=objarr;
console.log(args);
console.log(args[0].name);

/**
 * 
 */