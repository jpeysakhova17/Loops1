for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let a = 10;
while (a >= 0) {
  console.log(a);
  a--;
}
console.log("Here is my do..while");
{
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}
console.log("this is the second do..while")
{
  let a = 10;
  do {
    console.log(a);
    a--;
  } while (a >= 0);
}
console.log("This is myArray")
let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < myarray.length; i++) {
  console.log(myarray[i]);
}
)