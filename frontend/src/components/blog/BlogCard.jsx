import BlogStatusBadge from "./BolgStatusBadge.jsx";
import { NavLink } from "react-router-dom";

export default function BlogCard({ blog, variant = "default" }) {
  if (!blog) return null;

  /* ---------------- Featured ---------------- */
  if (variant === "featured") {
    return (
      <article className="grid md:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden">
        <div className="h-64 overflow-hidden rounded-lg">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="flex flex-col justify-center space-y-4 p-4">
          <div className="flex items-center gap-3 text-xs text-black">
            <span>{blog.category?.name}</span>
            <span>•</span>
            <span>{blog.published_at}</span>
            <BlogStatusBadge status="featured" />
          </div>

          <h3 className="text-2xl font-bold text-black">{blog.title}</h3>

          <p className="text-black line-clamp-3">{blog.content}</p>

          <NavLink
            to={`/posts/${blog.slug}`}
            className="text-sm text-purple-600 hover:underline"
          >
            Continue reading →
          </NavLink>
        </div>
      </article>
    );
  }

  /* ---------------- Compact ---------------- */
  if (variant === "compact") {
    return (
      <article className="flex gap-3 items-center">
        <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
          {blog.cover_image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="space-y-1">
          <p className="text-xs text-black">
            {blog.category?.name} • {blog.published_at}
          </p>
          <h4 className="text-sm font-medium text-black line-clamp-2">
            {blog.title}
          </h4>
        </div>
      </article>
    );
  }

  /* ---------------- Default Horizontal Card ---------------- */
  return (
    <article className="flex bg-white rounded-lg overflow-hidden hover:shadow-lg ">
      {/* Left: Image */}
      <div className="w-1/3 h-48 overflow-hidden">
        {blog.cover_image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Right: Content */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
            <span>{blog.category?.name}</span>
            <span>•</span>
            <span>{blog.published_at}</span>
            <BlogStatusBadge status={blog.status} />
          </div>

          <h3 className="text-lg font-semibold text-black line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-sm text-neutral-700 line-clamp-3 mt-1">
            {blog.content}
          </p>
        </div>

        <NavLink
          to={`/posts/${blog.slug}`}
          className="text-sm text-purple-600 hover:underline mt-2"
        >
          Continue reading →
        </NavLink>
      </div>
    </article>
  );
}
