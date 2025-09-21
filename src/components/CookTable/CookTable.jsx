import { useEffect, useState } from "react";
import Cooking from "../Cooking/Cooking";
import WantToCook from "../WantToCook/WantToCook";
import { toast } from "react-toastify";


const CookTable = ({ data, setData }) => {

    const [cooking, setCooking] = useState([]);
    const [wantToCook, setWantToCook] = useState(data);
    
    useEffect(() => {
        setWantToCook(data);
    }, [data])

    const handleCooking = (recipe) => {
        const newWant = [...wantToCook].filter(item => item.id !== recipe.id)
        setWantToCook(newWant);
        setData(newWant);
        setCooking([...cooking, recipe]);
        toast.success(`${recipe.recipe_name} is now Preparing!`);
    }

    return (
        <div className="w-[514px] flex flex-col gap-8 border border-[#28282833] rounded-2xl py-8">
            <WantToCook handleCooking={handleCooking} data={wantToCook} />
            <Cooking data={cooking} />
        </div>
    );
};

export default CookTable;