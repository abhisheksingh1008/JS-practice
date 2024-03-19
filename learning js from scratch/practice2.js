// To access a property, we can use:

// The dot notation: obj.property.
// Square brackets notation obj["property"]. Square brackets allow taking the key from a variable,
// like obj[varWithKey].

// let user = new Object();

// user.name = 'John';
// user.surname = 'Smith';
// for(let prop in user) {
//     console.log(user[prop]);
// }
// console.log(user["name"]);

// user.name = 'Pete';
// for(let prop in user) {
//     console.log(user[prop]);
// }

// delete user.name;
// for(let prop in user) {
//     console.log(user[prop]);
// }

function createUser(age, name, surname) {
  // return {
  //     name : name,
  //     surname : surname,
  //     age : age,
  // }

  // Or just do this instead
  return {
    name,
    surname,
    age,
  };
}

function isEmpty(obj) {
  // let counter = 0;
  // for(let prop in obj) counter++;
  // if(counter) return false;
  // return true;

  // Or simply use this
  for (let prop in obj) {
    // if the loop has started return false straight away
    return false;
  }
  return true;
}

// let user = {};
// console.log(isEmpty(user));

// user = createUser(30, 'John', 'Smith');
// console.log(isEmpty(user));
// console.log(user.surname);

function sumOfSalaries(salaries) {
  let sum = 0;
  for (let prop in salaries) {
    sum += salaries[prop];
  }
  return sum;
}

function multiplyNumericPropsBy2(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") obj[key] *= 2;
  }
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// console.log(sumOfSalaries(salaries));

let menu = {
  title: "My menu",
  country: "India",
  dishes: {
    dish1: "Idli",
    dish2: "Shahi Paneer",
    dish3: "Chicken tandoori",
    bevrages: {
      softDrinks: {
        first: "Sprite",
        second: "ThumbsUp",
        third: "Coca Cola",
      },
      alcohols: {
        first: "Corona",
        second: "Old Monk",
        third: "Royal Challengers",
      },
    },
  },
  size: {
    width: 200,
    height: 300,
    girth: {
      x: 100,
      y: 90,
      z: 120,
    },
  },
  function: function newFun(a, b, c, d) {
    console.log("Hi there!");
  },
};

// multiplyNumericPropsBy2(salaries);
// multiplyNumericPropsBy2(menu);
// console.log(salaries);
// console.log(menu);

function deepCopy(sourceObj) {
  let result = {};
  for (let key in sourceObj) {
    if (typeof sourceObj[key] == "object") {
      result[key] = deepCopy(sourceObj[key]);
    } else result[key] = sourceObj[key];
  }
  return result;
}

console.log(menu);
let newMenu = deepCopy(menu);
console.log(newMenu);
delete newMenu.size.girth;
newMenu.size.height = 1e9;
newMenu.size.width = 1e9 + 7;
console.log(newMenu);
