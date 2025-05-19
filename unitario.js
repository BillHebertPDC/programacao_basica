

function benchmark(fn, iterations) {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        fn();
    }
    const end = performance.now();
    return end - start;
}

function benchmarkAdditionSet() {
    const set = new Set();
    for (let i = 0; i < 100000; i++) {
        set.add(i);
    }
}

function benchmarkAdditionArray() {
    const array = [];
    for (let i = 0; i < 100000; i++) {
        array.push(i);
    }
}

function benchmarkRemoveSet() {
    const set = new Set();
    for (let i = 0; i < 100000; i++) {
        set.add(i);
    }
    for (let i = 0; i < 100000; i++) {
        set.delete(i);
    }
}

function benchmarkRemoveArray() {
    const array = [];
    for (let i = 0; i < 100000; i++) {
        array.push(i);
    }
    for (let i = 0; i < 100000; i++) {
        const index = array.indexOf(i);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
}

console.log('Set addition time:', benchmark(benchmarkAdditionSet, 10)); // 30.699999809265137 ms
console.log('Array addition time:', benchmark(benchmarkAdditionArray, 10)); // 2.9000000953674316 ms
console.log('Set removal time:', benchmark(benchmarkRemoveSet, 10)); // 63.700000047683716 ms
console.log('Array removal time:', benchmark(benchmarkRemoveArray, 10)); // 5597.299999952316 ms



/*
const myMap = new Map();
for (let i = 0; i < 1000000; i++) {
  myMap.set(i, `Value ${i}`);
}

const myObject = {};
for (let i = 0; i < 1000000; i++) {
  myObject[i] = `Value ${i}`;
}

console.time("Map Iteration");
for (const [key, value] of myMap) {
}
console.timeEnd("Map Iteration");

for (const key in myObject) {
  if (myObject.hasOwnProperty(key)) {
  }
}
console.timeEnd("Object Iteration");

// Results
// Map Iteration: 21.83984375 ms
// Object Iteration: 86.773193359375 ms
*/