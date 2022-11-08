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
let input;
do {
  input = prompt("what is your name?");
  //prompt always returns string
  //convert input to number
//   console.log(Number(input));
} while (!isNaN(Number(input)));

// alert("Hello " + input );
alert(`Hello ${input}`);
