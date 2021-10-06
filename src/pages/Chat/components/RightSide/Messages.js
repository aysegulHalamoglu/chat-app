import React, { useContext } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import { ThemeContext } from "../../../../context/ThemeContext";
export default function Messages() {
  const { selectedUser, user } = useContext(LoginContext);
  const { theming } = useContext(ThemeContext);
  console.log("user:", user);
  console.log("selectedUser:", selectedUser);

  return (
    <div
      className={theming === "light" ? "messages bgGray1" : "messages bgGray3"}
    >
      <div className="scrollbar">
        {selectedUser?.messages.map((message, index) => {
          return (
            <div
              className={`messageContainer ${
                message.sender === user.id ? "fromUser" : "fromFriend"
              }`}
              key={index}
            >
              <div
                className={
                  theming === "light"
                    ? `message ${
                        message.sender === user.id ? "bgBlue2" : "bgGray2"
                      }`
                    : `message ${
                        message.sender === user.id
                          ? "bgBlue3 cWhite"
                          : "bgGray5 cWhite"
                      }`
                }
              >
                <p> {message.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// return (
//   <div className="messages">
//     {selectedUser
//       ? selectedUser.messages.map((message, index) => {
//           return (
//             <div
//               className={`messageContainer ${
//                 message.sender === user.id ? "fromUser" : "fromFriend"
//               }`}
//               key={index}
//             >
//               <p className="messageContainer">{message.text}</p>
//             </div>
//           );
//         })
//       : null}
//   </div>
// );
// }
