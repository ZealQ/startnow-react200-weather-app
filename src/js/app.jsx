import React from 'react';
import CityInfo from "./components/CityInfo";
import History from "./components/History";
import Search from "./components/Search";
import Week from "./components/Week";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='container'>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-3 text center">Origin Weather Application</h1>
              <p className="lead"> You will get wet with out an umbrella!</p>
            </div>
          </div>

          <Search />
          <div className="row">
            <CityInfo />
            <History />
            <Week />
            </div>
          </div>
        </div>
    );
  }
}

