import SearchForm from "@/src/components/form/SearchForm";
import DefaultLayout from "@/src/layouts/DefaultLayout";
import React from "react";

const index = () => {
  return (
    <DefaultLayout>
      <div className=" w-full ">
        <div className=" flex items-center justify-center  ">
          <div className=" w-full max-w-[572px]">
            <SearchForm></SearchForm>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default index;
