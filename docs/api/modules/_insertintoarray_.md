[insert-array-immutable](../README.md) › ["insertIntoArray"](_insertintoarray_.md)

# External module: "insertIntoArray"

## Index

### Functions

* [insertIntoArray](_insertintoarray_.md#insertintoarray)

## Functions

###  insertIntoArray

▸ **insertIntoArray**<**T**>(`source`: T[], `index`: number, `items`: any | any[], `replaceAtIndex`: boolean): *any[]*

Defined in insertIntoArray.ts:11

Create and return a shallow copy of the original array with new items inserted at index.

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`source` | T[] | - | array to be used as a source |
`index` | number | - | index at which to begin adding new items |
`items` | any &#124; any[] | - | single item or array of items to add |
`replaceAtIndex` | boolean | true | if true item at index will be replaced. If false item at index will be moved after new item or items. |

**Returns:** *any[]*

into array new array
