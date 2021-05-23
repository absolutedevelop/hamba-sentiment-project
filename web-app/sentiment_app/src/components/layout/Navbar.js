import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

	return (

		<div className="navbar-fixed">
		    <nav className="grey darken-4">
		      <div className="container nav-wrapper">
		        <Link to='/' className="brand-logo">Sentiment-Tweet-App</Link>
		        <ul className="right hide-on-med-and-down">
		          <li><Link to='/' className="">Tweets</Link></li>
		        </ul>
		      </div>
		    </nav>
		  </div>

	);

}

export default Navbar;
