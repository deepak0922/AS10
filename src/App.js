import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/about" component={About} ></Route>
          <Route exact path="/contact" component={Contact} ></Route>
          <Route component={NotFound} ></Route>
        </Switch>
       
      </div>
    </Router>
  );
}
export default App;
