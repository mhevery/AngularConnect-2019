# Angular Connect 2019

```
nvm install v12
nvm use v12
node --v8-options
npm install
npm run watch
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
node ./dist/example2.js 100000 1
node ./dist/example2.js 100000 30
```


## `example3.js`

Demonstrates inline-caching. [ip-processor](./v8/tools/ic-explorer.html)

```
node ./dist/example3.js
rm *.log; node --trace-ic ./dist/example3.js 10 10
```

```
rm *.log; node --prof ./dist/example3.js; ./v8/tools/mac-tick-processor *.log 
rm *.log; node --prof ./dist/example3.js; ./v8/tools/mac-tick-processor --preprocess *.log > v8.json
```