import Dexie from 'dexie';

const db = new Dexie('TODOs');
db.version(1).stores({ todos: '++id, _id' });

export default db;