import BlogListingPage from "../shared/BlogListingPage";
import UserHomePage from "./UserHomePage"


export default function UserLandingPage() {
  return (
    <>
      <UserHomePage />
      <BlogListingPage />
    </>
  );
}