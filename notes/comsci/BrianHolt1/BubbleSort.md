# Bubble Sort

Not useful :(

Dont use it in production code. Useful for learning

Compare 2 numbers at a time:

- if they are out of order, reorder them
- 2 loops
- Outer loop that runs as long as there is a swap
- Inner loop check if the curent 2 numbers are out of order
- O(n^2) => wildly inefficient

```javascript
const bubbleSort = (arr) => {
  const res = arr.slice(0);
  let hadSwapped = false;

  do {
    for(let i = 0; i < res.length; i++) {
      const curNum = res[i];
      const nextNum = res[i+1];

      if(curNum > nextNum) {
        res[i] = nextNum;
        res[i+1] = curNum;

        hadSwapped = true;
        break;
      } else {
        hadSwapped = false;
      }
    }
  } while(hadSwapped);

  return res;
}
```



