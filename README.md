# rollup-plugin-sizediff

*Displays the [rollup](https://rollupjs.org) bundle size diff*

## Usage

```js
// rollup.config.js
import sizeDiff from 'rollup-plugin-sizediff';

export default {
    input: './index.js',
    output: {
        file: `./build/index.js`,
    },
    plugins: [
        // ... rollup plugins
        sizeDiff()
    ],
};
```

Output:

```diff
./index.js → ./build/index.js...   |
12.345 kB (+1.543 kB)              ] ← plugin output
created ./build/index.js in 497ms  |
```

The diff part in the parentheses will become available from the second run on, when the plugin picks its own record of the previous bundle size.

## Options

```js
sizeDiff({
    output: string, // bundle stats file location
})
```

## Installation

```
npm i -D github:axtk/rollup-plugin-sizediff
```
