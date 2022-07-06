const isDogBetter = true;
const isCatBetter = false;
console.log("---------------------------------------------");
console.log("isDogBetter && isCatBetter", isDogBetter && isCatBetter);
console.log(isDogBetter && isCatBetter);
console.log("---------------------------------------------");
console.log("isDogBetter || isCatBetter", isDogBetter || isCatBetter);
console.log(isDogBetter || isCatBetter);

console.log("---------------------------------------------");
console.log("!(isDogBetter && isCatBetter", !(isDogBetter && isCatBetter));
console.log(!(isDogBetter && isCatBetter));
console.log("---------------------------------------------");

const atoms = 10;
const sandGrains = 15;
const starsInSky = 25;

console.log(
  "atoms > starsInSky && atoms > sandGrains",
  atoms > starsInSky && atoms > sandGrains
);
console.log("---------------------------------------------");
console.log("atoms !== sandGrains", atoms !== sandGrains);
console.log("---------------------------------------------");
console.log(
  "starsInSky < sandGrains || starsInSky > atoms",
  starsInSky < sandGrains || starsInSky > atoms
);
console.log("---------------------------------------------");
console.log(
  "atoms === starsInSky || atoms !== sandGrains",
  atoms === starsInSky || atoms !== sandGrains
);
console.log("---------------------------------------------");
console.log("atoms >= 10 && sandGrains <= 10", atoms >= 10 && sandGrains <= 10);
console.log("---------------------------------------------");
console.log(
  "atoms * starsInSky",
  atoms * starsInSky < 100 || atoms * sandGrains > 100
);
console.log("---------------------------------------------");
