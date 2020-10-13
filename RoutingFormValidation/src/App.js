import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import {Route,Switch} from 'react-router-dom'
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Display from './components/Display';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
         <Switch>
         <Route path="/" exact component={Form1}/>
          <Route path="/form2" exact component={Form2}/>
          <Route path="/display" exact component={Display}/>
          <Route render={()=><h1>Not Found</h1>}/>
           </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
