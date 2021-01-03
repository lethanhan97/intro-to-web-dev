function callMe() {
  console.log(arguments);
}

const callMe2 = () => {
  console.log(arguments);
};

callMe2("hi", "hello", "world");
