import React from "react";
import { useSelector } from "react-redux";
import { RenderIconComponent } from "modules/Icons";

const LinkCard = () => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData["socialMedia"]?.content;

	return (
		<div className="p-4 h-full">
			<div className="py-5 rounded-md grid md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 items-start gap-4 w-full">
				{values &&
					values.length > 0 &&
					values.map((item) => (
						<a
							href={item?.link}
							key={item?.name}
							target="_blank"
							className="m-2 border border-gray-300 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-800"
						>
							<div className="flex justify-start items-center gap-2">
								{item.metadata.icon ? (
									<img
										src={item.metadata.icon}
										className="w-6 h-auto object-contain rounded-full"
									/>
								) : (
									<RenderIconComponent name={item.name} />
								)}
								<p className="text-xl">{item?.name}</p>
							</div>
							<div>
								<p className="text-left text-xs my-4">
									{item?.metadata?.description}
								</p>
								{item?.metadata && item?.metadata?.image && (
									<img
										src={item?.metadata?.image}
										className="w-full h-auto my-4 rounded-md object-fit"
									/>
								)}
							</div>
						</a>
					))}
			</div>
		</div>
	);
};

export default LinkCard;
