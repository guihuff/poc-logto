import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";
import { SignIn } from "@/features/auth";
import { SignOut } from "@/features/auth";
import { UserInfoModal } from "@/features/auth";
import { logtoConfig } from "@/shared/lib/logto";

export const Auth = async () => {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <nav>
      {isAuthenticated ? (
        <div className="text-slate-900 flex items-center gap-2 justify-center flex-col">
          <p>Hello, {claims?.sub},</p>
          <UserInfoModal claims={claims} />
          <SignOut
            onSignOut={async () => {
              "use server";

              await signOut(logtoConfig);
            }}
          />
        </div>
      ) : (
        <div className="text-slate-900 flex items-center gap-2 justify-center flex-col">
          <SignIn
            onSignIn={async () => {
              "use server";

              await signIn(logtoConfig);
            }}
          />
        </div>
      )}
    </nav>
  );
};
