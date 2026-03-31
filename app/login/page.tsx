import Button from "@/components/lib/Button";
import { handleLogin } from "@/actions/login";

const Login = async () => {
  return (
    <div>
      <h2>Login</h2>
      <form action={handleLogin}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
