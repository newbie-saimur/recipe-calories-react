import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleCookItems }) => {

    const [recipes, setRecipes] = useState([]);

    useEffect( () => {
        fetch("recipes.json")
        .then(response => response.json())
        .then(data => setRecipes(data))
    }, []);

    return (
        <div className="w-[782px] grid grid-cols-2 gap-6">
            {
                recipes.map((recipe, index) => <Recipe handleCookItems={handleCookItems} key={index} recipe={recipe} />)
            }
        </div>
    );
};

export default Recipes;