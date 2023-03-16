import { signIn } from "next-auth/react";
import Image from "next/image";

export const Login = () => {
  return (
    <div className="card w-8/12 max-w-sm bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions flex justify-center">
          <div className="flex w-full">
            <button
              className="discord-btn btn-primary btn min-w-full items-center justify-center"
              onClick={() => void signIn("discord")}
            >
              <Image
                src="/discord-dark.svg"
                alt="Picture of discord icon"
                width={24}
                height={24}
              />
              <span>Sign in with Discord</span>
            </button>
          </div>
        </div>
        <div className="card-actions flex justify-center">
          <div className="flex w-full">
            <button className="btn-disabled btn-primary btn min-w-full">
              <Image
                src="/icons8-google.svg"
                alt="Picture of google icon"
                width={24}
                height={24}
              />
              <span>Sign in with Google</span>
            </button>
          </div>
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
