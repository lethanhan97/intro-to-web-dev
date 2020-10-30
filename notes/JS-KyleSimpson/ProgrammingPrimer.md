# Programming Primer

## Values

JS Data types:

Primitive

- number: No distincting between double or int
- string
- boolean
- empty values: null and undefined

Non-Primitive

- arrays
- objects

## Operations

Binary Operators: `+ - * / || && == === < >`

Binary Operators means an operator involving 2 items

Unary Operators: `!`

### +

- 1 + 1 = 2
- "1" + 1 = "11"
- "hello " + "world" = "hello world"

### The other math operators

- "6" - 2 = 4
- "string" - "str" = NaN

## Type

- typeof `42` `// "number"`
- typeof `"hello world"` `// "string"`
- typeof `undefined` `// "undefined"`
- typeof `null` `// "object"`
- typeof `{ name: "An" }` `// "object"`
- typeof `[1, 2, 3]` `// "object"`

An array is a subset of object

## Expression and Statement

### `var age = 39`

The whole thing is a statement. `age = 39` is an assignment statement.

### `age = 1 + (age * 2)`

The whole thing is a statement. `age * 2` is a statement. `1 + result` is a statement. `age = result` is a statement

## Loops

### For loop

```
for(let i = 0; i < num; i++) {
    doSth()
}
```

```
for (let item of array) {
    doSth()
}
```

### While loop

```
while(condition) {
    doSth()
}
```
