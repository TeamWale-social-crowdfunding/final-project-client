import axios from "axios";

const postApi = axios.create({ baseURL: "http://localhost:3005" });

export interface CreatePostArgs {
  content: string;
  published: boolean;
  files: any[];
}

export const createPost = async (data: CreatePostArgs) => {
  console.log("data.files");
  console.log(data.files);
  try {
    const formData = new FormData();
    formData.append("content", data.content);
    formData.append("published", "true");

    // Append files to formData
    data.files.forEach((file) => {
      formData.append("files[]", file);
    });

    console.log("formData");
    console.log(formData);

    const res = await postApi.post(
      "/",
      formData, // Truyền formData trực tiếp
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    console.error("Error uploading files:", error);
  }
};

export const deletePost = async (postId: string) => {
  try {
    const res = await postApi.patch(
      "/delete",
      { post_id: postId },
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    console.error("Error delete post:", error);
  }
};
