// class Car {
//      constructor(make, model, year, price, type) {
//           this.make = make;
//           this.model = model;
//           this.year = year;
//           this.price = price;
//           this.type = type;
//      }
//      description() {
//           return `${this.year} ${this.make} ${this.model} ${this.price}${this.type}`
//      }
// }

// const car1 = new Car("Toyota", "Corolla", 2020, "10000$", "Mehanika");
// const captive = new Car("Chevrolet", "Captive", "2023", "1000$", "Avtomat");
// console.log(captive);



class CarItems {
     constructor(make, model, year, price, type, color, weight) {
          this.make = make;
          this.model = model;
          this.year = year;
          this.price = price;
          this.type = type;
          this.color = color;
          this.weight = weight;
     }
     description() {
          return `${this.year} ${this.make} ${this.model} ${this.price}${this.type}${this.color}${this.weight}`
     }
}
const jentra = new CarItems("Chevrolet", "Jentra","2023", "1200$","Mehanika","Oq","1t");
console.log(jentra);
