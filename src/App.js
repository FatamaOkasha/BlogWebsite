import TopBar from "./components/TopBar/TopBar";
import Home from "./components/AppPages/Home/Home";
import Single from "./components/AppPages/Single/Single";
import Write from "./components/AppPages/Write/Write";
import Settings from "./components/AppPages/Settings/Settings";
import Login from "./components/AppPages/Login/Login";
import Register from "./components/AppPages/Register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const user = true;
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">{user ? <Home /> : <Register />}</Route>
            <Route path="/login">{user ? <Home /> : <Login />}</Route>
            <Route path="/write">{user ? <Write /> : <Register />}</Route>
            <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
            <Route path="/post/:postId">
              <Single />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
