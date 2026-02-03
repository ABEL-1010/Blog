export default function UserHomePage() {

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 relative">
            <h1 className="text-black text-4xl md:text-6xl font-extrabold tracking-wide">
             GET INFORMED
            </h1>
            <h1 className="text-black text-4xl md:text-6xl font-extrabold tracking-wide mt-2">
                GET INSPIRED
            </h1>
            <div className="w-64 h-1 bg-purple-700 my-6"></div>
            <p className="text-gray-700 text-lg md:text-xl max-w-xl">
                Stories Curated For You
            </p>
            <button className="mt-6 bg-purple-700 hover:bg-purple-700 transition text-white px-10 py-3 rounded-md font-semibold text-lg">
                Write
            </button>
        </div>
    )
}