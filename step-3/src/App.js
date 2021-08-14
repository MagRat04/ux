import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import { getUsers } from "./api/api";

function App() {
  const [users, setUsers] = React.useState(undefined);
  React.useEffect(() => {
    async function getAllUsers() {
      const allUsers = await getUsers();
      const userData = await allUsers.json();
      setUsers(userData);
    }
    getAllUsers();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {users && (
              <>
                <h1>Users App</h1>
                <div className="grid">
                  {users.data.map((user, index) => {
                    return <User data={user} key={index} />;
                  })}
                </div>
              </>
            )}
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
