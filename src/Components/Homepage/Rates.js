import React, { useEffect, useState } from "react";
import "./Rates.css";
import axios from "axios";
import { Container, Grid } from "@material-ui/core";
function Rates() {
	const [apiData, setApiData] = useState("");
	const API_KEY = "fc19a462c4720c420afbc478910aafffb91d11af";
	useEffect(() => {
		const fetchData = async () => {
			const resultsFromApi = await axios.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
			);
			console.log(resultsFromApi);
			setApiData(resultsFromApi.apiData);
		};
		fetchData();
	});
	return (
		<div className="Rates-card">
			<Container></Container>
		</div>
	);
}

export default Rates;
