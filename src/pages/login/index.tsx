import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  LoginChatUserArg,
  loginChat,
} from "@/src/services/chat/chat.http.service";
import Toast from "@/src/components/ui/toast/Toast";
import { ELoginStatus } from "./login.i";
import { ToastMessage } from "@/src/components/ui/interface/component-ui.i";
import { EToastStatus } from "@/src/constants";

const Login = () => {
  /**
   * Session for user authenicate, form next auth
   */
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [loginMethod, setLoginMethod] = useState("google");

  //handle toast
  const [displayToast, setDisplayToast] = useState(false);
  const [displayToastMessage, setDisplayToastMessage] = useState<ToastMessage>({
    message: ELoginStatus.FAILURE,
    status: EToastStatus.ERROR,
  });
  const handleToastLogin = () => {
    if (status == "authenticated") {
      const message: ToastMessage = {
        message: ELoginStatus.SUCCESS,
        status: EToastStatus.OK,
      };
      setDisplayToastMessage(message);
    } else {
      const message: ToastMessage = {
        message: ELoginStatus.FAILURE,
        status: EToastStatus.ERROR,
      };
      setDisplayToastMessage(message);
    }
    setDisplayToast(true);
  };
  const handleCloseToast = () => {
    setDisplayToast(false);
  };

  if (status == "authenticated") {
    const chatUser: LoginChatUserArg = {
      username: session.user?.email || userInfo.email,
      secret: loginMethod == "credentials" ? userInfo.password : "google",
    };
    loginChat(chatUser);
    router.push("/");
  }

  const handleSiginWithCredential: React.MouseEventHandler<
    HTMLButtonElement
  > = async (e) => {
    e.preventDefault();

    await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    }).then(() => {
      handleToastLogin();
    });
  };

  const handleSigninWithGoogle = () => {
    signIn("google").then((res) => {
      const chatUser: LoginChatUserArg = {
        username: userInfo.email,
        secret: "google",
      };
      loginChat(chatUser).then(() => {
        handleToastLogin();
      });
    });
  };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image src={logo} alt="" className="h-12 w-auto mr-2" />
            TeamWale
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, email: target.value })
                    }
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, password: target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  onClick={(e) => {
                    setLoginMethod("credentials");
                    handleSiginWithCredential(e);
                  }}
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 w-full justify-center"
                  onClick={() => {
                    setLoginMethod("google");
                    handleSigninWithGoogle();
                  }}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign in with Google
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {displayToast && (
        <Toast
          dataPost={displayToastMessage}
          onClose={handleCloseToast}
        ></Toast>
      )}
    </div>
  );
};

export default Login;
