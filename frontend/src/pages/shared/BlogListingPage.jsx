import { useEffect, useState } from "react";
import BlogCard from "../../components/blog/BlogCard";
import api from "../../api/axios";

export default function BlogListingPage() {

  const [blogs, setBlogs] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/posts").then((res) => {
        console.log(res.data);
      setBlogs(res.data.data ?? []);
      setFeatured(res.data.data?.find((b) => b.is_featured) ?? null);
    })
    .finally(() => setLoading(false));
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    if (activeTab === "trending") return blog.is_trending;
    if (activeTab === "latest") return blog.is_latest;
    if (activeTab === "news") return blog.is_news;
    return true;
  });

  return (
    <main className="bg-white text-black">

      {/* Hero */}
      <section className="border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-extrabold">
            Trending Blogs
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Explore thoughtful writing from our community.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-xl font-semibold mb-6">
            Featured Article
          </h2>
          <BlogCard blog={featured} variant="featured" />
        </section>
      )}

      {/* Tabs + Grid */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex gap-4 mb-8">
          {["all", "trending", "latest", "news"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm px-4 py-1 rounded-full border
                ${
                  activeTab === tab
                    ? "border-white"
                    : "border-neutral-700 text-neutral-800"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-neutral-800">Loading posts...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </section>

      {/* Sidebar */}
      <section className="max-w-7xl mx-auto px-4 py-14 border-t border-neutral-100">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {blogs.slice(0, 4).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          <aside className="space-y-4">
            <h3 className="text-lg font-semibold">Recent Posts</h3>
            {blogs.slice(0, 4).map((blog) => (
              <BlogCard key={blog.id} blog={blog} variant="compact" />
            ))}
          </aside>
        </div>
      </section>
    </main>
  );
}
