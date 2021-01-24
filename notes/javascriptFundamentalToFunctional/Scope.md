# Scope

Scope: Area where a variable have access to some values

Block scope: Area between `{ }`. In ES6 using `let` we can create block scope

```
var stuff = "stuff"
{
    let stuff = "block scope stuff"
    console.log(stuff) // prints block scope stuff
}
console.log(stuff) // prints stuff

{
    var stuff = "no block scope"
}
console.log(stuff) // prints no block scope
```

Block scope prevents stuff like this from happening

```
function fn() {
    for (var i = 0; i < 10; i++) {
        doSth();
    }

    console.log(i); // returns 10. With let i this will throw error
}
fn();
```

Scope looks upward. If they can't find a variable in its immediate scope it will look upward

```
var dumbo = "dumbo"
function fn() {
    console.log(dumbo)
}

fn(); // will print dumbo
```

Variables declared inside a function's scope will not be accessible outside of it

```
function fn() {
    var hi = "world"
}
console.log(hi) // throws error because hi is not found
```

Whenever a function is evoked, a new scope is initalized

```
function fn() {
    var counter = counter || 10;
    console.log(counter + 1);
}

fn() // prints 11
fn() // prints 11. Thus, the variable counter is cleaned up when function had finished executing
```

Stuff referenced in outer scope will retain when it is modified in inner scope

```
function cacher() {
  let cache;

  return function () {
    if (!!cache) {
      console.log(cache);
      cache = cache + 1;
    } else {
      console.log("no cache...");
      cache = 10;
    }
  };
}

const test = cacher();
const test2 = cacher();

test(); // no cache...
test(); // 10
test(); // 11

test2(); // no cache...
test2(); // 10
test2(); // 11
```

The function above have access to its parents' variable `cache`. Even though function `cacher` had finished calling, the variable `cache` is still kept alive. This is closure

When `cacher()` is called again to create `test2`, the function creates a 2nd execution context that is different from the 1st execution context from creating `test`. Thus, they won't overlap
