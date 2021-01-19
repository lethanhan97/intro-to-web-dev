# Higher Order Functions and Callbacks

## Higher Order Functions

HOC can take a function as an input and return a function as an output

e.g

```
const increment = (num) => num + 1;
const square = (num) => num * num;

const doMath = (num, op) => op(num);

doMath(1, increment) // returns 2
doMath(2, square) // returns 4
```

Reduce implementation

```
Array.prototype.reduce = function (callback, aggregate) {
  let arr = [...this];
  let total;
  if (!aggregate) {
    total = arr[0];
    arr = arr.slice(1);
  } else {
    total = aggregate;
  }

  arr.forEach((e, i) => {
    total = callback(total, e, i, this);
  });

  return total;
};
```
