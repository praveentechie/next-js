import { APP_ROUTES } from "@/constants";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const Admin = async () => {
  const { hasRole } = await useAuth();
  /* [NEXT] [LEARN]: role based route protection */
  if (!hasRole("admin")) {
    return redirect(APP_ROUTES.DASHBOARD);
  }

  return (
    <div>
      <h2>Admin</h2>
    </div>
  );
};

export default Admin;
