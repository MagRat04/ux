import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UsersPage from "./pages/UsersPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <UsersPage />
          </Route>
          <Route path="/users/:id">
            <DetailsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
