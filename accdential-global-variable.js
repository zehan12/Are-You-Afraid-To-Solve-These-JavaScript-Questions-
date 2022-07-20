function crazyFunction() {
  var a = (b = 10);
}
crazyFunction();
console.log("b", typeof b === "undefined");
console.log("a", typeof a === "undefined");
