// for (let i = 0; i < 1000000; i++)
// {
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(Math.pow(2, i));
// }

// let i = 1;
// while (i <= 10) {
//   console.log(2 ** i);
//   i++;
// }
// let input;
// do {
//   input = prompt("what is your name?");
//   //prompt always returns string
//   //convert input to number
// //   console.log(Number(input));
// } while (!isNaN(Number(input)));

// // alert("Hello " + input );
// alert(`Hello ${input}`);

let fruits = ["Apple", "Banana"];
fruits.push("Orange");

// for (let i =0 ; i < fruits.length; i++)
// {
//     console.log(fruits[i]);
// }

// for (let item of fruits) {
//   console.log(item);
// }
// fruits.unshift("Mango");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// console.log(fruits.indexOf("Apple"))
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  hobbies: ["music", "skiing"],
};
// console.log(
//   `My name is ${person.name[0]} ${person.name[1]}. I am intereseted in ${person.hobbies[0]} and ${person.hobbies[1]}`
// );

for (let key in person)
{
    console.log(key);
    console.log(person[key]);
}