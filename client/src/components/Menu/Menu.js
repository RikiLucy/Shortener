import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link to="/">first page</Link>
        {' | '}
        {/*<Link to="/second_page">second page</Link>*/}
        {/*{' | '}*/}
        {/*<Link to="/third_page">third page</Link>*/}
      </div>
    );
  }
}

export default Menu;
