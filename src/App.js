import { Switch, Route, Redirect } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Github from './Github'
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path="/contact" component ={Contact}/>
        <Route exact path="/service" component ={Service}/>
        <Route exact path="/about" component ={About}/>
        <Redirect to="/" ></Redirect>
        <Home />
      </Switch>
     
      <Github />
    </div>
  );
}

export default App;
