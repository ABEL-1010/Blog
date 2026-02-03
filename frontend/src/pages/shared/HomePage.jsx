import ideas from "../../assets/Homepage_ideas.png"
import right from "../../assets/right_side.png"
const HomePage = () => {
  return (
    
    
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 relative">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full mx-auto">

        {/* LEFT: LARGE IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={ideas}
            alt="Illustration"
            className="w-full max-w-md md:max-w-lg object-contain rounded-full"
          />
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="text-center text-black hover:text-purple-700">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            GET INFORMED
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mt-2">
            GET INSPIRED
          </h1>

          {/* underline */}
          <div className="w-68 h-1 bg-purple-700 my-6 justify-center mx-20"></div>

          <p className="text-gray-700 text-lg md:text-xl max-w-xl">
            Stories Curated For You
          </p>

          <button className="mt-6 bg-purple-700 hover:bg-purple-800 transition text-white px-10 py-3 rounded-md font-semibold text-lg">
            Sign up
          </button>
        </div>

      </div>


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
