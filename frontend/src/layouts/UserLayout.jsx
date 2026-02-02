import { Outlet } from "react-router-dom";
import UserHeader from "../components/headers/UserHeader.jsx";

export default function UserLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <UserHeader />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}