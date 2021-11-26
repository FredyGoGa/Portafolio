
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacto from './Contacto';
function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Switch>
            

            <Route path="/Contacto">
                <Contacto /> 
            </Route>

            <Route path="/">
                <Home/>
            </Route>


          </Switch>
        </Router>






        
        
        <Footer/>           
    </div>
  );
}

export default App;
