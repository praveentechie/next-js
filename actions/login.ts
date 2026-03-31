import useAuth from '@/hooks/useAuth';
import { redirect } from 'next/navigation';

export async function handleLogin(formData: FormData) {
  "use server";
  const { loginUser } = await useAuth();

  const username = formData.get("username");
  if (!username) {
    return;
  }
  await loginUser(username as string);

  return redirect("/dashboard");
}

export async function handleLogout() {
  "use server";

  const { logoutUser } = await useAuth();
  await logoutUser();
  return redirect("/login");
}