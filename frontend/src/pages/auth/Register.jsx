import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios"; 
import { register } from "../../api/auth.api";


export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const response = await register(formData); // ✅ get the returned data

    console.log("Registration success:", response);

    // Save token & user in localStorage
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    // Redirect to home page or dashboard
    navigate("/user");
  } catch (err) {
    console.error(err);
    if (err.response?.data?.message) {
      setError(err.response.data.message);
    } else if (err.response?.data?.errors) {
      // Laravel validation errors
      setError(
        Object.values(err.response.data.errors)
          .flat()
          .join(" ")
      );
    } else {
      setError("Registration failed. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      {/* Header */}
    

      {/* Registration Form */}
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-700 text-white py-2 rounded transition disabled:opacity-50"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-neutral-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-700 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
