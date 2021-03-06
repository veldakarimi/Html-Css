const greet = function() {
    console.log("Hello!");
    console.log("Let's study functions!");
  };
  greet();
  //a new function
  const hello = function() {
    console.log("Hello");
    console.log("I am Velda");
  };
  hello();

  //arrow functions
  const greet = () => {
    console.log("Hello!");
    
  }
  greet();

  
//arguments and parameters
const greet = name =>{
    console.log(`Hello, ${name}`);
  }
  greet("Master White");

  //multiple arguments
  const add = (number1, number2) => {
    console.log(number1 + number2);
    
    
  };
  add(5, 7);
  // division
  const half = (number) => {
    return number / 2;
    
  };
  
const result = half(130);
console.log(`Half of 130 is ${result}`);
  
  //multiples of 3
  const check = (number) => {
     return number % 3 === 0;
  
  };
if (check(123)) {
  console.log("Multiple of 3");
} else {
  console.log("Not a multiple of 3");
}
//scope of func
const name = "Ken the Ninja";

const introduce = (name) => {
  console.log(`I am ${name}`);
  
  
};

introduce("Master White");

console.log(name)

const number1 = 103;
const number2 = 72;
const number3 = 189;

// Write a function called getMax to get the maximum value
const getMax = (a, b, c) =>{
  let max = a;
  if (b > max){
    max = b;
  }
  if(c > max){
    max = c;
  }
  return max;
};

const max = getMax(number1, number2, number3);
console.log(`The maximum value is ${max}`);