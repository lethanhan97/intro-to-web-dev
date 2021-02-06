# Types & Coercion

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

## Truthy vs Falsy

Falsy

- 0, -0
- null
- undefined
- NaN
- false

The rest are thus truthy

> `!!stuff` is a good way to explicitly define something to be used as a Boolean (same as Boolean())

> `+stuff` is a good way to convert sth into a Number (same as Number())

> `Number()` is more accurate than `parseFloat()`

### Best Practice

Be obvious about types. If we are dealing with number, then really turn it into a number etc

Avoid confusion

## Equality

`===` disallows coercion

`==` allows coercion

basically the big misconception is that == checks for value and === checks for types AND value

that s only half truth. What happens is that === disallow for coercion (changing from 1 type to another) and == allows coercion (changing from 1 type to another) instead of ambiguously checks for a "value"

So you should/could use == in places where types are very clear (for e.g in typescript where in your function you alr define the correct type for the method parameters) or when checking for stuff that are "falsy" (like null, undefined or NaN) etc

