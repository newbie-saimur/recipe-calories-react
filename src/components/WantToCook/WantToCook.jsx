const WantToCook = ({ data, handleCooking }) => {
    return (
        <div>
            <h2 className="text-center text-[#282828] text-2xl font-semibold mb-4">Want to cook: {data.length}</h2>
            <hr className="w-[350px] text-[#28282826] mb-6 mx-auto"/>
            {(data.length > 0 && (<table className="w-full table-fixed border-collapse text-left font-fira-sans">
                <thead>
                    <tr className="text-[#878787] font-medium">
                        <th className="pl-6 pb-4 pr-5 w-[24px]"></th>
                        <th className="w-[116px] pr-5 pb-4">Name</th>
                        <th className="w-[64px] pr-5 pb-4">Time</th>
                        <th className="w-[62px] pr-5 pb-4">Calories</th>
                        <th className="w-[107px] pb-4 pr-6"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index) => (
                    <tr key={index} className="bg-[rgba(40,40,40,0.03)] text-[#282828B2] leading-[26px]">
                        <td className="pl-6 py-4 pr-5 text-[#282828CC] font-semibold">{index + 1}</td>
                        <td className="py-4 pr-5">{item.recipe_name}</td>
                        <td className="py-4 pr-5">{item.preparation_time} minutes</td>
                        <td className="py-4 pr-5">{item.calories} calories</td>
                        <td className="py-4 pr-6">
                            <button className="text-[#150B2B] font-medium px-5 py-2 bg-[#0BE58A] rounded-full border border-[#0BE58A] hover:text-[#0BE58A] hover:bg-transparent duration-500 cursor-pointer" onClick={() => handleCooking(item)}>Preparing</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>))}
        </div>
    );
};

export default WantToCook;