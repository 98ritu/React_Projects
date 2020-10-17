import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Form1 from './components/Form1';
import Form2 from './components/Form2';



class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
       <Route path="/" exact component={Form1}/>
       <Route path="/form2" component={Form2}/>
       
       </BrowserRouter>
      </div>
    )
  }
}

export default App;
