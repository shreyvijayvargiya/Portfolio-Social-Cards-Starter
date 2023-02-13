import React from "react";
import { Home } from "components";
import axios from "axios";
import { portfolioData } from "utils";

const HomePage = (props) => <Home props={props} />;
export default HomePage;

export async function getServerSideProps() {
	const values = portfolioData["socialMedia"]?.content;
	const urlsData = [];

	// values?.forEach(async (item) => {
	// 	try {
	// 		const metadata = await axios.post("/api/getMetadata", {
	// 			url: item?.link,
	// 		});
	// 		urlsData.push(metadata?.data);
	// 	} catch (error) {
	// 		console.log(error, "error");
	// 	}
	// });

	return {
		props: {},
	};
}
