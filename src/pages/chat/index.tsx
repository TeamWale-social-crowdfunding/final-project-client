import { CHAT_ENGINE_PROJECT_ID } from "@/src/services/chat/chat.http.service";
import { getChatUser } from "@/src/utils/sessionStore";
import { useRouter } from "next/router";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = () => {
  const state = getChatUser();
  const { chatUser } = state ? state : [];
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {chatUser ? (
        <PrettyChatWindow
          projectId={CHAT_ENGINE_PROJECT_ID}
          username={chatUser.username}
          secret={chatUser.secret}
          style={{ height: "100%" }}
        />
      ) : (
        <div className="flex align-middle justify-center">
          <p className="bold text-xl ">Please login first</p>
        </div>
      )}
    </div>
  );
};

export default ChatsPage;
