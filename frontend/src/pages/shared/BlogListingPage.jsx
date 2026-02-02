import { useEffect, useState } from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";
import BlogCard from "../../components/blog/BlogCard";
import api from "../../api/axios";
import profile from "../../assets/pro.jpg"
import photo from"../../assets/aa (1).png"
import pic from"../../assets/aa (2).png"
import image from"../../assets/aa (3).png"

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);
  const galleryImages = [
  photo,
  pic,
  image,
  profile,
  photo,
  pic,
  image,
  profile,
];

  useEffect(() => {
    api.get("/posts")
      .then((res) => {
        console.log(res.data);
        const posts = res.data ?? [];
        setBlogs(posts);
        setFeatured(posts.find((b) => b.is_featured) ?? null);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="bg-gradient-to-r from-purple-50 to-orange-50 text-black">

      {/* Hero */}
      <section className="border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-extrabold">Trending Blogs</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto mt-2">
            Explore thoughtful writing from our community.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-14 py-14 grid lg:grid-cols-3 gap-6">
        
        {/* Left Column: Blogs */}
        <div className="lg:col-span-2 space-y-4">
          {loading ? (
            <p className="text-neutral-800">Loading posts...</p>
          ) : (
            <div className="flex flex-col gap-4">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Sidebar */}
        <aside className="space-y-6">

          {/* Profile Card */}
          <div className="bg-white shadow-md rounded-xl p-4 text-center space-y-2">
            <img
              src={ profile } 
              alt="Profile"
              className="w-20 h-20 mx-auto rounded-full object-cover"
            />
            <h3 className="text-l font-semibold">Abel Teka</h3>
            <p className="text-sm text-neutral-500">Full Stack Developer</p>
            <p className="text-neutral-600 text-sm">
              Passionate about building responsive web apps and creating seamless user experiences.
            </p>
            <button className="bg-purple-600 text-white px-2 py-2 rounded-full hover:bg-purple-700">
              Contact Me
            </button>
            <div className="flex justify-center gap-4 mt-3 text-neutral-600">
              <Twitter className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-blue-700 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-md">
            <h3 className="mt-8 p-3 text-lg font-semibold">Recent Articles</h3>
            {blogs.slice(0, 4).map((blog) => (
                <BlogCard key={blog.id} blog={blog} variant="compact" />
              
            ))}
          </div>

        
          {/* Gallery */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Gallery</h3>

          {/* Row 1 – 2 images */}
          <div className="grid grid-cols-2 gap-2">
            {galleryImages.slice(0, 2).map((img, idx) => (
              <div key={idx} className="h-40 overflow-hidden rounded-md">
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 2 – 3 images */}
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.slice(2, 5).map((img, idx) => (
              <div key={idx} className="h-32 overflow-hidden rounded-md">
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 3 – 3 images */}
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.slice(5, 8).map((img, idx) => (
              <div key={idx} className="h-32 overflow-hidden rounded-md">
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        </aside>
        
      </section>
    </main>
  );
}
