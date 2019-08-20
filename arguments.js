function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sum2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}


Function.prototype.myBind = function (context, ...args1) { 
  console.log(this);
  return (...args2) => this.apply(context, args1.concat(args2));
};

Function.prototype.myBind = function (context) { 
  args1 = Array.from(arguments);
  return () => {
    args2 = Array.from(arguments);
    return this.apply(context, args1.concat(args2));
  }
}


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((a, b) => (a+b), 0);
    }
    else {
      return _curriedSum;
    }
  }
}

Function.prototype.curry = function (numArgs, context) {
  let args = [];
  let that = this;
  return function _step(arg) {
    args.push(arg);
    if(numArgs === args.length) {
      that.apply(Window, args); // ???????
    } else {
      return _step;
    }
  }
}

// catch.sayThree(1,2,3)
// sayThree.cuury(3, contex)
const summ = curriedSum(4);
console.log(summ(5)(30)(20)(1)); // => 56

