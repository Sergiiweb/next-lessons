import {getMeals} from "@/services/db/db";
import FormComponent from "@/components/form-component/FormComponent";

const MealsPage = async () => {
    const meals = await getMeals();

    return (
        <div>
            <FormComponent/>
            {
                meals.map(meal => <div key={meal.id}>{meal.title}</div>)
            }
        </div>
    );
};

export default MealsPage;
