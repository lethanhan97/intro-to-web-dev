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
