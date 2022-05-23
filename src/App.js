import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={"/login"}><Header /><h1>login page</h1></Route>
          <Route path={"/checkout"}>
            <Header />
            <Checkout />
          </Route>
          <Route path={"/"}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
