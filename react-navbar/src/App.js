import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Report from "./pages/Report"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Product}/>
          <Route exact path="/reports" component={Report}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
