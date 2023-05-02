// Easy

// 1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// let num1 = 5;
// let num2 = 13;
// let num3 = 7;
// let num4 = 21;
// let num5 = 48;

// let total = num1 + num2 + num3 + num4 + num5;
// console.log(total);

// 2.Write a program to take a number input from user and determine whether the number is odd or even.

// let number = Number(prompt("Enter the Number"));
// if (number % 2 === 0) {
//   console.log("This is even number");
// } else {
//   console.log("This is odd number");
// }

//3.Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// let num1 = 129;
// let num2 = 251;

// if (num1 > num2) {
//   console.log(`${num1} is maximum number and ${num2} is minimum number`);
// } else {
//   console.log(`${num2} is maximum number and ${num1} is minimum number`);
// }

//4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// let num1 = 8;
// let num2 = 23;
// let num3 = 17;
// let largest;

// if (num1 >= num2 && num1 >= num3) {
//   largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   largest = num2;
// } else {
//   largest = num3;
// }
// console.log(`The  largest number: ${largest}`);

//5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

// let num1 = 35;
// let num2 = 29;
// let num3 = 46;
// let minimum;

// method 1
// minimum = Math.min(num1, num2, num3);

// method 2

// if (num1 <= num2 && num1 <= num3) {
//   minimum = num1;
// } else if (num2 <= num1 && num2 <= num3) {
//   minimum = num2;
// } else {
//   minimum = num3;
// }
// console.log(`The  minimum number: ${minimum}`);

//6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// let month31days = [
//   "January",
//   "March",
//   "May",
//   "July",
//   "August",
//   "October",
//   " December",
//   "january",
//   "march",
//   "may",
//   "july",
//   "august",
//   "october",
//   " december",
// ];
// let month30days = [
//   "November",
//   "April",
//   "June",
//   "September",
//   "november",
//   "april",
//   "june",
//   "september",
// ];
// let monthfeb = ["February", "february"];

// let userinput = String(prompt(`Enter the month`));

// for (let month = 0; month <= month31days.length; month++) {
//   if (userinput === month31days[month]) {
//     console.log(`"${userinput}" this month has 31days`);
//   } else if (userinput === month30days[month]) {
//     console.log(`"${userinput}" this month has 30days`);
//   } else if (userinput === monthfeb[month]) {
//     console.log(`"${userinput}" this month has 28days or 29days leap year`);
//   }
// }

//Intermediate

//1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

// let arr = [];

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   }
//   console.log(i);
// }

//2.Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

// let n = 5;
// let string = "";

// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n ";
// }
// console.log(string);

//3.Write a program to take a number input from user and print multiplication table 12 times for that number.

// let userinput = Number(prompt("Enter the table number"));
// let table;

// for (let i = 1; i <= 12; i++) {
//   table = i * userinput;
//   console.log(`${i} x ${userinput} = ${table}`);
// }

//3.Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// let n = 20;
// let n1 = 0,
//   n2 = 1,
//   nextterm;

// for (let i = 0; i < n; i++) {
//   console.log(n1);
//   nextterm = n1 + n2;
//   n1 = n2;
//   n2 = nextterm;
// }

//4.Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// let userinput = Number(prompt(`Enter the Number to find factorial`));
// let fact = 1;

// for (let i = 1; i <= userinput; i++) {
//   fact *= i;
// }
// console.log(fact);

//6.Write a Program to take a number input from user and find if the number is Prime or not.

// let userinput = Number(prompt(`Enter the number`));
// let prime = 1;
// let i = 2;
// if (userinput === 1) {
//   console.log(`${userinput} is a prime number`);
// } else {
//   while (userinput % i == 0) {
//     prime = userinput % i;
//     i++;
//   }
//   if (i <= 2) {
//     console.log(`${userinput} is a prime number`);
//   } else {
//     console.log(`${userinput} is not a prime number`);
//   }
// }

//7.Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

let weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let weekend = ["saturday", "sunday"];
let userinput = String(prompt(`Enter the Day`));

for (let day = 0; day < weekday.length; day++) {
  if (userinput === weekday[day]) {
    console.log(`"${userinput}" is weekday`);
  } else if (userinput === weekend[day]) {
    console.log(`"${userinput}" is weekend`);
  }
}
