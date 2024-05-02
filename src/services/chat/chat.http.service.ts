import { saveChatUser } from "@/src/utils/sessionStore";
import axios from "axios";

const chatAPi = axios.create({
  baseURL: "https://api.chatengine.io/" as string,
});

export interface CreateChatUserArg {
  avatar: string;
  username: string;
  secret: string;
  email: string;
  first_name: string;
  last_name: string;
}

export const CHAT_ENGINE_PRIVATE_KEY = "385516a2-30c1-42f9-86a0-c2c9c3ab1c3e";
export const CHAT_ENGINE_PROJECT_ID = "ef8de218-f214-4f6d-a96a-8924f7fcb817";

export const createChatUser = async (arg: CreateChatUserArg) => {
  console.log("Starting createChatUser");
  console.log(arg);
  const { username, secret, email, first_name, last_name } = arg;
  try {
    return await chatAPi.post(
      "users",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
    );
  } catch (e) {
    console.error("Error creating chat user:", e);
  }
};

export interface LoginChatUserArg {
  username: string;
  secret: string;
}

export const loginChat = async (arg: LoginChatUserArg) => {
  console.log("CHAT LOGIN START");
  console.log(arg);
  const { username, secret } = arg;

  try {
    return await chatAPi
      .get("users/me/", {
        headers: {
          "Project-ID": CHAT_ENGINE_PROJECT_ID,
          "User-Name": username,
          "User-Secret": secret,
        },
      })
      .then((res) => {
        saveChatUser({ chatUser: { ...res.data, secret: arg.secret } });
      });
  } catch (e) {
    console.error("Error login chat user:", e);
  }
};
