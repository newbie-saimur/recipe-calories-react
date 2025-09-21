import { useState } from "react";
import CookTable from "../CookTable/CookTable";
import Recipes from "../Recipes/Recipes";
import { toast } from 'react-toastify';

const RecipeContainer = () => {

    const [cookItems, setCookItems] = useState([]);

    const handleCookItems = (recipe) => {
        if(cookItems.find(item => recipe.id === item.id)) {
            toast.error("You have already added this recipe!");
        } else {
            setCookItems([...cookItems, recipe]);
            toast.success("Recipe added to the list!");
        }
    }

    return (
        <div>
            <h2 className="text-center text-[#150B2B] text-[40px] font-semibold mb-6">Our Recipes</h2>
            <p className="text-center text-[rgba(21,11,43,0.60)] max-w-[824px] mx-auto mb-12">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            <div className="flex justify-center gap-6">
                <Recipes handleCookItems={handleCookItems} />
                <CookTable data={cookItems} setData={setCookItems} />
            </div>
        </div>
    );
};

export default RecipeContainer;