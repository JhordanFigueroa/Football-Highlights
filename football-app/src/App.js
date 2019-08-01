import React from 'react';
import './App.css';
import Header from './Components/Header/';
import Footer from './Components/Footer/';
import VideoContainer from './Components/VideoContainer/';
import SportNews from './Components/SportNews/';
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      articles: [],
      isLoaded: false
    }
    this.props = props;
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path='/' render={() => <VideoContainer />} />
          <Route path="/sportnews" render={() => <SportNews />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
