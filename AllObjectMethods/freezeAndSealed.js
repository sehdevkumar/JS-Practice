// Freeze makes the object immutable, meaning it can't be changed at all.
// Properties can't be added or removed, and existing properties can't be changed.
const obj1 = {
  name: "sehdev",
  rollno: 12
}

Object.freeze(obj1);

// This will not change the value of name, because the object is frozen.
obj1.name = "I am ok";

// This will not add a new property, because the object is frozen.
obj1.phone = 6172531263;

// This will not delete the property, because the object is frozen.
delete obj1.name;

console.log(obj1);

// Seal makes the object immutable, but it can still be changed.
// Properties can't be added or removed, but existing properties can be changed.
const obj2 = {
  name: "sehdev",
  rollno: 12,
};

Object.seal(obj2);

// This will change the value of name, because the object is sealed, not frozen.
obj2.name = "I am ok";

// This will not add a new property, because the object is sealed.
obj2.phone = 6172531263;

// This will not delete the property, because the object is sealed.
delete obj2.name;

console.log(obj2);
