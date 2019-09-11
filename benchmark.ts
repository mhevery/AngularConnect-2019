import {performance} from 'perf_hooks';

export interface Benchmark {
  (versionName: string): Profile;
  report(fn?: (report: string) => void): void;
}
export interface Profile {
  (): boolean;
  profileName: string;
  run(): boolean;
  bestTime: number;
}

export function createBenchmark(benchmarkName: string, iterationCount: number, runs:number = 50): Benchmark  {
  const profiles: Profile[] = [];

  const benchmark = function Benchmark(profileName: string): Profile {
    let iterationCounter: number = iterationCount;
    const profile: Profile = function Profile() {
      if (iterationCounter === 0) {
        iterationCounter = iterationCount;
        return false;
      } else {
        iterationCounter--;
        return true;
      }
    } as Profile;
    let lastTimestamp = 0;
    let runCount = runs;
    profile.run = function() {
      const now = performance.now();
      if (lastTimestamp !== 0) {
        const time = now - lastTimestamp;
        profile.bestTime = Math.min(profile.bestTime, time);
      }
      lastTimestamp = now;
      if (runCount === 0) {
        runCount = runs;
        return false;
      } else {
        runCount--;
        return true;
      }
    }
    profile.profileName = profileName;
    profile.bestTime = Number.MAX_SAFE_INTEGER;
    profiles.push(profile);
    return profile;
  } as Benchmark;

  benchmark.report = function(fn?: (report: string) => void) {
    const fastest = profiles.reduce((previous: Profile, current: Profile) => {
      return (previous.bestTime < current.bestTime) ? previous : current;
    });
    (fn || console.log)(`Benchmark: ${benchmarkName}\n${profiles.map((profile: Profile) => {
      const time = (profile.bestTime / iterationCount * 1000).toFixed(3);
      const percent = (100 - profile.bestTime / fastest.bestTime * 100).toFixed(0);
      return `  ${profile.profileName}: ${time} us (${percent}%)`;
    }).join('\n')}`);
  }
  return benchmark;
}
