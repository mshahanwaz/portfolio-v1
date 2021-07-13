import { useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import Blogs from "./components/Blogs/index";
import Projects from "./components/Projects/index";
import Connect from "./components/Connect/index";
import _404 from "./components/_404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FullBlog from "./components/Blogs/components/FullBlog";

function App() {
  useEffect(() => {
    const fetchData = () => {
      fetch("/biodata.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/connect" component={Connect} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs/1" component={FullBlog} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={_404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
