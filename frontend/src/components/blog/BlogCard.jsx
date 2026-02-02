import BlogStatusBadge from "./BolgStatusBadge.jsx";
import { NavLink } from "react-router-dom";

export default function BlogCard({
  blog,
  variant = "default",
}) {
  if (!blog) return null;

  /* ---------------- Featured ---------------- */
  if (variant === "featured") {
    return (
      <article className="grid md:grid-cols-2 gap-6">
        <div className="h-64 bg-neutral-800 rounded-lg overflow-hidden">
          {blog.cover_image && (
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span>{blog.category?.name}</span>
            <span>•</span>
            <span>{blog.published_at}</span>
            <BlogStatusBadge status="featured" />
          </div>

          <h3 className="text-2xl font-bold text-white">
            {blog.title}
          </h3>

          <p className="text-neutral-400 line-clamp-3">
            {blog.excerpt}
          </p>

          <NavLink
            to={`/posts/${blog.slug}`}
            className="text-sm text-white hover:underline"
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
      <article className="flex gap-3">
        <div className="w-16 h-16 bg-neutral-800 rounded-md overflow-hidden">
          {blog.cover_image && (
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="space-y-1">
          <p className="text-xs text-neutral-400">
            {blog.category?.name} • {blog.published_at}
          </p>
          <h4 className="text-sm font-medium text-white line-clamp-2">
            {blog.title}
          </h4>
        </div>
      </article>
    );
  }

  /* ---------------- Default ---------------- */
  return (
    <article className="bg-neutral-900 rounded-lg overflow-hidden">
      <div className="h-48 bg-neutral-800">
        {blog.cover_image && (
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <span>{blog.category?.name}</span>
          <span>•</span>
          <span>{blog.published_at}</span>
          <BlogStatusBadge status={blog.status} />
        </div>

        <h3 className="text-lg font-semibold text-white line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-sm text-neutral-400 line-clamp-3">
          {blog.excerpt}
        </p>
      </div>
    </article>
  );
}
