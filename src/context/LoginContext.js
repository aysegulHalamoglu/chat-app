import React from "react";

export const LoginContext = React.createContext({
  user: null,
  selectedUser: null,
  friendList: [],
  clickedMore: false,
  login: () => {},
  logout: () => {},
  setSelectedUser: () => {},
  sendNewMessage: () => {},
  onClickedMore: () => {},
  handleCancel: () => {},
});
