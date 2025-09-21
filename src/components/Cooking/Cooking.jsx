const Cooking = ({ data }) => {

    const totalTime = data.reduce((current, item) => current + parseInt(item.preparation_time), 0);
    
    const totalCalories = data.reduce((current, item) => current + parseInt(item.calories), 0);

    return (
        <div>
            <h2 className="text-center text-[#282828] text-2xl font-semibold mb-4">Currently Cooking: {data.length}</h2>
            <hr className="w-[350px] text-[#28282826] mb-6 mx-auto"/>
            <table className="w-full table-fixed border-collapse text-left font-fira-sans">
                <thead>
                    <tr className="text-[#878787] font-medium">
                        <th className="pl-6 pr-2 pb-4 w-[16px]"></th>
                        <th className="w-[100px] pr-6 pb-4">Name</th>
                        <th className="w-[64px] pr-6 pb-4">Time</th>
                        <th className="w-[70px] pr-6 pb-4">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && data.map((item, index) => (<tr key={index} className="bg-[rgba(40,40,40,0.03)] text-[#282828B2] leading-[26px]">
                        <td className="pl-6 pr-2 py-4 text-[#282828CC] font-semibold">{index + 1}</td>
                        <td className="py-4 pr-6">{item.recipe_name}</td>
                        <td className="py-4 pr-6">{item.preparation_time} minutes</td>
                        <td className="py-4 pr-6">{item.calories} calories</td>
                    </tr>))}
                </tbody>
            </table>
            <div className="flex justify-end gap-5 text-[#282828CC] font-medium mr-4 mt-4">
                <div>
                    <p>Total Time = </p>
                    <p>{totalTime} minutes</p>
                </div>
                <div>
                    <p>Total Calories = </p>
                    <p>{totalCalories} calories</p>
                </div>
            </div>
        </div>
    );
};

export default Cooking;