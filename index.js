
import { getDB, postDB, pushDB, removeDB } from './node.mjs'

console.log('\npostDB =', await postDB('', { "a": 5, "e": 6 }))
// console.log('\npushDB =', await pushDB('key', { b: 21 } ))
// await removeDB('key')

console.log('DB =', await getDB( '' ))