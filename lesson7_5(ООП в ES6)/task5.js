/* Переписать консольное приложение из предыдущего юнита на классы.

    Общие требования:

- Имена классов, свойств и методов должны быть информативными;
- Соблюдать best practices;
- Использовать синтаксис ES6. */

class Gadjet {
    constructor (name, battaryCappacity) {
      this.name = name;
      this.battaryCappacity = battaryCappacity;
      this.connect = false;
    };
    
    connected() {
        console.log(`${this.name} подключен к электросети`);
        this.connect = true;
    }
    unconnected() {
        console.log(`${this.name} не подключен к электросети`);
        this.connect = false;
    }
  }
    
    class MyGadjet extends Gadjet {
      constructor (name, brand, battaryCappacity, material, power){
        super (name, battaryCappacity);
        this.brand = brand;
        this.material = material;
        this.connect = false;
        this.power = power
      }
    }
  
  const phone = new MyGadjet ("Телефон", "Samsung", 5000, "metall/plastic", 5);
  phone.unconnected()
  console.log(phone)
  
  const laptop = new MyGadjet ("Ноутбук", "lenovo", 10000, "plastic", 60);
  laptop.connected()
  console.log(laptop)

  const powerConsumption = phone.power + laptop.power
  console.log(`Потребляемая мощность включенных в сеть приборов - ${powerConsumption} Ватт`)