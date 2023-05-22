// 1
class Employee {
  constructor (name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;  
  }
}
// setTimeout(obj.func.bind(obj));

const employee = new Employee('Иван', 'Иванов', 10, 31)
  console.log(employee._name);
  console.log(employee._surname);
  console.log(employee._rate);
  console.log(employee._days);
  // console.log(employee.getSalary());