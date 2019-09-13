# Angular Connect 2019

[install v8 to get `d8`](install https://github.com/GoogleChromeLabs/jsvu#readme)
```
nvm install v12
nvm use v12
npm install -g jsvu
jsvu v8
npm -l ~/.jsvu/v8 ~/.jsvu/d8
export D8_PATH=~/.jsvu
```

to install and compile the repository
```
npm install
npm run watch
```

to get a list of `d8` options
```
node --v8-options
```

## `example1.js`

Demonstrates inlining.
```
node ./dist/example1.js 10
node ./dist/example1.js 100
node ./dist/example1.js 1000
node ./dist/example1.js 10000
node ./dist/example1.js 100000
node --trace-turbo-inlining ./dist/example1.js 10000
node --trace-opt --trace-deopt ./dist/example1.js 10000
```


## `example2.js`

Demonstrates stable numbers.
```
node ./dist/example2.js
```


## `example3.js`

Demonstrates inline-caching. [ip-processor](./v8/tools/ic-explorer.html)

```
node ./dist/example3.js
rm *.log; node --trace-ic ./dist/example3.js 10 10
```

Demonstrates profiling. [profview](./v8/tools/profview/index.html)

```
rm *.log; node --prof --log-source-code ./dist/example3.js; ./v8/tools/mac-tick-processor *.log 
rm *.log; node --prof --log-source-code ./dist/example3.js; ./v8/tools/mac-tick-processor --preprocess *.log > v8.json
rm *.log; node --prof --no-turbo-inlining --log-source-code ./dist/example3.js; ./v8/tools/mac-tick-processor --preprocess *.log > v8.json
rm *.log; node --prof --no-turbo-inlining ./dist/example3.js; node --prof-process *.log 
```