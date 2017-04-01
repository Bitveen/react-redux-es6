import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux</p>
        <Link to="about" className="btn btn-primay btn-kg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
