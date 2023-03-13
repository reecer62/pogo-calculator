import { signIn, signOut, useSession } from "next-auth/react";

export const Login = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="card w-8/12 max-w-2xl bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-center">
          <button
            className="btn-primary btn min-w-full"
            onClick={() => signIn("discord")}
          >
            Sign in with Discord
          </button>
        </div>
        <div className="card-actions justify-center">
          <button className="btn-disabled btn-primary btn min-w-full">
            Sign in with Google
          </button>
        </div>
        <div className="card-actions justify-center">
          <button
            className="btn-primary btn min-w-full"
            onClick={() =>
              console.log("TODO: go to IV list page and use localStorage API")
            }
          >
            Continue as guest
          </button>
        </div>
      </div>
    </div>
  );
};
