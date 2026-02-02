import LatestBlogCard from "../../components/blog/LatestBlogCard";

const blogs = [
  {
    id: 1,
    category: "Technology",
    title: "Harnessing the Future of Remote Work",
    description:
      "Explore how emerging technologies are reshaping remote work and digital collaboration.",
    image: "https://source.unsplash.com/400x250/?technology",
  },
  {
    id: 2,
    category: "Design",
    title: "UI Trends That Will Dominate 2026",
    description:
      "A deep dive into the most impactful UI/UX trends designers should watch.",
    image: "https://source.unsplash.com/400x250/?design",
  },
  {
    id: 3,
    category: "AI",
    title: "How AI Is Transforming Content Creation",
    description:
      "From writing to design, see how AI is changing the creative industry.",
    image: "https://source.unsplash.com/400x250/?artificial-intelligence",
  },
];

export default function LatestBlogPage() {
  return (
    <section className="bg-white py-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 px-14 py-3">
          Latest Blogs & News
        </h2>
        <button className="text-sm text-purple-600 hover:underline p-4">
          View All
        </button>
      </div>

      {/* Blog Grid → 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-14">
        {blogs.map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
