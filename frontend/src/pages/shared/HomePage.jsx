
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 relative">
      <div className="text-black text-4xl hover:text-purple-700 md:text-6xl font-extrabold">
        <h1 className=" tracking-wide">
        GET INFORMED
        </h1>
        <h1 className="tracking-wide mt-2">
        GET INSPIRED
        </h1>
       </div> 
      {/* underline */}
      <div className="w-64 h-1 bg-purple-700 my-6"></div>
      <p className="text-gray-700 text-lg md:text-xl max-w-xl">
        Stories Curated For You
      </p>
      <button className="mt-6 bg-purple-700 hover:bg-purple-700 transition text-white px-10 py-3 rounded-md font-semibold text-lg">
        Sign up
      </button>

      {/* Categories */}

      <h3 className="m-2 hover:text-purple-700 transition text-purple-200 px-3 py-3 font-semibold text-lg">
        POPULAR CATEGORIES
      </h3>
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-600 text-sm tracking-wide">
        <span className="hover:text-black cursor-pointer">NEWS</span>
        <span className="hover:text-black cursor-pointer">ENTERTAINMENT</span>
        <span className="hover:text-black cursor-pointer">TECHNOLOGY</span>
        <span className="hover:text-black cursor-pointer">TRAVEL</span>
        <span className="hover:text-black cursor-pointer">FOOD</span>
        <span className="hover:text-black cursor-pointer">SPORTS</span>
        <span className="hover:text-black cursor-pointer">FASHION</span>
        <span className="hover:text-black cursor-pointer">BOOKS</span>
        <span className="hover:text-black cursor-pointer">HUMOR</span>
        <span className="hover:text-black cursor-pointer">PHILOSOPHY</span>
      </div>

    </div>
  );
};

export default HomePage;
