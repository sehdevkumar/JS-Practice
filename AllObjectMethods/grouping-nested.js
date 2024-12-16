const data = [
  { id: 1, name: "Alice", role: "Developer", department: "Engineering" },
  { id: 2, name: "Bob", role: "Designer", department: "Design" },
  { id: 3, name: "Charlie", role: "Developer", department: "Engineering" },
  { id: 4, name: "Diana", role: "Designer", department: "Design" },
  { id: 5, name: "Eve", role: "Manager", department: "HR" },
];


// output {
//   Engineering: {
//     Developer: ["Alice", "Charlie"]
//   },
//   Design: {
//     Designer: ["Bob", "Diana"]
//   },
//   HR: {
//     Manager: ["Eve"]
//   }
// }

let out = {}

data?.forEach(d=> {
     
   if (!out[d.department]) {
     out[d.department] = {};
   }
   if (!out[d.department][d.role]) {
     out[d.department][d.role] = [];
   }
   out[d.department][d.role].push(d.name);
})


// console.log(out)



const data1 = [{ name: "Alice", role: "Developer", department: "Engineering" }];
const data2 = [{ name: "Bob", role: "Designer", department: "Design" }];



const finalResult = [...data1,...data2].reduce((acc,v)=> {
    
       if(!acc[v.department]) {
         acc[v.department] = {}
       }
       if(!acc[v.department][v.role]) {
         acc[v.department][v.role] = []
       } 
       
        acc[v.department][v.role].push(v.name); 

    return acc;

}, {});


console.log(finalResult)
