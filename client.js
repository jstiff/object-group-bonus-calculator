const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 2,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
function main() {
  for (let e of employees) {
    console.log(employeefunc(e));
  }
}

// let calculator = (rating) => {
//   switch (rating) {
//     case rating === 2:
//       return "zero";
//       break;
//     default:
//       return "poop2";
//   }
// };

let employeefunc = (employeeObject) => {
  let calculator2 = (value) => {
    if (value <= 2) {
      return "You are fired with no bonus!!";
    } else if (value === 3) {
      return salary * 0.04;
    } else if (value === 4) {
      return salary * 0.06;
    } else if (value === 5) {
      return salary * 0.1;
    } else {
      return "poop";
    }
  };
  let rating = employeeObject.reviewRating;
  let salary = employeeObject.annualSalary;
  let earnedBonus = calculator2(rating);

  let newEmployee = {
    name: employeeObject.name,
    bonusPercentage: earnedBonus,
    totalCompensation: null,
    totalBonus: null,
  };
  return newEmployee;
};

console.log(main());
