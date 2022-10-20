import React from "react";
import { Cards } from "./Cards";

export const CategoryCards = () => {
	return (
		<div className=" mx-5 flex max-w-[1640px] flex-col gap-6 md:grid md:grid-cols-3">
			<Cards
				title={"Fresh Vegetables"}
				subTitle={"100% Natural"}
				img={
					"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
				}
				border={
					"relative rounded-xl border-2 border-green-500 duration-500 hover:scale-110"
				}
				button={
					"absolute bottom-4 mx-2 w-[100px] rounded-lg border-white bg-green-500 text-black"
				}
				text={"text-green-500"}
			/>

			<Cards
				title={"Fresh Fruits"}
				subTitle={"Juicy"}
				img={
					"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
				}
				border={
					"relative rounded-xl border-2 border-red-500 duration-500 hover:scale-110"
				}
				button={
					"absolute bottom-4 mx-2 w-[100px] rounded-lg border-white bg-red-500 text-black"
				}
				text={"text-red-500"}
			/>

			<Cards
				title={"Dairy"}
				subTitle={"Free Range"}
				img={
					"https://images.unsplash.com/photo-1646834107441-507129033287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGslMjBhbmQlMjBlZ2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
				}
				border={
					"relative rounded-xl border-2 border-yellow-500 duration-500 hover:scale-110"
				}
				button={
					"absolute bottom-4 mx-2 w-[100px] rounded-lg border-white bg-yellow-500 text-black"
				}
				text={"text-yellow-500"}
			/>
		</div>
	);
};
