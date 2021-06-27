import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import Blogs from "./components/Blogs/index";
import Projects from "./components/Projects/index";
import Timeline from "./components/Timeline/index";
import Connect from "./components/Timeline/index";
import _404 from "./components/_404";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/connect" component={Connect} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/projects" component={Projects} />
          <Route path="/blogs" component={Blogs} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={_404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
