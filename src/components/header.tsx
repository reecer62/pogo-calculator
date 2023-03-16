import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="pl-5 text-3xl font-bold">
        <h1>
          <Link href="/">POGO IV Calculator</Link>
        </h1>
      </div>
      <div className="ml-auto gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn"
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <img
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </label>
          ) : (
            <div className="btn-circle bg-white"></div>
          )}
        </div>
      </div>
    </div>
  );
};
