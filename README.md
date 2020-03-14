# Insert Items Immutable

[![CircleCI](https://img.shields.io/circleci/build/github/ivandotv/insert-array-immutable/master)](https://circleci.com/gh/ivandotv/insert-array-immutable)
[![Codecov](https://img.shields.io/codecov/c/github/ivandotv/insert-array-immutable)](https://codecov.io/gh/ivandotv/insert-array-immutable)
![GitHub](https://img.shields.io/github/license/ivandotv/insert-array-immutable)

## Why You Might Need This

When working with redux you need to use [immutable update patterns](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/).

So when you need to insert a specific item or items into an array at a specific index...

Instead of this (or something like this):

```js
case 'SOME_ACTION':
   return {
       ...state,
       myArray: [
          ...state.myArray.slice(0,index),
          {name:'Jack'},
         ...state.myArray.slice(index+1)
         ]
    }
```

you can do this:

```js
case 'SOME_ACTION':
   return {
       ...state,
       myArray: insertIntoArray(myArray,index,{name:'Jack'})
    }
```

As you can see it's just a simple function to insert items into an array and return a new (shallow) copy of the array with the new items.

You can choose to **replace** the item at `index` or you can just **move** the old item to the right of the new items (`index+1`).

**Or you can just star using [immer](https://github.com/immerjs/immer) for all your immutable needs.**
## Installation and Usage

```bash
npm install insert-items-immutable
```

```js
const insertIntoArray = require('insert-items-immutable')
//or
import { insertIntoArray } from 'insert-items-immutable'

const original = [1, 2, 3, 4]

// insert char 'A' at index 2 (replacing the 3)
insertIntoArray(original, 2, 'A')
//[1, 2, 'A', 4]

// insert multiple items starting at index 2
insertIntoArray(original, 2, ['A', 'B', 'C'])
//[1, 2, 'A', 'B', 'C', 4]

// insert at index 2 but DON'T  replace index element
insertIntoArray(original, 2, 'A', false)
//[1, 2, 'A', 3, 4]

// insert multiple items at index 2 but DON'T replace index element
insertIntoArray(original, 2, ['A', 'B', 'C'], false)
//[1, 2, 'A', 'B', 'C', 3, 4]
```

ES5 compatible.

### API docs

`insert-items-immutable` is written in TypeScript, [auto generated API docs](/docs/api/modules/_index_.md) are available.

#### Author

- **Ivan Vlatković**

##### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
