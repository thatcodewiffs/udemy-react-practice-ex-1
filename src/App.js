import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const defaultUsers = [];

function App() {
  const [userList, setUserList] = useState(defaultUsers);

  const AddUserHandler = (data) => {
    setUserList((prevState) => {
      return [...prevState, data];
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
