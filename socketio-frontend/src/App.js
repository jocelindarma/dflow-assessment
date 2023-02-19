import './App.css';
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [chatroom, setChatroom] = useState(false);

  const joinGroup = () => {
    if (name !== "" && group !== "") {
      socket.emit("join_group", group);
      setChatroom(true);
    }
  };

  return (
    <div className="App">
      {!chatroom ? (
        <div className="join-container">
          <h1>DFLOW Indonesia SocketIO Chatroom</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Group ID"
            onChange={(event) => {
              setGroup(event.target.value);
            }}
          />
          <button onClick={joinGroup}>Join Group</button>
        </div>
      ) : (
        <Chat socket={socket} name={name} group={group} />
      )}
    </div>
  );
}

export default App;
