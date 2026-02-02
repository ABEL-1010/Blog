export default function LatestBlogCard({ blog }) {
  return (
    <div className="
      bg-white 
      rounded-xl 
      overflow-hidden 
      shadow-sm 
      transition-all 
      duration-300 
      hover:shadow-lg 
      hover:-translate-y-1
    ">
      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <span className="text-xs font-medium text-purple-600 uppercase">
          {blog.category}
        </span>

        <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-snug">
          {blog.title}
        </h3>

        <p className="mt-2 text-xs text-gray-500 line-clamp-3">
          {blog.description}
        </p>
      </div>
    </div>
  );
}
