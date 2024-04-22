export const saveChatUser = (chatUser: any): void => {
  try {
    if (typeof window !== "undefined") {
      const chatUserJSON: string = JSON.stringify(chatUser);
      localStorage.setItem("chatUser", chatUserJSON);
    }
  } catch (error) {
    console.error("Error saving chat user:", error);
  }
};

export const getChatUser = (): any | null => {
  try {
    if (typeof window !== "undefined") {
      const chatUserJSON: string | null = localStorage.getItem("chatUser");
      if (chatUserJSON) {
        const chatUser: any = JSON.parse(chatUserJSON);
        return chatUser;
      }
    }
    return null;
  } catch (error) {
    console.error("Error retrieving chat user:", error);
    return null;
  }
};

export const clearChatUser = (): void => {
  try {
    if (typeof window !== "undefined") {
      localStorage.removeItem("chatUser");
    }
  } catch (error) {
    console.error("Error clearing chat user:", error);
  }
};
