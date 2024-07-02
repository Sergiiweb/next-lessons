import {getMeals} from "@/services/db/db";

const MealsPage = async () => {
    const meals = await getMeals();

    return (
        <div>
            {
                meals.map(meal => <div key={meal.id}>{meal.title}</div>)
            }
        </div>
    );
};

export default MealsPage;
