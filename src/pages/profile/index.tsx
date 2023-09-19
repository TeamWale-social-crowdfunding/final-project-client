import DefaultLayout from "@/src/layouts/DefaultLayout";
import { AuthHttpService } from "@/src/services/authentication/httpAuth.service";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import ProfilePosts from "./components/ProfilePosts";

const Profile = () => {
  const authHttpService = new AuthHttpService();
  const [currentUser, setCurrentUser]: any = useState();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      authHttpService.getCurrentUser().subscribe((data) => {
        setCurrentUser(data);
      });
    }
  }, [session]);

  const handleChangeAvatar = () => {
    console.log("change avatar");
  };

  const [menuProfile, setMenuProfile] = useState("posts");

  const handleClickMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setMenuProfile(event.currentTarget.value);
  };

  return (
    <DefaultLayout>
      <div className=" w-full ">
        <div className=" flex items-center justify-center  ">
          {currentUser && <div className=" w-full max-w-[572px]">
            <div className="mb-4">
              <div className="flex text-black">
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className=" font-bold text-[24px] text-gray-700 dark:text-white">
                      {currentUser.firstName + " " + currentUser.lastName}
                    </h2>
                    <p className="text-gray-900 mb-2 text-lg dark:text-white">
                      {currentUser.email}
                    </p>
                  </div>
                  <p className="text-gray-900 mb-2 text-md dark:text-white">
                    {currentUser.bio}
                  </p>
                </div>
                <div className="flex-1"></div>
                <button className="" onClick={handleChangeAvatar}>
                  <img
                    className="w-28 h-28 rounded-full object-cover mr-2 shadow"
                    src={
                      currentUser.avatar
                        ? currentUser.avatar
                        : "https://images.unsplash.com/photo-1694024259321-8822933a2366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                    }
                    alt="avatar"
                  />
                </button>
              </div>
              <div className="flex content-center items-center">
                <div className="flex mr-1 -space-x-3 content-center items-center">
                  <img
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src="https://images.unsplash.com/photo-1599032909756-5deb82fea3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                    alt=""
                  />
                  <img
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src="https://images.unsplash.com/photo-1541257710737-06d667133a53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80"
                    alt=""
                  />
                  <img
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt=""
                  />
                  <a
                    className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
                    href="#"
                  >
                    +3
                  </a>
                </div>
                <p className=" text-gray-500 text-sm dark:text-white">
                  1M follower
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="inline-flex shadow-sm w-full" role="group">
                <button
                  onClick={(event) => {
                    handleClickMenu(event);
                  }}
                  value={"posts"}
                  type="button"
                  className={`border-b-2 ${
                    menuProfile == "posts" && "border-b-gray-500"
                  } w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border hover:bg-gray-100 hover:text-black-700 focus:none dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`}
                >
                  Posts
                </button>
                <button
                  onClick={(event) => {
                    handleClickMenu(event);
                  }}
                  value={"replies"}
                  type="button"
                  className={`border-b-2 ${
                    menuProfile == "replies" && "border-b-gray-500"
                  } w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t hover:bg-gray-100 hover:text-black-700 focus:none dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`}
                >
                  Replies
                </button>
                <button
                  onClick={(event) => {
                    handleClickMenu(event);
                  }}
                  value={"reposts"}
                  type="button"
                  className={`border-b-2 ${
                    menuProfile == "reposts" && "border-b-gray-500"
                  } w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border hover:bg-gray-100 hover:text-black-700 focus:none dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`}
                >
                  Reposts
                </button>
              </div>
            </div>
            <div className="text-black">
              {menuProfile == "replies" ? (
                <div>Replies....</div>
              ) : menuProfile == "reposts" ? (
                <div>Reposts...</div>
              ) : (
                <div><ProfilePosts data={currentUser._id}></ProfilePosts></div>
              )}
            </div>
          </div>}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
