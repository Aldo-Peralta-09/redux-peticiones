import React from 'react';
import { 
	BrowserRouter as Router, 
	Route,
	Switch
} from "react-router-dom";
import Header from './components/Header';
import './css/header.css';
import './css/footer.css';
import Footer from './components/Footer';
import GetData from './views/GetData';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={GetData}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
