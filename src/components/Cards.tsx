import React from "react";
import { CardInfo } from "../interface/interface";

export const Cards = ({
	title,
	subTitle,
	img,
	border,
	button,
	text,
}: CardInfo) => {
	return (
		<div className={border}>
			{/* overlay */}
			<div
				className={`absolute h-full w-full rounded-xl bg-black/50 ${text}`}
			>
				<p className="px-2 pt-4 text-2xl font-bold">{title}</p>
				<p className="px-2">{subTitle}</p>
				<button className={button}>Order Now</button>
			</div>
			<img
				className="max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]"
				src={img}
				alt="/"
			/>
		</div>
	);
};
