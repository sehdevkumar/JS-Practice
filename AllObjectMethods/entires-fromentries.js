const data = {
  person1: { first_name: "John", last_name: "Doe" },
  person2: { first_name: "Jane", last_name: "Smith" },
};




// output 
// {
//   person1: { fullName: "John Doe" },
//   person2: { fullName: "Jane Smith" }
// }

const arr_entries = Object.entries(data);


const finalResult = arr_entries.map(d=> {
     let obj = []
     let fullName = d[1].first_name + " " +  d[1].last_name;
     obj = [d[0],{fullName}];

     return obj;
})


console.log(Object.fromEntries(finalResult))

