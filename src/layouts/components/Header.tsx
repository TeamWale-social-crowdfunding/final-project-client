"use client";

import { useEffect, useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  ArrowPathIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { AuthHttpService } from "@/src/services/authentication/httpAuth.service";
import ButtonDarkMode from "@/src/components/ui/DarkModeButton";
import Link from "next/link";
import CreatePost from "@/src/components/ui/CreatePost";
import { clearChatUser } from "@/src/utils/sessionStore";

const products = [
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "",
    icon: ArrowPathIcon,
  },
];
interface SearchResult {
  id: number;
  title: string;
  description: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  /**
   * Session for user authenicate, form next auth
   */
  const { data: session, status } = useSession();
  const [currentUser, setCurrentUser] = useState<any>({});
  const authHttpService = new AuthHttpService();
  const router = useRouter();

  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleCreatePostOpen = () => {
    if (session) {
      setShowCreatePost(!showCreatePost);
    } else {
      router.push("/login");
    }
  };

  const handleCreatePostClose = (value: boolean) => {
    setShowCreatePost(!showCreatePost);
  };

  useEffect(() => {
    if (session) {
      authHttpService.getCurrentUser().subscribe((data) => {
        setCurrentUser(data);
      });
    }
  }, [session]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-20 z-50 ">
      <header className="fixed bg-white w-full dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-80 backdrop-blur-xl ">
        <nav
          className="mx-auto flex items-center h-20 px-3 lg:px-[18%]"
          aria-label="Global"
        >
          <div className="flex w-14 ">
            <a href="" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={logo}
                alt=""
                className="h-14 w-auto hover:scale-105 ease-in duration-100"
              />
            </a>
          </div>

          <div className="flex flex-1"></div>

          <div
            className="inline-flex rounded-md h-full w-[450px] justify-center fixed right-[50%] translate-x-[50%]"
            role="group"
          >
            <Link href="/" className="w-[20%] h-full">
              <button
                type="button"
                className="inline-flex w-full h-full justify-center items-center px-4 py-2 text-sm font-medium text-gray-400 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </button>
            </Link>

            <Link href="/search" className="w-[20%] h-full">
              <button
                type="button"
                className="inline-flex w-full h-full justify-center items-center px-4 py-2 text-sm font-medium text-gray-400 bold rounded-lg hover:bg-gray-100 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </Link>

            <Link href="" className="w-[20%] h-full">
              <button
                onClick={handleCreatePostOpen}
                type="button"
                className="inline-flex w-full h-full justify-center items-center px-4 py-2 text-sm font-medium text-gray-400 bold rounded-lg hover:bg-gray-100 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </Link>

            {session && (
              <Link href="/profile" className="w-[20%] h-full">
                <button
                  type="button"
                  className="inline-flex w-full h-full justify-center items-center px-4 py-2 text-sm font-medium text-gray-400 bold rounded-lg hover:bg-gray-100 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </button>
              </Link>
            )}
          </div>

          <div className="flex w-14 h-full">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 lg:justify-end  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className=""
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className=" fixed inset-y-0 right-0 z-[99] w-full overflow-y-auto bg-white px-6 py-6  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <a href="" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={logo} alt="" className="h-12 w-auto" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ">
                          Product
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2 ">
                          {[...products].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href=""
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Features
                  </a>

                  <ButtonDarkMode></ButtonDarkMode>
                </div>
                <div className="py-6">
                  {session ? (
                    <button
                      onClick={() => {
                        signOut();
                        clearChatUser();
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sign out
                    </button>
                  ) : (
                    <button
                      onClick={() => router.push("/login")}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sign in
                    </button>
                  )}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {showCreatePost && (
        <CreatePost onClose={handleCreatePostClose}></CreatePost>
      )}
    </div>
  );
}
