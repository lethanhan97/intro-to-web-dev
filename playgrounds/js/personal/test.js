const data = [
  {
    name: "Tom",
    isKiller: false,
  },
  {
    name: "Dick",
    isKiller: false,
  },
  {
    name: "Harry",
    isKiller: false,
  },
  {
    name: "Johnny",
    isKiller: true,
  },
];

const getInnocentPeople = function (suspects) {
  const result = suspects
    .filter((suspect) => !suspect.isKiller)
    .map((suspect) => suspect.name);

  return result;
};

const getKiller = function (suspects) {
  const killer = suspects
    .filter((suspect) => suspect.isKiller)
    .map((suspect) => suspect.name);

  return killer;
};

const innocent = getInnocentPeople(data);
const killer = getKiller(data);

const testSpread = (...args) => {
  console.log(args);
};

console.log(testSpread("hi", "world"));
