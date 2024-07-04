import {FC} from "react";

import {addMeal} from "@/services/db/db";

const FormComponent: FC = () => {
    return (
        <form action={addMeal} className={"w-2/6 m-10 flex flex-col align-middle justify-center text-black b-1"}>
            <input className={"m-1"} type="text" name={'title'} placeholder={'title'}/>
            <input className={"m-1"} type="text" name={'creator'} placeholder={'creator'}/>
            <input className={"m-1"} type="text" name={'image'} placeholder={'image'}/>
            <input className={"m-1"} type="text" name={'slug'} placeholder={'slug'}/>
            <input className={"m-1"} type="text" name={'summary'} placeholder={'summary'}/>
            <input className={"m-1"} type="text" name={'instructions'} placeholder={'instructions'}/>
            <input className={"m-1"} type="text" name={'creator_email'} placeholder={'creator_email'}/>
            <button className={"bg-sky-200 text-black"}>save meal</button>
        </form>
    );
};

export default FormComponent;
