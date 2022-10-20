import React from "react";

export const Banner = () => {
	return (
		<div className="relative m-5 h-[550px] max-w-[1660px]">
			<img
				className="relative h-[500px] w-full object-cover"
				src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
				alt="/greens"
			/>
			<div className="absolute top-0 flex h-full max-h-[500px] w-full flex-col justify-center border-2 border-green-500 bg-black/50 text-gray-200">
				<h1 className="md: px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
					Fresh <span className="text-green-500">Foods</span>
				</h1>
				<h1 className="md: px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
					<span className="text-green-500">Order </span>Now
				</h1>
			</div>
		</div>
	);
};
