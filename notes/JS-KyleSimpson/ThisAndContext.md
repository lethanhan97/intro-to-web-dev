# this & Context

## `this`

`this` has nothing to do about the function. It has to do with "how the function was called". The same function can have different `this` depending on how it was called

```
var workshop = {
    teacher: "Kyle",
    ask: (question) => {
        console.log(this.teacher, question)
    }
}

workshop.ask(" AMA") // Kyle AMA
```

It renders like that because of `workshop.ask`, not that teacher was declared inside `workshop`

```
function ask(question) {
    console.log(this.teacher, question);
}

function otherClass() {
    const myContext = {
        teacher: "Kyle"
    }
    ask.call(myContext, "What r thoseeee"); // Kyle, What r thoseeeee
}

otherClass();
```

The ask function is now much more flexible
