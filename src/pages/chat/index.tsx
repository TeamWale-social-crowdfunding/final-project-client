import { CHAT_ENGINE_PROJECT_ID } from "@/src/services/chat/chat.http.service";
import { getChatUser } from "@/src/utils/sessionStore";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = () => {
  const state = getChatUser();
  if (state) {
    const { chatUser } = state;
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <PrettyChatWindow
          projectId={CHAT_ENGINE_PROJECT_ID}
          username={chatUser.username}
          secret={chatUser.secret}
          style={{ height: "100%" }}
        />
      </div>
    );
  } else {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <div>No Authenication</div>
      </div>
    );
  }
};

export default ChatsPage;
