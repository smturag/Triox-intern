import Entry from './Page/Entry'
import Home from './Page/Home';
import './App.css';
import {  Col, Row} from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
              <Row> 
              <Col><h1><Link to="/">Home</Link> </h1></Col>
                <Col>  <h1> <Link to="/entry">Entry</Link></h1></Col>
              </Row>

        <Switch>
          <Route path="/entry">
            <Entry />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

    </Router>
       
    </div>
  );
}

export default App;
