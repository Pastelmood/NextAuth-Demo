import LoginForm from "@/components/login-form";
import LogOutForm from "@/components/logout-form";
import SessionInfo from "@/components/session-info";
import { auth } from "@/libs/auth";

export default async function HomePage() {
  const session = await auth();
  console.log("Session:", session);

  const user = session?.user || {};
  const { name, email, image, role, userId } = user;

  return (
    <div className="flex flex-col items-center min-h-screen pt-28">
      <div className="flex flex-col max-w-5xl w-full px-4 py-3 gap-5">
        <div className="flex gap-3 flex-wrap">
          {session ? <LogOutForm /> : <LoginForm />}

          <SessionInfo
            name={name}
            email={email}
            image={image}
            role={role}
            userId={userId}
          />
        </div>
      </div>
    </div>
  );
}
