import { useNavigate } from "react-router-dom";
import { UserAuthForm } from "@components/UserAuthForm";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { SvgLogo } from "@components/svg/SvgLogo";

export const AuthenticationPage = () => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSignedIn && isLoaded) {
      return navigate("/");
    }
  }, [isSignedIn, isLoaded]);

  return (
    <>
      <div className="container relative grid min-h-[100svh] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative flex-col hidden h-full p-10 text-white bg-muted dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <SvgLogo className="w-6 h-6 mr-2" />
            Фильмотека
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;With this film library, I've discovered endless
                inspiration and streamlined my projects, delivering captivating
                content faster than ever.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Authenticate
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
};
