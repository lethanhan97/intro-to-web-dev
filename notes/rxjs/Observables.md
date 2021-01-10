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
element.addEventListener("mousemove", handler);

// Remove listener
element.removeEventListener("mousemove", handler);
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

## Working with Observables

An Observables is a Collection of Observable (think array of array)

We can use methods like `concatAll()` to flatten the Observable. `concatAll()` keeps the order of the data coming out of the Observable, thus we shouldn't use it for infinite streams

## `takeUntil()`

```
{...1..2..3}.takeUntil({...4})
```

Source Observable can use this method, which takes in a stop Observable. As soon as the stop Observable fires, `onNext` or `onError` or `onComplete`, it will stop taking from source Observable
