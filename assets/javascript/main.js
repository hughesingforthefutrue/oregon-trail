body = document.querySelector("body");
body.id = "body";

class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
    // this.element = document.createElement("div");
    // document.body.append(this.element);
  }
  eat(food) {
    this.food -= 1;
    if (this.food == 0) {
      this.isHealthy = false;
      return false;
    }
  }
  hunt(food) {
    this.food += 2;
  }
}
myString = JSON.stringify(Traveler);
// document.getElementById("body").innerHTML = myString;
console.log(myString);
total = 0;

class Wagon {
  constructor(capacity) {
    (this.capacity = capacity), (this.passengers = []);
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(Traveler) {
    for (let i = 0; i <= this.passengers.length; i++) {
      if (this.capacity - this.passengers.length > 0) {
        this.passengers.push(Traveler);
        myString = JSON.stringify(Traveler);
        document.getElementById("body").innerHTML = myString;
      }
      // myString = JSON.stringify(Traveler);
      // document.getElementById("body").innerHTML = myString;
      return this.passengers.length;
    }
  }
  shouldQuarantine() {
    let found = false;
    for (let i = 0; i < this.passengers.length; i++) {
      if (
        this.passengers[i].food == 0 &&
        this.passengers[i].isHealthy == false
      ) {
        return false;
      }
      return true;
    }
  }

  totalFood() {
    for (let i = 0; i < this.passengers.length; i++) {
      total += this.passengers[i].food;
      return total;
    }
  }
}
