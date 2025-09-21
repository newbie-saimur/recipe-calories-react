import CookTable from "../CookTable/CookTable";
import Recipes from "../Recipes/Recipes";

const RecipeContainer = () => {
    return (
        <div>
            <Recipes />
            <CookTable />
        </div>
    );
};

export default RecipeContainer;