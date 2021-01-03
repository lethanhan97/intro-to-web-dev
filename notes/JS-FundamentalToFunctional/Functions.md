# Functions

## Anatomy of a function

```
var nameImprover = function(name) {
    return `Cool ${name}`
}

nameImprover("An")

```

- Name: nameImprover
- Definition: `function() {}` or `() => {}`. Doesn't invoke the function
- Function declaration: `var fn = function() {} `
- Function expression `function fn() {}`
- Invokation: e.g `console.log()` <- log function is invoked
- Parameters: `function callMe (a, b ,c) {}` a, b ,c are params
- Arguments: `callMe("hon", "hon", "hon")` "hon` is an argument. Arguments are the values passed into a function
- Side effects: Anything that is beyond the function's scope

## Arrow Functions vs Regular Functions

- Arrow functions doesn't own its own `this` value.
- It grabs its value from its parent's scope
- Arrow function doesn't have the keyword `arguments` which is an array of the arguments being passed in the function. Arrow function's `arguments` keyword is a lil weird ngl
- Functions are also objects
