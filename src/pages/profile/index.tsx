import HeaderOnly from "@/src/layouts/HeaderOnly/HeaderOnly";
import React from "react";

const Profile = () => {
  return (
    <HeaderOnly>
      <div className=" w-full ">
        <div className=" flex items-center justify-center  ">
          <div className=" w-full max-w-[572px]">
            <div>
              <div className="flex text-black">
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className=" font-bold text-[24px] text-gray-700 dark:text-white">Quốc Lê</h2>
                    <p className="text-gray-900 mb-2 text-lg dark:text-white">quoc_ld</p>
                  </div>
                  <p className="text-gray-900 mb-2 text-md dark:text-white">biobiobiobiboboibibbibo</p>
                </div>
                <div className="flex-1"></div>
                <div className="">
                  <img
                    className="w-28 h-28 rounded-full object-cover mr-2 shadow"
                    src={
                      "https://images.unsplash.com/photo-1694024259321-8822933a2366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                    }
                    alt="avatar"
                  />
                </div>
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
                <p className=" text-gray-500 mb-2 text-sm dark:text-white">1M follower</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderOnly>
  );
};

export default Profile;
