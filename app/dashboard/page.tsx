import Button from "@/components/lib/Button";
import { createPost } from "@/actions/dashboard";
import { Suspense } from "react";
import PostList from "@/components/module/dashboard/PostList";
import Loader from "@/components/lib/Loader";
import { redirect } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { handleLogout } from "@/actions/login";
import { APP_ROUTES } from "@/constants";
import AdminPanel from "@/components/module/admin/AdminPanel";
import ClientPostList from "@/components/module/dashboard/ClientPostList";

const Dashboard = async () => {
  const { isAuthenticated, hasRole } = await useAuth();

  if (!isAuthenticated) {
    return redirect(APP_ROUTES.LOGIN);
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <Button onClick={handleLogout} className="float-right mr-4">
        Logout
      </Button>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4 w-3/4">
          <form action={createPost}>
            <input type="text" placeholder="Title" name="title" />
            <Button type="submit">Add Post</Button>
          </form>

          <Suspense fallback={<Loader />}>
            <PostList />
          </Suspense>
          <ClientPostList />
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          {/* [NEXT] [LEARN]: role based component rendering */}
          {hasRole("admin") && <AdminPanel />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
