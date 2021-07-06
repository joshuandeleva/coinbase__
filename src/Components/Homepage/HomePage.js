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
					<Grid>
						<Grid xl={6} sm={6} md={6} lg={6}></Grid>
						<Grid xl={6} sm={6} md={6} lg={6}></Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
}

export default HomePage;
