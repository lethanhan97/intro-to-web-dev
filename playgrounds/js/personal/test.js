Array.prototype.each = function (callback) {
  const arr = Object.assign([], this);
  const result = arr.map((item) => callback(item));

  return result;
};

const arr = ["tom", "johnny", "hilda"];
const transform = arr.each((item) => {
  return {
    name: item,
  };
});

Array.prototype.filter = function (callback) {
  const list = Object.assign({}, this);
  const result = [];

  for (let i in list) {
    if (callback(list[i], i, list)) result.push(list[i]);
  }

  return result;
};

console.log(["An", "Clar"].filter((v) => v === "Clar"));

// Coding challenge
// Implement map, reduce and filter

Array.prototype.map = function () {};

Array.prototype.reduce = function () {};

Array.prototype.filter = function () {};
