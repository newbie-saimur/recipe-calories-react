const Hero = () => {
    return (
        <div className="bg-[linear-gradient(0deg,rgba(21,11,43,0.90)_0%,rgba(21,11,43,0.00)_100%),url(https://i.postimg.cc/QN7p7CnB/hero-banner.jpg)] bg-no-repeat bg-cover bg-center rounded-3xl py-32 text-center mb-24">
            <h1 className="text-[52px] text-white font-bold max-w-[897px] mx-auto mb-6 leading-[76px]">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-white text-[18px] max-w-[932px] mx-auto leading-[30px] mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex justify-center gap-6">
                <button className="text-[#150B2B] font-semibold text-xl py-4 px-8 bg-[#0BE58A] rounded-full cursor-pointer border border-[#0BE58A] hover:bg-transparent hover:text-[#0BE58A]">Explore Now</button>
                <button className="text-white font-semibold text-xl py-4 px-8 rounded-full border border-white cursor-pointer hover:text-[#150B2B] hover:bg-[#ffffff]">Our Feedback</button>
            </div>
        </div>
    );
};

export default Hero;