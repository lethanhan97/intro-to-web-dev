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
test();
test();
test();
