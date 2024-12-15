// Understanding the base class prototype

// Everything in JavaScript points to the base class prototype, and the base class points to the Object,
// which is always the last in the prototype chain with __proto__ = null.

// Example with built-in classes
const num = new Number(5);

console.log(Number.prototype.__proto__.__proto__);

// Example with a custom class

class Manager {
  constructor() {}
  getManager() {
    return "Hey, I am Manager";
  }
}

// Let's create an instance of the class
let m = new Manager();

// So now m.__proto__ should point to Manager.prototype
console.log(m.__proto__ === Manager.prototype);

console.log(m instanceof Manager);

// Can we see that the last prototype is Object and it points to null?

const isNull = m.__proto__.__proto__.__proto__;

// As you can see, the answer would be null because in prototype chaining,
// the last proto points to Object, and as we know, it ultimately points to null.
console.log(isNull); // null
