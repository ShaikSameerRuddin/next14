import Link from "next/link";

// Define the props interface
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <main>
      Login <Link href="/">back</Link>
    </main>
  );
};

export default Login;
