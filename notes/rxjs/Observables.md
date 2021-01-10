# Observables

Observables can model:

1. events
2. async server requests
3. animations

## Changing DOM events manip into Observable manip

For a code snippet like this

```
const handler = (e) => console.log(e);

// Listens to event
document.addEventListener("mousemove", handler);

// Remove listener
document.removeEventListener("mousemove");
```

In Observable it is this

```
// Turns it into an observable
const mousemove = Observable.fromEvent(element, "mousemove");

// Listens to mousemove events and apply callback method
const subscription = mousemove.forEach(console.log)

// Unsubscribe from observable
subscription.dispose();
```

But with Observable, we can access what happens when error happens or when the stream completes

```
mousemove.forEach(
    // Whenever there is a new item
    (e) => console.log(e),

    // Whenever there is an error
    (error) => console.log(error),

    // Whenever there is no more item
    () => console.log("done)
)
```
