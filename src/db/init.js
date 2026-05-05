
import { seedData } from './seed_data'

const DB_KEY = 'app_local_db_786A';

export const getDB = () => JSON.parse(localStorage.getItem(DB_KEY));
export const saveDB = (data) => localStorage.setItem(DB_KEY, JSON.stringify(data));

// Initialize DB
export const initDB = () => {
  const DB = getDB()

  if (!DB) {
    saveDB(seedData)
  }else {
    if(DB.version !== seedData.version) {
      saveDB(seedData)
    }
  }
};