import sql from 'better-sqlite3';
import {IMeals} from "@/types";

const db = sql('meals.db');

const getMeals = async (): Promise<IMeals[]> => {
    return db.prepare<IMeals[]>('select * from meals').all() as IMeals[];
}

export {
    getMeals
}
