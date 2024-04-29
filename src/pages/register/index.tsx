import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import {
  RegisterArgs,
  register,
} from "@/src/services/authentication/credentialAuth.services";
import { useRouter } from "next/router";
import {
  CreateChatUserArg,
  createChatUser,
} from "@/src/services/chat/chat.http.service";
import { EToastStatus } from "@/src/constants";
import { ToastMessage } from "@/src/components/ui/interface/component-ui.i";
import Toast from "@/src/components/ui/toast/Toast";
import { ERegisterStatus } from "./register.i";

const Register = () => {
  const router = useRouter();
  const [acceptConditional, setAcceptConditional] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setConfirmation] = useState("");
  //handle toast
  const [displayToast, setDisplayToast] = useState(false);
  const [displayToastMessage, setDisplayToastMessage] = useState<ToastMessage>({
    message: ERegisterStatus.FAILURE,
    status: EToastStatus.ERROR,
  });
  const handleCloseToast = () => {
    setDisplayToast(false);
  };

  const onSubmit = () => {
    //check input fields
    if (
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      password === "" ||
      passwordConfirmation === ""
    ) {
      const message: ToastMessage = {
        message: ERegisterStatus.INVALID_FORM,
        status: EToastStatus.WARNING,
      };
      setDisplayToastMessage(message);
      setDisplayToast(true);
      return;
    }

    //check valid password
    if (passwordConfirmation !== password) {
      const message: ToastMessage = {
        message: ERegisterStatus.WRONG_PASSWORD,
        status: EToastStatus.WARNING,
      };
      setDisplayToastMessage(message);
      setDisplayToast(true);
      return;
    }
    //check accept conditions
    if (!acceptConditional) {
      const message: ToastMessage = {
        message: ERegisterStatus.SHOULD_ACCEPT,
        status: EToastStatus.WARNING,
      };
      setDisplayToastMessage(message);
      setDisplayToast(true);
      return;
    } else {
      onRegister({ email, password, firstName, lastName });
    }
  };

  const onRegister = (args: RegisterArgs) => {
    register(args)
      .then((res) => {
        if (res.status === 201) {
          const user: CreateChatUserArg = {
            avatar: "https://avatar.iran.liara.run/public",
            username: res.data.email,
            secret: password,
            email: res.data.email,
            first_name: res.data.firstName,
            last_name: res.data.lastName,
          };
          const message: ToastMessage = {
            message: ERegisterStatus.SUCCESS,
            status: EToastStatus.OK,
          };
          setDisplayToastMessage(message);
          setDisplayToast(true);
          createChatUser(user);
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 422) {
          const message: ToastMessage = {
            message: ERegisterStatus.EMAIL_REGISTERED,
            status: EToastStatus.ERROR,
          };
          setDisplayToastMessage(message);
          setDisplayToast(true);
        }
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
                Create and account
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
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your FirstName
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your LastName
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="last name"
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
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    value={passwordConfirmation}
                    onChange={(e) => {
                      setConfirmation(e.target.value);
                    }}
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      checked={acceptConditional}
                      onClick={() => {
                        setAcceptConditional(!acceptConditional);
                      }}
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
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

export default Register;
