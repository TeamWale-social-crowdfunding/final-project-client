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

export const CHAT_ENGINE_PRIVATE_KEY = "5ef3fab2-dac7-48c8-845f-0899e3a1874e";
export const CHAT_ENGINE_PROJECT_ID = "4cc9e7b0-705d-4e6e-9610-29879ab595b8";

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
