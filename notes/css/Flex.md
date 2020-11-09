# Flex

- first layout element, but not designed to layout an entire web page
- parent is called flex-container, child is called flex-items
- need both to work
- excels at verticle centering and equal heights
- very easy to reorder boxes
- Major disadvantages:
  - Wasnt designed to be locked down for layouts. only for 1 dimension
  - Browser support and syntax is challenging
- `space-evenly` is not well supported

## Terminology

Parent: Flex-Container

Child: Flex-Item

Main-axis: depending on flex-direction
Cross-axis: the other axis

## Versions

- 2009: display: box;
- 2011: display: flexbox only supported by IE10
- 2016: display: flex;

# Flex Properties

- flex-wrap: wrap allows content to be automatically aligned
- flex-flow: [direction] [wrap] is a shortcut
- justify-content: [center | space-between | space-around | ...] helps us align items on the 1st axis (for flex-direction: row then it ll be row)
- align-items: [center | stretch | ...] controls the secondary axis for flex-direction: row then it ll be column)
- _not flex property_ order: `number` determines the order priority (smallest to biggest)
- flex-basis: "width value". Sets initial width value for item **NEVER USE WIDTH ON FLEX CHILDREN**
- flex-grow and flex-shrink: how fast a box expand/how slow it shrinks in space
