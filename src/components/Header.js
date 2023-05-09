import { Component } from 'react';
import Button from './Button';

// Creating a components using the class syntax
// 'Component' is the base class for class components

class Header extends Component {
  render() {
    let isLoggedIn = false;
    const{ title /*, link*/ } = this.props;
    return (

      <header>
        <div className='container flexbox'>
            <h1>{title}</h1>
            {/* <p>{link}</p> */}
            <Button isLoggedIn={isLoggedIn} />
        </div>
        </header>
    )
  }
}

export default Header