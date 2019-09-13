import {createBenchmark} from './benchmark';
const benchmark = createBenchmark('example2');

let value = 0;

let timeA = benchmark('A');
while(timeA()) {
  value = value === 0 ? 0 : 1;
}

let timeB = benchmark('B');
while(timeB()) {
  value = value === 0 ? 0 : 2;
}

let timeC = benchmark('C');
while(timeC()) {
  value = value === 0 ? 0 : 3;
}

let timeD = benchmark('D');
while(timeD()) {
  value = value === 0 ? 0 : 4;
}

benchmark.report();
