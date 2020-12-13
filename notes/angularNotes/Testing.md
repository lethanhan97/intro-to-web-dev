# Angular Testing

## What is provided?

Angular boots up by creating a mock module that contains your component for you

It also creates a fixture, which allows you to access your component

## Stubs

If your component uses a service, you should create a stub that mocks that service (empty objects with no-op components)

```
const coursesService = {
    add: () => {
        return {
            subscribe: () => {}
        }
    },

    delete: () => {
        return {
            subscribe: () => {}
        }
    }
}
```

## Spy

You can spy on services to make sure that they are called.
