import React, {Component} from 'react';

class NavBar extends Component {
		render(){
			return(
		<nav className="nav navbar-expand-sm navbar-light bg-dark justify-content-end">
			<div className="collapse nav-bar d-flex fontABackground" id="navbarNavDropdown">
					<li className="nav-item mobile"><a><i className="fas fa-search fontA"></i></a></li>
					<li className="nav-item slant slantBorder"><a href="https://www.google.com/maps/place/Chicago,+IL/@41.8333925,-88.0121478,10z/data=!3m1!4b1!4m5!3m4!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!8m2!3d41.8781136!4d-87.6297982"><i className="fas fa-map-marker fontA"></i></a></li>
					<li className="nav-item slant"><a href="tel:773-123-4567"><i className="fas fa-phone fontA"></i></a></li>
					<li className="nav-item slant mobile"><a><i className="far fa-clock fontA"></i></a></li>
			</div>
		</nav>
			);
		}
}

export default NavBar;
