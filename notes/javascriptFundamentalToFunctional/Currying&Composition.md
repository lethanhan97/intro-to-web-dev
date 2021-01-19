# Currying

Currying is when you create a function that can later be called multiple times with diff arguments

e.g

```
function abc = (a, b, c) => {
    return [a ,b ,c]
}

curried = _.curry(abc);

abc(1)(2)(3) // returns [1, 2, 3]
```

# Composing

Takes 2 functions and combine them

e.g

```
const consider = (name) => 'I think it could be ${name}'
const exclaim = (statement) => statement.toUppercase();

const suspect = _.compose(name, statement);
suspect('you') // I think it could be YOU!
```
