// step06-練習問題

// Q1
const Q1 = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
};

// Q2
const Q2 = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

    console.log(max);
  }
};

// Q3
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

const person = new Person("John", 30);
person.sayHi();
