const RBush = window.rbush;
const tree = new RBush();

let objArray = [];

const random = () => (Math.random() * 100000) | 0;

function searchAndChech(x, y) {
  let boxSet = tree.search({
    minX: x,
    minY: y,
    maxX: x,
    maxY: y,
  });
  //to check whether all the search results includes the mentioned points :
  //   console.log(`stack length ${boxSet.length}`)
  //   for (let i = 0; i < boxSet.length; i++) {
  //     if (
  //       !(
  //         (boxSet[i].minX <= x) &&
  //         (boxSet[i].maxX >= x) &&
  //         (boxSet[i].minY <= y) &&
  //         (boxSet[i].maxY >= y)
  //       )
  //     ) {
  //       console.log(boxSet[i]);
  //     }
  //   }
}

for (let i = 0; i < 1_00_000; i++) {
  objArray.push({
    minX: random(),
    minY: random(),
    maxX: random(),
    maxY: random(),
    id: i,
  });
}

console.log("Tree Load");
let b = performance.now();
tree.load(objArray);
console.log("time taken to load objects", performance.now() - b);

let a = performance.now();

for (let i = 0; i < 10000; i++) {
  let c = performance.now();
  searchAndChech(random(), random());
  //   console.log(`single search`,performance.now()-c);
}
console.log(`Total search time`, performance.now() - a);
