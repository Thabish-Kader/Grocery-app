import {
	collection,
	addDoc,
	doc,
	updateDoc,
	arrayUnion,
} from "firebase/firestore";
import React, { FC, useState } from "react";
import { auth, db } from "../config/firebase";
import { dairy, fruits, vegetable } from "../data";
import { FoodData } from "../interface/interface";

export const Services: FC = () => {
	const [data, setData] = useState<FoodData[]>(vegetable);
	const allData: FoodData[] = [...dairy, ...fruits, ...vegetable];
	const user = auth.currentUser;

	const handleVegetables = (): void => {
		setData(vegetable);
	};

	const handleFruits = (): void => {
		setData(fruits);
	};

	const handleDairy = (): void => {
		setData(dairy);
	};
	const handleAll = (): void => {
		setData(allData);
	};
	const cartRef = doc(db, "cart", `${user?.email}`);

	const addItem = async (item: FoodData) => {
		try {
			await updateDoc(cartRef, {
				myCart: arrayUnion({
					id: item.id,
					name: item.name,
					image: item.image,
					price: item.price,
				}),
			});
			console.log("Document written with ID: ", cartRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<section className="flex h-full w-full max-w-[1660px] flex-col items-center justify-center p-10">
			<h1 className="text-4xl text-green-500">
				Food Products Availaible
			</h1>
			{/* Filter option */}
			<div className=" flex flex-col items-center justify-center ">
				<h2 className="text-xl font-bold ">Filter type</h2>
				<div className=" my-5 grid min-w-[500px] grid-cols-4 flex-wrap justify-between">
					<button
						onClick={handleAll}
						className="  w-[100px] rounded-xl bg-green-500 text-black duration-500 hover:scale-110 hover:bg-white hover:text-green-500"
					>
						All
					</button>
					<button
						onClick={handleVegetables}
						className="  w-[100px] rounded-xl bg-green-500 text-black duration-500 hover:scale-110 hover:bg-white hover:text-green-500"
					>
						Vegetables
					</button>
					<button
						onClick={handleFruits}
						className=" w-[100px] rounded-xl bg-green-500 text-black duration-500 hover:scale-110 hover:bg-white hover:text-green-500"
					>
						Fruits
					</button>
					<button
						onClick={handleDairy}
						className=" w-[100px] rounded-xl bg-green-500 text-black duration-500 hover:scale-110 hover:bg-white hover:text-green-500"
					>
						Dairy
					</button>
				</div>
			</div>
			{/* Items */}
			<div className="ls:grid-cols3 grid grid-cols-1 gap-6 pt-4 md:grid-cols-2 xl:grid-cols-4">
				{data.map((data, id) => (
					<div
						onClick={() => addItem(data)}
						key={id}
						className="h-[460px] cursor-pointer rounded-lg border-b-2 border-green-500 duration-500 hover:scale-110"
					>
						<img
							className="h-[400px] w-full rounded-lg object-cover"
							src={data.image}
							alt={data.name}
						/>
						<div className="m-3 flex justify-between">
							<p className="text-2xl text-green-500">
								{data.name}
							</p>
							<p className="text-2xl">
								<span className=" rounded-full bg-green-500 font-bold text-black">
									{data.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
