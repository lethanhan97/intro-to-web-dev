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
