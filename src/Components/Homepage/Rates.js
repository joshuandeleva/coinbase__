import React, { useEffect, useState } from "react";
import "./Rates.css";
import axios from "axios";
import { Container } from "@material-ui/core";
function Rates() {
	const [apiData, setApiData] = useState([]);
	//const API_KEY = "fc19a462c4720c420afbc478910aafffb91d11af";
	useEffect(() => {
		const fetchData = async () => {
			const resultsFromApi = await axios.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=3&page=1&sparkline=false"
			);
			console.log(resultsFromApi.data);
			setApiData(resultsFromApi.data);
		};
		fetchData();
	}, []);
	return (
		<div className="Rates-cardMain">
			<Container>
				{apiData &&
					apiData.map((rateItem, index) => {
						return (
							<div className="rateCard" key={index}>
								<div className="rateCard__Left">
									<img src={rateItem.image} alt="" />
									<h1>{rateItem.symbol.toUpperCase()}</h1>
								</div>
								<div className="rateCard__Right">
									<span style={{ paddingBottom: 5 }}>
										<small style={{ paddingRight: 20 }}>
											We buy
										</small>
										${rateItem.current_price.toFixed(1)}
									</span>
									<span>
										<small style={{ paddingRight: 20 }}>
											We Sell
										</small>{" "}
										${rateItem.high_24h.toFixed(1)}
									</span>
								</div>
							</div>
						);
					})}
			</Container>
		</div>
	);
}

export default Rates;
