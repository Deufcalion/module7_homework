/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

- Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
- Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
- У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
- Создайте экземпляры каждого прибора.
- Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

Общие требования:

- Имена функций, свойств и методов должны быть информативными
- Соблюдайте best practices:
- использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классовb
- информативные имена (а не a, b);
- четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
- использование синтаксиса es6 (кроме функции-конструкторов) и так далее. */

const Gadjet = function (name, battaryCappacity) {
    this.name = name;
    this.battaryCappacity = battaryCappacity;
    this.connect = false;
  };
  
  Gadjet.prototype.connected = function () {
      console.log(`${this.name} подключен к электросети`);
      this.connect = true;
  };
  Gadjet.prototype.unconnected = function () {
      console.log(`${this.name} не подключен к электросети`);
      this.connect = false;
  };
  
  function MyGadjet(name, brand, battaryCappacity, material) {
    this.name = name;
    this.brand = brand;
    this.battaryCappacity = battaryCappacity;
    this.material = material;
    this.connect = true;
  }
  
  MyGadjet.prototype = new Gadjet();
  const phone = new MyGadjet("Телефон", "Samsung", 5000, "metall/plastic");
  phone.unconnected();
  console.log(phone)
  
  const laptop = new MyGadjet("Ноутбук", "Lenovo", 10000, "plastic");
  laptop.connected();
  console.log(laptop)
  