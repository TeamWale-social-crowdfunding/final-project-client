import DefaultLayout from "@/src/layouts/DefaultLayout";
import { CHAT_ENGINE_PROJECT_ID } from "@/src/services/chat/chat.http.service";
import { getChatUser } from "@/src/utils/sessionStore";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = () => {
  const state = getChatUser();
  const { chatUser } = state ? state : [];
  return (
    <DefaultLayout>
      <div className="w-[100%] h-[80vh] flex align-middle justify-center">
        {chatUser ? (
          <div style={{ height: "90vh", width: "65vw" }}>
            <PrettyChatWindow
              projectId={CHAT_ENGINE_PROJECT_ID}
              username={chatUser.username}
              secret={chatUser.secret}
              style={{ height: "100%" }}
            />
          </div>
        ) : (
          <div className="flex align-middle justify-center">
            <a href="/login" className="bold text-xl ">
              Please login first
            </a>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default ChatsPage;
