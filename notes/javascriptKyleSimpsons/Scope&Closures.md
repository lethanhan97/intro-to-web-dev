# Scope & Closures

## Scope

Scope = Where to look for things

```
let teacher = "Kyle" // Declare variable teacher on global scope with value "Kyle"

const doSth = () => {
    teacher = "Suzy" // No declaration => It will look to a scope outside. It found teacher = "Kyle and change its value to Suzy
    topic = "React" // No declaration => Look for a scope outside. Not found => Create a variable called topic on global scope
    console.log("Do Sth")
}

doSth()

teacher
topic
``
```

## Undefined vs Undeclared

- undefined: Declared without a value
- undeclared: Not yet declared

## Function Expressions

A function that is assigned a value somewhere. A function is a first class citizen in JS.
It can be passed arround.

e.g

```
const clickHandler = function() {
    // Anonymous Function
}

const keyHandler = function keyHandler() {
    // Named Function
}
```

Kyle suggests that we keep all functions Named, so that the reader can infer the function's purpose via its name instead of figuring it out by themselves

## IIFE - Immediately Invoked Function Expressions

```
var teacher = "Kyle"
(function anotherTeacher() {
    var teacher = "Suzy"
    console.log(teacher) // Suzy
})()

console.log(teacher) // Kyle
```

IIFE creates a scope, hence protecting the outer scope

## Block Scope

```
var teacher = "Kyle"
{
    let teacher = "Suzy
    console.log(teacher) // Suzy
}
console.log(teacher) // Kyle
```

Block scope only exists between `{}`

Scope should be as narrow as possible. Hide unless you need to show.

## Closure

Closure is when a function remembers the variables outside of it

```
const ask = (question) => {
    setTimeOut(() => {
        console.log(question)
    }, 1000)
}

ask("What is closure?")
```

In the code snippet above, ask finishes immediately. However, the callback inside setTimeOut still needs `question`, so `question` is still kept in scope
