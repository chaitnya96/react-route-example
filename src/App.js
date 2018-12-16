import React from 'react';
import Home from './Home';
import NewComponent from './NewComponent'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
let App =()=> {
    return (
      <div>
       <Router>
       <div>
          <Switch>
            <Route exact  path="/" component={Home}>
            </Route>
            <Route path="/acd" component={NewComponent} />
          </Switch>
          </div>
        </Router>
     </div>
    );
  }



export default App;
