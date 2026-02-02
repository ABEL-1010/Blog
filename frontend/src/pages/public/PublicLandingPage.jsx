import BlogListingPage from "../shared/BlogListingPage";
import HomePage from "../shared/HomePage.jsx"
import LatestBlogPage from "../shared/LatestBlogPage.jsx";

export default function PublicLandingPage() {
  return (
    <>
      <HomePage />
      <BlogListingPage />
      <LatestBlogPage />
    </>
  );
}