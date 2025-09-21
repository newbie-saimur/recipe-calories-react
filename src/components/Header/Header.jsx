const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-between p-0 mt-8 mb-12">
                <div>
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                    </div>
                    <a className="text-[32px] font-bold text-[#150B2B]">Recipe Calories</a>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex gap-8 px-1 text-[rgba(21,11,43,0.70)] text-base cursor-pointer">
                        <li className="hover:text-[#150B2B]"><a>Home</a></li>
                        <li className="hover:text-[#150B2B]"><a>Recipes</a></li>
                        <li className="hover:text-[#150B2B]"><a>About</a></li>
                        <li className="hover:text-[#150B2B]"><a>Search</a></li>
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
                    <label className="input w-[260px] focus-within:outline-0 focus-within:outline-offset-0 rounded-full bg-[rgba(21,11,43,0.05)] px-5 h-12 text-[rgba(21,11,43,0.70)] text-base">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="10"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                    <img src="profile_icon.png" alt="Profile image" />
                </div>
            </div>
        </div>
    );
};

export default Header;