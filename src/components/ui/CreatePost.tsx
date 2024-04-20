import { createPost } from "@/src/services/post/postPomiseHandle";
import React, { ChangeEvent, useState } from "react";
import Loading from "./Loading";

interface ChildProps {
  onClose: (data: any) => void;
}

const CreatePost = (props: ChildProps) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    if (event.target.files) {
      const selectedFiles: FileList = event.target.files;
      const filesArray: File[] = Array.from(selectedFiles);
      setFiles(filesArray);
    }
    console.log(files);
  };

  const handleSubmit = async () => {
    try {
      console.log("handleSubmit");
      console.log(files);
      setLoading(true);
      await createPost({ content, published: true, files }).then(() => {
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="fixed flex items-center justify-center bg-slate-800 bg-opacity-50 top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-opacity-100 bg-white rounded-[30px] shadow dark:bg-gray-700 p-4 max-h-[800px] overflow-auto">
          <div className=" absolute right-0 flex items-start justify-between p-4">
            <button
              onClick={props.onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="mb-6">
            <label className="sr-only">Your message</label>
            <div className="items-left justify-center pt-[20px] rounded-lg min-h-[200px] flex flex-col space-y-[20px]">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="multiple_files"
              >
                Content
              </label>
              <input
                value={content}
                onChange={(e) => {
                  setContent(e.currentTarget.value);
                }}
                id="chat"
                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg bg-none  dark:text-white border-none focus:ring-0 "
                placeholder="Your message..."
              ></input>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="multiple_files"
              >
                Upload multiple files
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="multiple_files"
                type="file"
                multiple
                onChange={handleFileChange}
              ></input>
              <div className="flex">
                <div className="flex-1"></div>
                <button
                  onClick={() => handleSubmit()}
                  type="button"
                  className="inline-flex w-[100px] h-7 justify-center items-center px-4 py-2 text-sm font-medium text-gray-400 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 bg-opacity-50 border border-gray-400"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {loading && <Loading></Loading>}
    </div>
  );
};
export default CreatePost;
