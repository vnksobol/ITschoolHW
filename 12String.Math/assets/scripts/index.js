2

const str = "Кресло, Диван, Софа";
const res = str.substr(7, 6); //Диван

// 4
const first = 'Н';
const others = 'астя';
const firstUp = first.toUpperCase();
console.log(`${firstUp}` + `${others}`);

6
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

7

const x="Солнце";

console.log("The string length is " + x.length);

8

const upperText="ВелоСипед" ;

document.write(upperText.toUpperCase());

9

let str = "розы такие розы"; 

str.replace("розы", "красивые");

10

const str = "abcdefghij";
console.log("(2,3): " + str.substr(2,3))