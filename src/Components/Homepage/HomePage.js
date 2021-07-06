import React from "react";
import "./HomePage.css";
import rocket from "../../assets/images/img1.png";
import layer from "../../assets/images/Layer2.svg";
import { Container, Grid } from "@material-ui/core";
function HomePage() {
	return (
		<div className="homePage">
			<div className="belowNav">
				<Container>
					<Grid container>
						<Grid
							item
							sm={12}
							md={6}
							lg={6}
							xl={6}
							className="maiD"
						>
							<div className="belowNav__Left">
								<h4>
									We provide easy solution for you to exchange
									your Bitcoin /GiftCard from Money
								</h4>
								<p>
									coinbase is a online platform for trading
									your bitcoin and and giftcard at the best
									price rates ever .Why not give a trial
								</p>
								<a href="/register">Get Started</a>
							</div>
						</Grid>
						<Grid
							item
							sm={12}
							md={6}
							lg={6}
							xl={6}
							className="maiD"
						>
							<div className="belowNav__Right">
								<img src={rocket} alt="" />
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="welcome">
				<Container>
					<Grid container>
						<Grid xl={6} sm={12} md={6} lg={6}>
							<div className="welcomeLeft">
								<img src={layer} alt="" />
							</div>
						</Grid>
						<Grid xl={6} sm={12} md={6} lg={6} className="maiD">
							<div className="welcomeRight">
								<h1>Welcome to Coinbase</h1>
								<p>
									We have the best rates.Simply start your
									exchange rates now.Sign up for our Affiliate
									program and earn some commission from each
									exchange.The earnings are credited in your
									account instantly and can be withdrawn right
									away.Also note some exchange directions are
									hidden for unregistered user.To ensure to
									have access to all our exchange directions
									and benefits .Kindly sign up and verify your
									identity
								</p>
								<a href="/about-us">Discover</a>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
}

export default HomePage;
