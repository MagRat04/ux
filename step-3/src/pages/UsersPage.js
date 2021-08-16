import React from "react";
import User from "../components/User";
import { getUsers } from "../api/api";

const UsersPage = () => {
  const [users, setUsers] = React.useState();
  React.useEffect(() => {
    async function getAllUsers() {
      const allUsers = await getUsers();
      setUsers(allUsers.data);
    }
    getAllUsers();
  }, []);

  return (
    <div>
      <h1 id="userpage__title">Users App</h1>
      <div className="grid">
        {users &&
          users.map((user) => (
            <User
              id={user.id}
              username={`${user.first_name} ${user.last_name}`}
              avatar={user.avatar}
              key={user.id}
            />
          ))}
      </div>
    </div>
  );
};
export default UsersPage;
