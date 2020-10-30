# Types / Coercian

In JavaScript, everything is an object --> **FALSE**

## Primitive Types

- undefined
- string
- number
- boolean
- object
- symbol

> null, array, functions are subsets of objects

In JS, variables don't have types. Values do!

## `NaN`

```
const greetings = "Hello World!"
const sth = grettings/2

Number.isNaN(greetings) // false
Number.isNaN(sth) // true
```

`NaN` is a special value that indicates that an invalid numercal operation had taken place

## `new`

Use `new` to declare a new object of these types:

- Object()
- Array()
- Function()
- Date()
- RegExp()
- Error()

Don't use `new` for these. It will coerce the type into that type:

- String()
- Number()
- Boolean()

## Coercion

Converting a type to another type

```
const msg1 = "There are "
const numStudents = 16
const msg2 = " students here"

console.log(msg1 + numStudents + msg2) // Implicit coercion
```

```
Number(stuff) // converts anything into a number
String(stuff) // converts anything into a string
Boolean(stuff) // converts into their truthy falsy type
```
