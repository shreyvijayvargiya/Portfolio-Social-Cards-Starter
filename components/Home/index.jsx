import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/slice/userSlice";
import { LightThemeIcon, DarkThemeIcon } from "modules/Icons";
import { LinkCard } from "modules";

const Home = () => {
	const { user } = useSelector((state) => state);
	const values = user?.defaultPortfolioData;
	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleTheme({ theme: user?.theme }));
	};

	return (
		<div className="md:w-10/11 h-full sm:w-full mx-auto grid md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 justify-end items-start px-10">
			<div className="text-left flex flex-col justify-between items-start h-full py-10">
				<div>
					<img src="./images/avatar.png" className="w-60 h-60 rounded-full" />
					<div className="text-left m-4">
						<p className="text-5xl my-4">{values.heading}</p>
						<p className="text-xl md:w-4/5 sm:w-full xxs:w-full xs:w-full">
							{values?.description}
						</p>
					</div>
					<div className="m-4">
						<button className="bg-indigo-600 rounded-md hover:bg-indigo-700 dark:border-none p-3 dark:border-black text-white text-bold shadow-xl">
							<a
								href={`https://mailto@${values?.email}`}
								target="_blank"
							>
								Let's talk
							</a>
						</button>
					</div>
				</div>
				<div className="m-4">
					<button
						onClick={toggle}
						className="py-2 px-4 border-black bg-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100"
					>
						{user && user?.theme === "light" ? (
							<LightThemeIcon />
						) : (
							<DarkThemeIcon />
						)}
					</button>
				</div>
			</div>
			<div className="md:h-screen sm:h-auto md:overflow-scroll md:p-10">
				<LinkCard />
			</div>
		</div>
	);
};
export default Home;
