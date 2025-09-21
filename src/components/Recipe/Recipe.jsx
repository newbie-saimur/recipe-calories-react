import { AiOutlineFire } from "react-icons/ai";
import { TbClockHour3 } from "react-icons/tb";

const Recipe = ({ recipe, handleCookItems }) => {
    const {img, recipe_name, small_description, Ingredients, calories, preparation_time} = recipe;
    return (
        <div className="p-6 border border-[rgba(40,40,40,0.20)] rounded-2xl">
            <img className="rounded-2xl mb-6 h-[200px] w-full" src={img} alt={recipe_name} />
            <h2 className="mb-4 text-[#282828] text-xl font-semibold">{recipe_name}</h2>
            <p className="mb-4 text-[#878787] text-[16px] font-fira-sans leading-[30px]">{small_description}</p>
            <hr className="mb-6 text-[rgba(40,40,40,0.10)]" />
            <h3 className="mb-4 text-[#282828] text-[18px] font-medium">Ingredients: {Ingredients.length || 0}</h3>
            <ul className="list-disc list-inside pl-4 text-[#878787] text-[18px] font-fira-sans leading-9 mb-4">
            {
                Ingredients.slice(0, 3).map((ingredient, index) => <li key={index}>{ingredient}</li>)
            }
            </ul>
            <hr className="mb-6  text-[rgba(40,40,40,0.10)]" />
            <div className="mb-6 flex gap-6 items-center">
                <div className="flex items-center gap-2">
                    <TbClockHour3 className="text-[#282828CC] w-6 h-6" />
                    <p className="text-[#282828CC] font-fira-sans">{preparation_time} minutes</p>
                </div>
                <div className="flex items-center gap-2">
                    <AiOutlineFire className="text-[#282828CC] w-6 h-6" />
                    <p className="text-[#282828CC] font-fira-sans">{calories} calories</p>
                </div>
            </div>
            <button className="bg-[#0BE58A] border border-[#0BE58A] px-8 py-3 rounded-full text-[#150B2B] text-[18px] font-medium hover:bg-transparent hover:text-[#0BE58A] transition-colors duration-500 cursor-pointer" onClick={() => handleCookItems(recipe)}>Want to Cook</button>
        </div>
    );
};

export default Recipe;