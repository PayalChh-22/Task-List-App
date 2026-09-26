// 1. VARIABLES AND VALUES
// let studentName = "Payal";
// let studentAge = 22;
// let isStudent = true;

// console.log(studentName);
// console.log(studentAge);
// console.log(isStudent);

// o/p: Payal
//      22
//      true

// 2. DATA TYPES
// let name = "Payal";
// let age = 21;
// let isPresent = true;
// let marks;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isPresent);
// console.log(typeof marks);

// o/p: string
//      number
//      boolean
//      undefined

// 3. CONDITIONAL
// let marks = 70;
// if(marks >= 40) {
//     console.log("Pass");
// }
// else {
//     console.log("Fail");
// }

// o/p: Pass
   
// 4. MULTIPLE CONDITIONS
// let marks = 80;

// if (marks >= 90) {
//     console.log("Grade A+");  //false
// } else if (marks >= 75) {
//     console.log("Grade A"); //true
// } else if (marks >= 60) {
//     console.log("Grade B");   //true
// } else if (marks >= 40) {
//     console.log("Grade C");   //true
// } else {
//     console.log("Fail");
// }

// o/p: Grade A

// 5. FOR LOOP
// for(let num=1; num <=10; num++){
//     console.log(num)
// }

// o/p: 1
//      2
//      3
//      4
//      5
//      6
//      7
//      8
//      9
//      10

// 6. WHILE LOOP
// let count = 1;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }
 
// o/p: 1
//      2
//      3
//      4
//      5

// 7. FUNCTIONS
// function greet() {
//     console.log("Hello World!");
// }
// greet();

// o/p: Hello World!

// 8. PARAMETERS
// function greet(name) {
//     console.log("Welcome, " + name);
// }
// greet("Payal");
// greet("Aarya");

// o/p: Welcome, Payal
//      Welcome, Aarya

// 9. RETURN VALUE
// function addNum(firstNum, secondNum) {
//    return firstNum + secondNum;
// }
// let result = addNum(60, 80);
// console.log(result);

// o/p: 140

// 10. INPUT VALIDATION
function validAge(age) {
    if (age >= 18 && age <= 60) {
        return "Valid age";
    } else {
        return "Invalid age";
    }
}

console.log(validAge(21));
console.log(validAge(10));

// o/p: Valid age
//      InValid age






















