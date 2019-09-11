import {createBenchmark} from './benchmark';
const COUNT = Number.parseInt(process.argv[2] || "100");
const SAMPLES = Number.parseInt(process.argv[3] || "50");
console.log(`Running ${SAMPLES} samples with ${COUNT} iterations each.`);
const benchmark = createBenchmark('example3', COUNT, SAMPLES);

const ARRAY_SIZE = 10000;
const OBJ_1 = []; // {value:0, prop_0},  {value:0, prop_0}, {value:0, prop_0}, {value:0, prop_0},
const OBJ_2 = []; // {value:0, prop_0},  {value:0, prop_1}, {value:0, prop_0}, {value:0, prop_1},
const OBJ_3 = []; // {value:0, prop_0},  {value:0, prop_1}, {value:0, prop_2}, {value:0, prop_0},
const OBJ_4 = []; // {value:0, prop_0},  {value:0, prop_1}, {value:0, prop_2}, {value:0, prop_3},
const OBJ_5 = [];
const OBJ_6 = [];
const OBJ_7 = [];
const OBJ_10 = [];
const OBJ_100 = [];
const OBJ_1000 = [];
const OBJ_10000 = [];

for(let i=0; i<ARRAY_SIZE; i++) {
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

let sum = 0;
let time1 = benchmark('1');
while (time1.run()) {
  while(time1()) {
    for(let i=0; i< OBJ_1.length; i++) {
      sum += OBJ_1[i].value;
    }
  }
};

let time2 = benchmark('2');
while (time2.run()) {
  while(time2()) {
    for(let i=0; i< OBJ_2.length; i++) {
      sum += OBJ_2[i].value;
    }
  }
};

let time3 = benchmark('3');
while (time3.run()) {
  while(time3()) {
    for(let i=0; i< OBJ_3.length; i++) {
      sum += OBJ_3[i].value;
    }
  }
};

let time4 = benchmark('4');
while (time4.run()) {
  while(time4()) {
    for(let i=0; i< OBJ_4.length; i++) {
      sum += OBJ_4[i].value;
    }
  }
};

let time5 = benchmark('5');
while (time5.run()) {
  while(time5()) {
    for(let i=0; i< OBJ_5.length; i++) {
      sum += OBJ_5[i].value;
    }
  }
};

let time6 = benchmark('6');
while (time6.run()) {
  while(time6()) {
    for(let i=0; i< OBJ_6.length; i++) {
      sum += OBJ_6[i].value;
    }
  }
};

let time7 = benchmark('7');
while (time7.run()) {
  while(time7()) {
    for(let i=0; i< OBJ_7.length; i++) {
      sum += OBJ_7[i].value;
    }
  }
};

let time10 = benchmark('10');
while (time10.run()) {
  while(time10()) {
    for(let i=0; i< OBJ_10.length; i++) {
      sum += OBJ_10[i].value;
    }
  }
};

let time100 = benchmark('100');
while (time100.run()) {
  while(time100()) {
    for(let i=0; i< OBJ_100.length; i++) {
      sum += OBJ_100[i].value;
    }
  }
};

let time1000 = benchmark('1000');
while (time1000.run()) {
  while(time1000()) {
    for(let i=0; i< OBJ_1000.length; i++) {
      sum += OBJ_1000[i].value;
    }
  }
};

let time10000 = benchmark('10000');
while (time10000.run()) {
  while(time10000()) {
    for(let i=0; i< OBJ_10000.length; i++) {
      sum += OBJ_10000[i].value;
    }
  }
};

benchmark.report();

