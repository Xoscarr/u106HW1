


function init() {
    console.log("Hello world!");
    // get the button 
    sayHello();


    //create an age variable 
    let age= 50; 
    //call a test2 function 
    test2(age);

    let result = sum(21, 21);
    console.log(result) //42

    // create am array4
    let names = [];
    names.push('Gary');
    names.push('angel');
    names.push('oscar');
    names.push('kvon');
    names.push('sergio');

    console.log(names);
    printNamesInCaps(names);


let numbers =  [1,345,5678,5234,8567,234,123,56,678,789,3645,5687,234];
printSumOfNums(numbers);

}


function printSumOfNums(listofNumbers){
    let sum =0;
    for(let i=0; i< listofNumbers.length;i++){
        let num = listofNumbers[i];
        //sum = sum + num;
        sum += num; 

    }
    console.log("the Sum of Number is", sum); 
}




/**
 * create the functions
 * use a for loop to get each of the names
 * console log the name
 * console log the name in capitals
 */

function printNamesInCaps(listOfNames){
    for(let i=0; i < listOfNames.length;i++){
        console.log(i);

        let name = listOfNames[i];
        console.log(name.toUpperCase()); 
        

    }
    }




/**
 * create a sum function
 * that recieves 2 params
 * returns the sum of those params
 */

function sum(num1, num2) {
    return num1 + num2; 
}




//test2
function test2(age) {
    //print the age
console.log(age)
}



//create a sayHello function that console your name
function sayHello() {
    console.log("Oscar Rodriguez");
}

//wait for the HTML to be rendered 
// then excute init fn
window.onload= init;

