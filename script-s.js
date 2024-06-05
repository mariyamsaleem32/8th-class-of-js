// let a = 3;        
// let b = --a;
// console.log(a);
// console.log(b); 

// var originalNum = 23;
// var newNum = originalNum + 7;
// console.log(newNum);

// ++a   //pre increment
// --aa  //pre decriment
// a++   //post increment
// a--   //post decriment

// let number1 = parseInt(prompt("enter your first number",33));
// let number2 = parseInt(prompt("enter your second number",27));
// console.log(number1 + number2);

// let x = 21;
// x += 4;
// console.log(x);

// let m = 8;
// let r = 8;
// console.log(m===r);

// let mood = "dark";
// let color = "black";
// if (mood == "dark"){
//     console.log(color);
// }
// else{
//     console.log(color);
// }

// let user = prompt("enter your name");
// let age = +prompt("enter your age");
// if (age >= 18){
//         console.log("you are aligible for vote");
//     }
//     else  {
//             console.log("you are not aligible for vote" );
//         }

// let number = +prompt ("enter your number");
// if (number %2 ==0){
//     console.log(number, "is even number");
// }
// else{
//     console.log(number,"is odd number");
// }

// let age = +prompt ("enter your number");
// if (age > 40){
//     console.log(age, "you are senior");
// }
// else if (age < 18) {
//     console.log("you are jonior");
// }
// else{
//     console.log("you are middle");
// }

// let number = +prompt ("enter your number");
//  if (number %5 ==0){
//     console.log(number, "is not multiple of 5");
//  }

// var userName = prompt ("enter your name");
// if (userName != null){
//    alert("hello"+ " " + userName +" "+"welcome to our website");
// }
// else{
// ("hello user welcome to our website");
// }
 
// let score = +prompt("enter your score"); 
// if (score >= 80 && score <= 90){
//     console.log("you are passed");
// }
// else{
//     console.log("you are faild");  
// }

// let score = +prompt("enter your score"); 
// if (score >= 80 && score <= 90){
//     console.log("you are passed");
// }
// else{
//     console.log("you are faild");  
// }

// let score = +prompt("enter your score"); 
// if (score <= 80 && score >= 60){         
//     console.log("you are passed");
// }
// else{
//     console.log("you are faild");  
// }

// console.log("happy coding \n hello coder \n how are you");

// let weight = +prompt("enter your weight");
// let time = +prompt("enter your time");
// let age = +prompt("enter your age");
// let gender = prompt("enter your gender");
// if(weight <200 || time <6 && age >17 && gender === "female")
// {
//     alert("come to our tryout");
// }
// else
// {
//     alert("come to our cookout");
// }

// and operator &&
// or operator ||
// not operator !'

// let sentence;
// sentence = "pizza\npizz\npiz\npi\np";
// console.log(sentence);

// let x = 10;
//     let y = 1;
    
//     if (x > 5) {
//         if (y > 2) {
//             console.log("Both x and y are greater than their respective thresholds.");
//         } else {
//             console.log("x is greater than 5, but y is not greater than 2.");
//         }
//     } else {
//         console.log("x is not greater than 5, so the inner condition is not checked.");
//     }

    // a = 12;
    // b = 12;
    // c = 33;
    // d = c;
    // e = 24;
    // f = 55;
    // if(a===b && c===d || e===f)
    // {
    //     console.log("correct");
    // }
    // else{
    //     console.log("incorrect");
    // }

// let temperature = 15;
// let isSunny = true;
// if(temperature > 25){
//   console.log("It's hot outside!");
//   if(isSunny){
//       console.log("Don't forget to wear sunscreen.");
//   }
//   else{
//     console.log("You might still want to wear sunscreen.");
//   }
// }
// else if(temperature >= 15 && temperature <= 25){
//     console.log("It's a pleasant day.");
//   if(isSunny){
//     console.log("Enjoy the sunshine!");
//   }
//   else{
//     console.log("Even if it's cloudy, it's still nice outside.");
// }
// }
// else{
//     console.log("It's a bit chilly.");
//     if (isSunny) {
//         console.log("Don't be fooled by the sun, it's still cool.");
//     } else {
//         console.log("It might be cloudy, so bring a jacket just in case.");
//     }
// }

// //1
// let cityName =prompt ("Enter your city name");
// if(cityName === "karachi"){
//     document.write("<h1>welcome to city of lights</h1>");
// }
//  else {
//     document.write("<h1>welcome to"+" "+cityName+"</h1>");
// }
// //2
// let gender =prompt ("Enter your gander");
// if(gender === "male"){
//     console.log("good morning sir");
// }
// else if (gender === "female") {
//     console.log("good morning Ma'am");
// } else {
//     console.log("good morning"+" "+gender);
// }
// //3
// let trafic_singnal =prompt ("Enter a color");

