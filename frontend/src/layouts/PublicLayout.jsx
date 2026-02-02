import { Outlet } from "react-router-dom";
import PublicHeader from "../components/headers/PublicHeader.jsx";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <PublicHeader />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
