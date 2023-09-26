
import { getDB, postDB, pushDB, removeDB } from './node.mjs'

await postDB()

console.log('\nactual =', await getDB())