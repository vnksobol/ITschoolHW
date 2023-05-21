// 1. Пример класса и объекта.
class Masterpiece {
    constructor(author, name, year, style) {
        this.author = author;
        this.name = name;
		this.year= year;
        this.style = style;    
    }

    check() {
        this.isChecked = !this.isChecked;
    }
}

const item = new Masterpiece('Blanchard', 'A view of the Porte de Saint Denis', '1932', 'Impressionism');
console.log(Masterpiece)


let painting = {
	author: 'Blanchard',
	name: 'A view of the Porte de Saint Denis',
	year: 1932,
    style: 'Impressionism'
};
console.log(painting);


// 4
function bike () {
    console.log(this.name);
}
var name = "ninja";
var obj1 = { name: "pomidor", bike: bike }
var obj2 = { name: "site", bike: bike }
bike();                 // ninja - вызвана в глобальной области, консоль-лог обращается к свойству name, переданному в строке ниже.
obj1.bike();            // pomidor
obj2.bike()             // site


// 6
class UserService {
  _username;
  _password;
  constructor(username, password) {
    this.password = password;
    this.username = username;
  }
  get password() {
    return `getter ${this._password}`;
  }
  set password(v) {
    this._password = '000';
  }
}

const admin = new UserService('Fooman', '12345');
admin._password = '567890';

console.log('Username:', admin.username);
console.log('Password:', admin.password);
console.log('getter:', Object.getOwnPropertyDescriptor(Object.getPrototypeOf(admin), 'password').get.call(admin))


// 8
const person = {
    name: "Valera",
    age: 23
}
let city = person.city;
city = "Amsterdam"

console.log(person)