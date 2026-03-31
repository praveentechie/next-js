import { cookies } from 'next/headers';
export const COOKIES = {
  SESSION: 'session',
};

const useAuth = async () => {
  /* [NEXT] [LEARN]: read & write cookies */
  const cookieStore = await cookies();
  const session = JSON.parse(cookieStore.get(COOKIES.SESSION)?.value || '{}');
  return {
    isAuthenticated: Boolean(session.username),
    userInfo: session,
    hasRole: (role: string) => session.role === role,
    loginUser: async (username: string) => {
      const userInfo = {
        username,
        role: 'admin' === username ? 'admin' : 'user',
      };
      cookieStore.set(COOKIES.SESSION, JSON.stringify(userInfo));
    },
    logoutUser: () => {
      cookieStore.delete(COOKIES.SESSION);
    },
  };
}

export default useAuth;
