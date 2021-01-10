# Events and Arrays

Events and arrays are both collections!

## Iterator Pattern vs Observer Pattern

### 1. Iterator

2 players: a producer and a consumer
Consumer request information 1 at a time from the producer until:

1. No more information
2. Error happened

### 2. Observer

2 players: a producer and a callback
The producer pushes out information 1 at a time and call the callback that was provided

> They both do the same thing essentially, just who is in control

In Iterator pattern, we have an Iterable, aka something you can iterate over (e.g array)

Then in Observer, we have Observable, aka something you can observe

An Observable is a collection that arrives over time
