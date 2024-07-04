'use server'
import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

import {IMeals} from "@/types";

const db = sql('meals.db');

const getMeals = async (): Promise<IMeals[]> => {
    return db.prepare<IMeals[]>('select * from meals').all() as IMeals[];
}

const addMeal = async (formData: FormData):Promise<void> => {
    db
        .prepare(`INSERT INTO meals(slug, title, image, summary, instructions, creator, creator_email)
                  values (?, ?, ?, ?, ?, ?, ?)`)
        .run(
            formData.get('slug'),
            formData.get('title'),
            formData.get('image'),
            formData.get('summary'),
            formData.get('instructions'),
            formData.get('creator'),
            formData.get('creator_email')
        );
    revalidatePath('/meals');
}

export {
    getMeals,
    addMeal
}
