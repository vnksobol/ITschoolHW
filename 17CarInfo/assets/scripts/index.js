//Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене.

const element = document.querySelector('.element');
let str = "";


//Вам нужно:
// - создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;

class Transport {
  constructor (image, type, price, brand) {
    this._image = image;
    this._type = type;
    this._price = price;
    this._brand = brand;
  }
}

// const transport = new Transport('Тип', 100, 'Марка');
// console.log(transport._type, transport._brand,);


class TransportInfo extends Transport {
  constructor (image, type, price, brand) {
    super(image, type, price, brand)
  }
  getInfo() {
    return `Тип автомобиля: ${this._type}. <br/> Марка автомобиля: ${this._brand}.`;
  }
  getPrice() {
    return `Цена автомобиля: ${this._price}.`;
  }
  // addElement(image, type, brand, price) {
  //   element.innerHTML += `<div class="element">
  //                           <img src="${image}" alt="transport photo" class="image" />
  //                           <div>
  //                             <h2>${type}</h2>
  //                             <p>${brand}</p>
  //                             <p>${price}</p>
  //                           </div>
  //                         </div>`;
  // }
}

// const transportInfo = new TransportInfo('http', 'ТипИнфо', 1000, 'МаркаИнфо');
// console.log(`${transportInfo.getInfo()} ${transportInfo.getPrice()} у.е.`);

// - создать класс Car, который наследует от Transport. 
// Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;

class Car extends TransportInfo {
  constructor (image, type, price, brand, doors) {
    super(image, type, price, brand, doors)
    this._doors = doors;
  }
  getDoorsCount() {
    return `Количество дверей в автомобиле: ${this._doors}.`;
  }
}

// const car = new Car('http', 'ТипИнфо', 100, 'МаркаИнфо', 5);
// console.log(`${car.getDoorsCount()}`);



// - создать класс Bike, который наследует от Transport. 
// Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.
class Bike extends TransportInfo {
  constructor (image, type, price, brand, maxSpeed) {
    super(image, type, price, brand, maxSpeed)
    this._maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return `Максимальная скорость мотоцикла: ${this._maxSpeed} км/ч.`
  }
}

// const bike = new Bike('http', 'ТипБайка', 100, 'МаркаБайка>', 60);
// console.log(`${bike.getMaxSpeed()}`);
// str = `${bike.getMaxSpeed()}`;
// element.innerHTML = str;


const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 2,
    price: 2800000,
    image: 'https://kolesa-uploads.ru/-/c0552487-d7dc-437a-be38-4c7e3e5ec1b8/mercedes-benz-cle-front1-mini.jpg.webp'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
  }
];

data.forEach(item => {
    if(item.type === 'car') {
        const car = new Car(item.image, item.type, item.price, item.brand, item.doors);
        console.log(car);
        str = 
        str + `<img class="image" src="${item.image}"/>
          <h2 class="">${item.id}</h2>
          <p class="">${item.type}</p>
          <p class="">${item.price} rub</p>
          <p class="">${item.brand}</p>
          <p class="">${item.doors} doors</p>`;
          element.innerHTML = str;
    } else {
        const bike = new Bike(item.image, item.type, item.price, item.brand, item.maxSpeed);
        console.log(bike);
        str = 
        str + `<img class="image" src="${item.image}"/>
          <h2 class="">${item.id}</h2>
          <p class="">${item.type}</p>
          <p class="">${item.price} rub</p>
          <p class="">${item.brand}</p>
          <p class="">${item.maxSpeed} km/h</p>`
          element.innerHTML = str;
    }
    // str = 
    // str + `<img class="image" src="${item.image}"/>
    //   <h2 class="">${item.id}</h2>
    //   <p class="">${item.type}</p>
    //   <p class="">${item.price} rub</p>
    //   <p class="">${item.brand}</p>
    //   <p class="">${item.maxSpeed} km/h</p>`
    //   element.innerHTML = str;
});