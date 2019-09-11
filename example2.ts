import {createBenchmark} from './benchmark';
const COUNT = Number.parseInt(process.argv[2] || "10");
const SAMPLES = Number.parseInt(process.argv[3] || "30");
console.log(`Running ${SAMPLES} samples with ${COUNT} iterations each.`);
const benchmark = createBenchmark('example2', COUNT, SAMPLES);

let value = 0;
let timeA = benchmark('A');
while (timeA.run()) {
  while(timeA()) {
    value = value === 0 ? 0 : 1;
  }
}

let timeB = benchmark('B');
while (timeB.run()) {
  while(timeB()) {
    value = value === 0 ? 0 : 2;
  }
}

let timeC = benchmark('C');
while (timeC.run()) {
  while(timeC()) {
    value = value === 0 ? 0 : 3;
  }
}

let timeD = benchmark('D');
while (timeD.run()) {
  while(timeD()) {
    value = value === 0 ? 0 : 4;
  }
}

benchmark.report();
