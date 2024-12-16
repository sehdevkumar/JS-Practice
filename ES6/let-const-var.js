// Var : is Global Scopped or function scoped

function hello() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
    var j = 10;
  }
  console.log(i, j);
}

hello();

// let and const blocked scoped

try {
  {
    let block1 = 10;
  }
  console.log(block1);
} catch (error) {
  console.log(error);
}

try {
  {
    const block2 = 10;
  }

  console.log(block2);
} catch (error) {
  console.log(error);
}
