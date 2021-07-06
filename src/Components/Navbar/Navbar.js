import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/Logo.svg";
import { Container } from "@material-ui/core";
function Navbar() {
	return (
		<div className="MainNavbar">
			<Container>
				<div className="mainNavbarItems">
					<div className="mainLogo">
						<img src={Logo} alt="" />
					</div>
					<div className="navbarRight">
						<div className="navbarRight__Items">
							<ul>
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/about-us">About us</a>
								</li>
								<li>
									<a href="/blog">Blog</a>
								</li>
								<li>
									<a href="/contact-us">Contact us</a>
								</li>
								<li>
									<a href="sell-bitcoin">Sell Bitcoin</a>
								</li>
								<li>
									<a href="/buy-bitcoin">GiftCard</a>
								</li>
								<li>
									<a href="/login">Login</a>
								</li>
								<li>
									<a href="/register">Register</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Navbar;
