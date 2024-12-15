const objectMethods = {
   name: "sehdev"
}



if(objectMethods.hasOwnProperty("name")) {
   console.log("yes")
}


if( "name" in objectMethods) {
   console.log("Yes im in")
}

const obj =  {
   name: "sehdev",
   rollno: 123
}
// if sealed then can change values but can not add any extra properties to objects
Object.seal(obj)

obj.name = "sss"
obj.address = ""
console.log(obj);

// we can not change the value of the property and event can't add new property
const obj2 = {
  name: "sehdev",
  rollno: 123,
};
Object.freeze(obj2)
obj2.name = "it should changed";
obj2.hello = ""

console.log(obj2)


// Obect to arry and array to object see how these powerfull methods works you can solve any problem
console.log("============================")

const myObject = {
   a:1,
   b: {
     c:3
   }
}

const entries = Object.entries(myObject)

console.log(entries)

const fromEntriestoObject = Object.fromEntries(entries);
console.log(fromEntriestoObject)


// all values and keys


const valAndKeys = {
   k1: "hey",
   k2: {
     system: "Window"
   }
}

console.log(Object.keys(valAndKeys))
console.log(Object.values(valAndKeys));


const p = Object.getOwnPropertyNames(valAndKeys);

console.log(p)