// if(trafic_singnal === "red"){
//     alert("mut stop");
// }
// else if (trafic_singnal === "yellow") {
//     alert("ready to move");
// } 
// else if (trafic_singnal === "green") {
//     alert("move now");
// } 
// else {
//     alert("this is not singnal color");
// }
                                        //ARRAY
// let cities = ["Atnta", "Baltimore", "Chicago", "karachi", "faislabaad", "Seattle"];
// alert("Welcome to " + cities[3] + " "+ "and" +" "+ cities[4] );
// let number = [1,2,3,4,5,6,7,8,"100000000"];
// console.log(number[8].length);

//for loop
for (let i = 14; i < 141 ; i = i + 14){
    console.log(i);
    }

   //  let cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
   //  let cityToCheck = "Great Falls";
   //  for (let i = 0; i <= 4; i++) {
   //   if (cityToCheck === cleanestCities[3]) {
   //      alert("it is one of the clenest city");
   //   }
   //   else{
   //      alert("it is not one of the clenest city");
   //   }
   //  }

let cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
let cityToCheck = "Great Falls";
let matchFound = "yes";
for (let i = 0; i <= 4; i++) {
if (cityToCheck === cleanestCities[i]) {
 matchFound = "no";
 alert("It's one of the cleanest cities");
 break;
}
 }
 if (matchFound === "yes") {
 alert("It's not on the list");
 }

 alert("welcome to my website");
 document.write("hello world");
 console.log("a");
 
 let first_name;           //decleration
 let last_name;            
 first_name ="maryam";    //initialization
 last_name ="saleem";    
 console.log(first_name);
 console.log(last_name);
 
  let a = 30;
  let b = 30;
  let c = a+b;
  console.log("your result is :" +(a+b));  //substraction
 
  var birthDate = 2006;
  var myName    = "mariyam";
  var email     = "mariyamsaleeem45@gmail.com";
  console.log(myName +" " + birthDate + " " + email); //concatinate means using +
 
  let x = 50;
  let y = 30;
 
  console.log("add two numbers:" + (x+y));
  console.log("minas two numbers:" + (x-y));
  console.log("multiply two numbers:" + (x*y));
  console.log("divide two numbers:" + (x/y));
  console.log("modulus two numbers:" + (x%y));
 
 // Legal Variable
 let myName = "mariyam";
 let birthDate = 2006;
 let $email  = "mariyamsaleeem45@gmail.com";
 let Age;
 let age20;
 console.log(myName +" " + birthDate + " " + $email); 
  
 //Illegal Variable
 // let 12;
 // let 12return;
 // let !hello;
 // let @34answer;
 // let "Jaweria";
 // let ?khan;
 
 let costOfOneTicket = 600;
 let BuyingTickets =5;
 let result = costOfOneTicket * BuyingTickets;
 console.log("total cost of tickets is:"+ result);
 
 /*let info = ["wasifa",21,"eshal",10,"ravia",true]
 info.push("pakistan","india");
 console.log(info);  //for add in last
 info.pop("india");
 console.log(info);
 info.pop("pakistan");  //for delete
 console.log(info);
 console.log(info.toString());*/  //this is for simple string
 
 //addition in first
 /*let fruits = ["orange", "lemon","bnana","apple"];
 fruits.unshift("mango",78);
 console.log(fruits);*/
 
 //delete in first
 // let fruits = ["orange", "lemon","bnana","apple"];
 // fruits.unshift("mango",78);
 // console.log(fruits);
 // console.log(fruits.shift());
 // console.log(fruits);
 
 //concatination
 // let girls = ["raviya", "hina","kinza","fatima"];
 // let boys = ["arslan", "ali"];
 // let totalStudents = girls.concat(boys);
 // console.log(girls);
 // console.log(totalStudents);
 
 //simple object
 // let students = {
 //     fullName : "hina",
 //     age : 18,
 //     percentage : 89.787676,
 //     isPass : true,
 // };
 // console.log(students);
 
 //slice (return a piece of Array)
 // let females = ["raviya", "hina","kinza","fatima","manoor"];
 // console.log(females);
 // let piece = females.slice(1,-3);
 // console.log(piece);
 
 // let months = ["feb","march","april","monday","tuesday","wednesday",];
 // console.log(months);
 // let days = months.splice(3,2 ,"friday","sunday");
 // console.log(days);
 // console.log(months);

 