import React from "react";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendItem friends={friends} />
    </ul>
  );
};

const FriendItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    let status = isOnline ? "online" : "offline";
    return (
      <li className="item" key={id}>
        <span className={status}></span>
        <img src={avatar} alt="User avatar" className="user-avatar" />
        <p className="user-name">{name}</p>
      </li>
    );
  });
};

export default FriendList;

// import { Item, Name, Online, Ofline } from "./css/FriendList.module.css";

// const FriendListItem = ({ avatar, name, isOnline }) => {
//   let status = isOnline ? Online : Ofline;
//   return (
//     <li className={Item}>
//       <span className={status}></span>
//       <img src={avatar} alt="User avatar" width="48" />
//       <p className={Name}>{name}</p>
//     </li>
//   );
// };

// const FriendList = ({ friends }) => {
//   return (
//     <ul style={{ padding: "0" }}>
//       {friends.map(({ avatar, name, isOnline, id }) => {
//         return (
//           <FriendListItem
//             key={id}
//             avatar={avatar}
//             name={name}
//             isOnline={isOnline}
//           />
//         );
//       })}
//     </ul>
//   );
// };
