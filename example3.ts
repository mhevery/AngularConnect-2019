import {createBenchmark} from './benchmark';

const ARRAY_SIZE = 10000;
const OBJ_1 = [];  // {value:0, prop_0},  {value:0, prop_0}, {value:0,
                   // prop_0}, {value:0, prop_0},
const OBJ_2 = [];  // {value:0, prop_0},  {value:0, prop_1}, {value:0,
                   // prop_0}, {value:0, prop_1},
const OBJ_3 = [];  // {value:0, prop_0},  {value:0, prop_1}, {value:0,
                   // prop_2}, {value:0, prop_0},
const OBJ_4 = [];  // {value:0, prop_0},  {value:0, prop_1}, {value:0,
                   // prop_2}, {value:0, prop_3},
const OBJ_5 = [];
const OBJ_6 = [];
const OBJ_7 = [];
const OBJ_10 = [];
const OBJ_100 = [];
const OBJ_1000 = [];
const OBJ_10000 = [];

for (let i = 0; i < ARRAY_SIZE; i++) {
  OBJ_1.push({value: 0, [uniqueName(i, 1)]: false});
  OBJ_2.push({value: 0, [uniqueName(i, 2)]: false});
  OBJ_3.push({value: 0, [uniqueName(i, 3)]: false});
  OBJ_4.push({value: 0, [uniqueName(i, 4)]: false});
  OBJ_5.push({value: 0, [uniqueName(i, 5)]: false});
  OBJ_6.push({value: 0, [uniqueName(i, 6)]: false});
  OBJ_7.push({value: 0, [uniqueName(i, 7)]: false});
  OBJ_10.push({value: 0, [uniqueName(i, 10)]: false});
  OBJ_100.push({value: 0, [uniqueName(i, 100)]: false});
  OBJ_1000.push({value: 0, [uniqueName(i, 1000)]: false});
  OBJ_10000.push({value: 0, [uniqueName(i, 10000)]: false});
}
function uniqueName(index: number, shapesCount: number): string {
  return 'prop_' + (index % shapesCount);
}

(function doBenchmarks(benchmark) {
  let sum = 0;
  (function benchmark1(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_1, benchmark('1'));

  (function benchmark2(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_2, benchmark('2'));

  (function benchmark3(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_3, benchmark('3'));

  (function benchmark4(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_4, benchmark('4'));

  (function benchmark5(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_5, benchmark('5'));

  (function benchmark6(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_6, benchmark('6'));

  (function benchmark7(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_7, benchmark('7'));

  (function benchmark10(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_10, benchmark('10'));

  (function benchmark100(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_100, benchmark('100'));

  (function benchmark1000(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_1000, benchmark('1000'));

  (function benchmark10000(array, timer) {
    while (timer()) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i].value;
      }
    }
  })(OBJ_10000, benchmark('10000'));

  benchmark.report();
})(createBenchmark('example3'));
