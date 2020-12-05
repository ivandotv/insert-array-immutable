**insert-array-immutable**

[Globals](../README.md) / "insertIntoArray"

# Module: "insertIntoArray"

## Index

### Functions

* [insertIntoArray](_insertintoarray_.md#insertintoarray)

## Functions

### insertIntoArray

▸ **insertIntoArray**\<T>(`source`: T[], `index`: number, `items`: any \| any[], `replaceAtIndex`: boolean): any[]

*Defined in [insertIntoArray.ts:11](https://github.com/ivandotv/insert-array-immutable/blob/ce32f64/src/insertIntoArray.ts#L11)*

Create and return a shallow copy of the original array with new items inserted at index.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`source` | T[] | - | array to be used as a source |
`index` | number | - | index at which to begin adding new items |
`items` | any \| any[] | - | single item or array of items to add |
`replaceAtIndex` | boolean | true | if true item at index will be replaced, if false item at index will be moved after the new items. |

**Returns:** any[]
