import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ socket, name, group }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const data = {
        name: name,
        group: group,
        message: currentMessage,
      };

      await socket.emit("send_message", data);
      setMessages((list) => [...list, data]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((list) => [...list, data]);
    });
    return () => socket.removeListener("receive_message");
  }, [socket]);

  return (
    <div className="chat">
      <div className="chat-header">
        <p>DFLOW SocketIO Chatroom</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="scroll-container">
          {messages.map((message) => {
            return (
              <div className="message" id={name === message.name ? "you" : ""}>
                <div>
                  <div className="message-content">
                    <p>{message.message}</p>
                  </div>
                  <div className="message-name">
                    <p id="name">{message.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type something here..."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>&#10095;</button>
      </div>
    </div>
  );
};

export default Chat;
