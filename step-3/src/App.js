import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = React.useState(undefined);
  React.useEffect(() => {
    const getUsers = async () => {
      return await fetch("https://reqres.in/api/users/");
    };

    getUsers()
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  console.log(users);

  return (
    <Router>
      <div className="App">
        <h1>Users App</h1>
        <Switch>
          <Route path="/" exact>
            {users && (
              <>
                {users.data.map((user, index) => {
                  return <User user={{ user }} key={index} />;
                })}
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
