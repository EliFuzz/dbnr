import React from "react";

import Loader from "Components/Loader";

const User = ({ isFetchingUsers, requestUsers, getUsers }) => {
  return (
    <div>
      <h1>User</h1>
      <div onClick={requestUsers}>Get all users</div>
      <Loader isActive={isFetchingUsers} />
      <ul>
        {getUsers &&
          getUsers.map(user => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default User;
