import React from "react";
import "./HomePage.css";
import Rates from "../Homepage/Rates";
import rocket from "../../assets/images/img1.png";
import client from "../../assets/images/customers.svg";
import btc from "../../assets/images/bitcoin1.svg";
import gftcard from "../../assets/images/Giftcard.svg";
import exper from "../../assets/images/expe1.svg";
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
			<div className="rates">
				<Container>
					<Grid container className="rates__">
						<Grid item xl={3} lg={3} sm={12} md={6}>
							<div className="rates-title">
								<h1>Our Rates</h1>
								<div className="rates-body">
									<Rates />
								</div>
							</div>
						</Grid>
						<Grid item xl={3} lg={3} sm={12} md={6}>
							<div className="rates-title">
								<h1>Our Services</h1>
								<Rates />
							</div>
						</Grid>
						<Grid item xl={3} lg={3} sm={12} md={6}>
							<div className="rates-title">
								<h1>Latest Exchange</h1>
								<Rates />
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="great-experience">
				<Container>
					<Grid container>
						<Grid item xl={6} lg={6} md={6} sm={6} className="maiD">
							<div className="expereince__left">
								<h4>Great experience with Coinbase</h4>
								<p>
									coinbase is a online site andpa2admnin site
									that allows users to buy ,sell and / exchage
									digital and flat assets safely .Owned and
									managed by Coinbase Business Services
									estamblished and incorporated in the
									universe{" "}
								</p>
								<a href="/">Discover</a>
							</div>
						</Grid>
						<Grid item xl={6} lg={6} md={6} sm={6}>
							<div className="experience__right">
								<img src={exper} alt="" />
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="trade-everyWhere">
				<Container>
					<div className="trades__">
						<Grid container>
							<Grid item xl={12} md={12} sm={12} lg={12}>
								<div className="trade__intro">
									<p>Trade from anywhere</p>
								</div>
							</Grid>

							<Grid container spacing={0}>
								<Grid
									item
									xl={6}
									md={6}
									sm={6}
									lg={6}
									className="maiD1"
								>
									<div className="trade__item">
										<img src={btc} alt="" />
										<small>Bitcoin</small>
									</div>
								</Grid>
								<Grid
									item
									xl={6}
									md={6}
									sm={6}
									lg={6}
									className="maiD1"
								>
									<div className="trade__item">
										<img src={gftcard} alt="" />
										<small>GiftCard</small>
									</div>
								</Grid>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
			<div className="blogs">
				<Container>
					<Grid container>
						<Grid item xl={12} md={12} lg={12} sm={12}>
							<div className="blogs__intro">
								<p>Our Blogs</p>
								<h6>
									Get to know the latest information about our
									deals and operations via our posts
								</h6>
							</div>
						</Grid>
						<Grid container>
							<Grid item xl={4} md={12} lg={4} sm={12}>
								<div className="blogs__Item">
									<div className="blogs__Title">
										<span>12|07|2021</span>
										<span>Technology</span>
									</div>
									<p>
										simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has
										been the industry's standard dummy text
										ever since the 1500s, when an unknown
										printer took a galley of type and
										scrambled it to make a type specimen
										book. It has survived not only five
									</p>
									<a href="/">Read more</a>
								</div>
							</Grid>
							<Grid item xl={4} md={12} lg={4} sm={12}>
								<div className="blogs__Item">
									<div className="blogs__Title">
										<span>12|07|2021</span>
										<span>Technology</span>
									</div>
									<p>
										simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has
										been the industry's standard dummy text
										ever since the 1500s, when an unknown
										printer took a galley of type and
										scrambled it to make a type specimen
										book. It has survived not only five
									</p>
									<a href="/">Read more</a>
								</div>
							</Grid>
							<Grid item xl={4} md={12} lg={4} sm={12}>
								<div className="blogs__Item">
									<div className="blogs__Title">
										<span>12|07|2021</span>
										<span>Technology</span>
									</div>
									<p>
										simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has
										been the industry's standard dummy text
										ever since the 1500s, when an unknown
										printer took a galley of type and
										scrambled it to make a type specimen
										book. It has survived not only five
									</p>
									<a href="/">Read more</a>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="clients__feedback">
				<Container>
					<div className="clients__say">
						<Grid container>
							<Grid item xl={12} md={12} lg={12} sm={12}>
								<div className="clients__details">
									<span>
										10,000 clients satisfied around the
										world
									</span>
									<p>
										Yeah we are proud with numbers ,We have
										helped thousands of clients all around
										the world with our bespoke services
									</p>
									<img src={client} alt="" />
								</div>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default HomePage;
